---
title: "其他補充"
sidebar_label: "其他補充"
sidebar_position: 3
---

## 客製 typescript 內容

```typescript
import { generateApi } from "swagger-typescript-api";

await generateApi({
  template: "path_to_template_dir",
});
```

- 使用 generateApi 的 `template` 選項
- swagger-typescript-api 使用 [Eta](https://eta.js.org/) 樣板產生 typescript 文件，[github 上有提供各樣版](https://github.com/acacode/swagger-typescript-api/tree/master/templates)做客製

例如 swagger-typescript-api 用下列樣板產生 api class，如果有其他需要可以直接調整該樣板

```ejs title="api.ejs"
<!-- 計算資料 -->
<%
const { apiConfig, routes, utils, config } = it;
const { info, servers, externalDocs } = apiConfig;
const { _, require, formatDescription } = utils;

const server = (servers && servers[0]) || { url: "" };

const descriptionLines = _.compact([
  `@title ${info.title || "No title"}`,
  info.version && `@version ${info.version}`,
  info.license && `@license ${_.compact([
    info.license.name,
    info.license.url && `(${info.license.url})`,
  ]).join(" ")}`,
  info.termsOfService && `@termsOfService ${info.termsOfService}`,
  server.url && `@baseUrl ${server.url}`,
  externalDocs.url && `@externalDocs ${externalDocs.url}`,
  info.contact && `@contact ${_.compact([
    info.contact.name,
    info.contact.email && `<${info.contact.email}>`,
    info.contact.url && `(${info.contact.url})`,
  ]).join(" ")}`,
  info.description && " ",
  info.description && _.replace(formatDescription(info.description), /\n/g, "\n * "),
]);

%>

<!-- 是否用 axios 做 http client -->
<% if (config.httpClientType === config.constants.HTTP_CLIENT.AXIOS) { %> import type { AxiosRequestConfig, AxiosResponse } from "axios"; <% } %>

<!-- api 描述 -->
<% if (descriptionLines.length) { %>
/**
<% descriptionLines.forEach((descriptionLine) => { %>
* <%~ descriptionLine %>

<% }) %>
*/
<% } %>

<!-- api class 是否使用 axios -->
export class <%~ config.apiClassName %><SecurityDataType extends unknown><% if (!config.singleHttpClient) { %> extends HttpClient<SecurityDataType> <% } %> {

<!-- 是否為單一 http client -->
<% if(config.singleHttpClient) { %>
  http: HttpClient<SecurityDataType>;

  constructor (http: HttpClient<SecurityDataType>) {
    this.http = http;
  }
<% } %>

<!-- modular: true -->
<% if (routes.outOfModule) { %>
  <% for (const route of routes.outOfModule) { %>

  <!-- 迭帶寫出所有 route 方法 -->
  <%~ includeFile('./procedure-call.ejs', { ...it, route }) %>

  <% } %>
<% } %>

<!-- modular: false -->
<% if (routes.combined) { %>
  <% for (const { routes: combinedRoutes = [], moduleName } of routes.combined) { %>
  <%~ moduleName %> = {
  <% for (const route of combinedRoutes) { %>

  <!-- 迭帶寫出所有 route 方法 -->
  <%~ includeFile('./procedure-call.ejs', { ...it, route }) %>

  <% } %>
  }
  <% } %>
<% } %>
}
```

## 校正後端型別

使用 `primitiveTypeConstructs` 選項，指定後端型別預設的 typescript 型別

```typescript
type PrimitiveTypeStructValue =
  | string
  | ((
      schema: Record<string, any>,
      parser: import("./src/schema-parser/schema-parser").SchemaParser
    ) => string);

type PrimitiveTypeStruct = Record<
  "integer" | "number" | "boolean" | "object" | "file" | "string" | "array",
  | string
  | ({ $default: PrimitiveTypeStructValue } & Record<
      string,
      PrimitiveTypeStructValue
    >)
>;

declare const primitiveTypeConstructs: (
  struct: PrimitiveTypeStruct
) => Partial<PrimitiveTypeStruct>;

generateApi({
  // ...
  primitiveTypeConstructs: (struct) => ({
    integer: () => "number",
    number: () => "number",
    boolean: () => "boolean",
    object: () => "object",
    file: () => "File",
    string: {
      $default: () => "string",

      /** formats */
      binary: () => "File",
      file: () => "File",
      "date-time": () => "string",
      time: () => "string",
      date: () => "string",
      duration: () => "string",
      email: () => "string",
      "idn-email": () => "string",
      "idn-hostname": () => "string",
      ipv4: () => "string",
      ipv6: () => "string",
      uuid: () => "string",
      uri: () => "string",
      "uri-reference": () => "string",
      "uri-template": () => "string",
      "json-pointer": () => "string",
      "relative-json-pointer": () => "string",
      regex: () => "string",
    },
    array: (schema, parser) => {
      const content = parser.getInlineParseContent(schema.items);
      return parser.safeAddNullToType(schema, `(${content})[]`);
    },
  }),
});
```

例子，date-time 一律改為 Date

```typescript
generateApi({
  primitiveTypeConstructs: (struct) => ({
    string: {
      "date-time": "Date",
    },
  }),
});
```

## 校正 typescript 型別

使用 `codeGenConstructs` 選項，方法類似 `primitiveTypeConstructs`，會覆蓋指定的類型

```typescript
generateApi({
  // ...
  codeGenConstructs: (struct) => ({
    Keyword: {
      Number: "number",
      String: "string",
      Boolean: "boolean",
      Any: "any",
      Void: "void",
      Unknown: "unknown",
      Null: "null",
      Undefined: "undefined",
      Object: "object",
      File: "File",
      Date: "Date",
      Type: "type",
      Enum: "enum",
      Interface: "interface",
      Array: "Array",
      Record: "Record",
      Intersection: "&",
      Union: "|",
    },
    CodeGenKeyword: {
      UtilRequiredKeys: "UtilRequiredKeys",
    },
    /**
     * $A[] or Array<$A>
     */
    ArrayType: (content) => {
      if (this.anotherArrayType) {
        return `Array<${content}>`;
      }

      return `(${content})[]`;
    },
    /**
     * "$A"
     */
    StringValue: (content) => `"${content}"`,
    /**
     * $A
     */
    BooleanValue: (content) => `${content}`,
    /**
     * $A
     */
    NumberValue: (content) => `${content}`,
    /**
     * $A
     */
    NullValue: (content) => content,
    /**
     * $A1 | $A2
     */
    UnionType: (contents) => _.join(_.uniq(contents), ` | `),
    /**
     * ($A1)
     */
    ExpressionGroup: (content) => (content ? `(${content})` : ""),
    /**
     * $A1 & $A2
     */
    IntersectionType: (contents) => _.join(_.uniq(contents), ` & `),
    /**
     * Record<$A1, $A2>
     */
    RecordType: (key, value) => `Record<${key}, ${value}>`,
    /**
     * readonly $key?:$value
     */
    TypeField: ({ readonly, key, optional, value }) =>
      _.compact([
        readonly && "readonly ",
        key,
        optional && "?",
        ": ",
        value,
      ]).join(""),
    /**
     * [key: $A1]: $A2
     */
    InterfaceDynamicField: (key, value) => `[key: ${key}]: ${value}`,
    /**
     * $A1 = $A2
     */
    EnumField: (key, value) => `${key} = ${value}`,
    /**
     * $A0.key = $A0.value,
     * $A1.key = $A1.value,
     * $AN.key = $AN.value,
     */
    EnumFieldsWrapper: (contents) =>
      _.map(contents, ({ key, value }) => `  ${key} = ${value}`).join(",\n"),
    /**
     * {\n $A \n}
     */
    ObjectWrapper: (content) => `{\n${content}\n}`,
    /**
     * /** $A *\/
     */
    MultilineComment: (contents, formatFn) =>
      [
        ...(contents.length === 1
          ? [`/** ${contents[0]} */`]
          : ["/**", ...contents.map((content) => ` * ${content}`), " */"]),
      ].map((part) => `${formatFn ? formatFn(part) : part}\n`),
    /**
     * $A1<...$A2.join(,)>
     */
    TypeWithGeneric: (typeName, genericArgs) => {
      return `${typeName}${
        genericArgs.length ? `<${genericArgs.join(",")}>` : ""
      }`;
    },
  }),
});
```

例子，物件類型統一為 Record

```typescript
generateApi({
  // ...
  codeGenConstructs: (struct) => ({
    Keyword: {
      Object: "Record<string, any>",
    },
  }),
});
```

## 移除不需要的 route

見 [api calls names #380](https://github.com/acacode/swagger-typescript-api/issues/380#issuecomment-1310233036)

```typescript
import { generateApi } from "swagger-typescript-api";

await generateApi({
  hooks: {
    onPrepareConfig: (config) => {
      if (!config.routes.combined) return;

      config.routes.combined = config.routes.combined.filter(
        (r) => r.moduleName !== "auth"
      );
    },
  },
});
```

## 其他

```typescript
import { generateApi } from "swagger-typescript-api";

await generateApi({
  // 輸出檔案名稱，如果輸出結果是多個檔案 ( 例如啟用 modular ) 就不會用到；不設定就會變成 .ts
  name: "MySuperbApi.ts",

  // 預設 api 回傳資料是不是只有成功沒有失敗，會影響請求失敗 Error 的型別
  defaultResponseAsSuccess: true,

  // 產生 HttpClient，也就是呼叫 api 方法的 class，設定 false 就只會產生相關 interface
  generateClient: true,

  // 不太確定在做什麼，設定 true 會根據每個 route 產生 namespace
  generateRouteTypes: false,

  // 產生 js 檔案，而不是 ts，但是會提供 .d.ts 檔案
  toJS: false,

  /*
  各 route method 請求參數輸出成型別，下面是大概的示意內容

  type RequestRecord = ({ Id: string }) => Promise<RecordSet>

  變成

  type RequestRecordParams = { Id: string }
  type RequestRecord = (params: RequestRecordParams) => Promise<RecordSet>
  */
  extractRequestParams: false,

  // 同上，但對象是 body
  extractRequestBody: false,

  // prettier 設定，預設會讀取專案的 prettier 設定
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },

  // 如果沒有 response ，該 response 型別定義，默认为void
  defaultResponseType: "void",

  // 見 https://juejin.cn/post/7205198600015003685#heading-18
  enumNamesAsValues: false,

  // 見 https://juejin.cn/post/7205198600015003685#heading-6
  generateUnionEnums: false,

  // 產生的型別名稱附加的前後輟
  typePrefix: '',
  typeSuffix: '',

  // 產生的 enum 名稱附加的前後輟
  enumKeyPrefix: '',
  enumKeySuffix: '',

  // generate readonly properties (default: false)
  addReadonly: false,

  /**
   extraTemplates (NodeJS option)
   @see https://github.com/acacode/swagger-typescript-api?tab=readme-ov-file#extratemplates-nodejs-option
    type (Record<string, any> & { name: string, path: string })[]
    This thing allow you to generate extra ts\js files based on extra templates (one extra template for one ts\js file)
    [Example here]{@link https://github.com/acacode/swagger-typescript-api/tree/next/tests/spec/extra-templates}
   */
  extraTemplates: []

  // 是否啟用 primitiveTypeConstructs 的 array 功能
  anotherArrayType: false,

  // prefix string value needed to fix invalid type names (default: 'Type')
  // 使用前輟修正 type 無效的名稱
  fixInvalidTypeNamePrefix: "Type",

  /*
    prefix string value needed to fix invalid enum keys (default: 'Value')
    使用前輟修正 enum 無效的 key 名稱

    export enum SystemReflectionTypeAttributes {
      // 不符合 ts 規則
      0 = 0
      // 加上前輟修正
      Value0 = 0
    }
  */
  fixInvalidEnumKeyPrefix: "Value"
});
```

## 參考

- [前端工程化之——自动生成基于 Typescript 的 API 模块（文末有 npm 包可用）](https://juejin.cn/post/7239542388602912823)
- [swagger-typescript-api 中文详解](https://juejin.cn/post/7205198600015003685)
- [swagger-typescript-api (Github)](https://github.com/acacode/swagger-typescript-api)
