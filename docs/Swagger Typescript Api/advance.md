---
title: "進階用法"
sidebar_label: "進階用法"
sidebar_position: 2
---

這邊以 Nodejs 產生 Typescript 為主，介紹開發中用到的功能

```typescript
import path from "path";
import { generateApi } from "swagger-typescript-api";

const generateApiTsFile = async () => {
  const result = await generateApi({
    url: "http://localhost:8151/swagger/v1/swagger.json",
    output: path.resolve(process.cwd(), "./src/api"),
  });
};
```

## 設定 swagger json 來源

- 參數有 url、input、spec，三者其中之一必填

```typescript
import path from "path";
import { generateApi } from "swagger-typescript-api";

const swaggerJsonPath = path.resolve(process.cwd(), "./swagger.json");

await generateApi({
  // api 資料來源網址 url
  url: "http://localhost:8151/swagger/v1/swagger.json",

  // api 資料來源檔案 input、或直接手寫 js 物件 spec
  input: swaggerJsonPath,

  // api 資料來源 js 物件 spec
  spec: {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Swagger Petstore",
    },
    // ...
  },
});
```

## httpClientType

- httpClient 是指 api 用什麼 module 請求，有 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 以及 [Axios](https://github.com/axios/axios)
- 參數為字串 "axios" 、 "fetch"

設定 axios 時的基本設定

```typescript
import { HttpClient } from "./__generated__/http-client";

// swagger-typescript-api 產生的 class
export class Auth<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  // ...
}

const authApi = new Auth({
  baseURL: "http://localhost:8080/",
});

// 設定 axios interceptor
authApi.instance.interceptors.request.use((config) => {
  // ...
});
```

## 拆解 ts 檔案內容

### moduleNameIndex

> determines which path index should be used for routes separation

- 根據給的 index 切分 route，類似用 `Route.split('/')[moduleNameIndex]` 決定切割程度

例如 api 有 auth、member

```text
api/auth/get
api/auth/delete
api/auth/put
api/auth/post
api/member/get
api/member/delete
api/member/put
api/member/post
```

```js
// moduleNameIndex = 0、或未設定 產生的結構
class Api {
  api = {
    authGet: (id) => {},
    authDelete: (id) => {},
    authPut: (auth) => {},
    authPost: (auth) => {},
    memberGet: (id) => {},
    memberDelete: (id) => {},
    memberPut: (auth) => {},
    memberPost: (auth) => {},
  },
}

// moduleNameIndex = 1 產生的結構
class Api {
  auth: {
    authGet: (id) => {},
    authDelete: (id) => {},
    authPut: (auth) => {},
    authPost: (auth) => {},
  },
  member: {
    memberGet: (id) => {},
    memberDelete: (id) => {},
    memberPut: (auth) => {},
    memberPost: (auth) => {},
  },
}
```

### modular

> generate separated files for http client, data contracts, and routes (default: false)

把 ts 檔案分成下列三種 ts 檔案，其中 routes 切割程度依照 `moduleNameIndex` 設定切割

- http client ( 請求實例 )
- data contracts ( 所有相關 interface、enum 都會集中在這裡 )
- routes ( 各 api methods )

```typescript
// molar false
generateApi({
  name: "MySuperbApi.ts",
});

import { Api } from "./__generated__/MySuperbApi";

const inst = new Api();
const res = await inst.api.authClientLoginCreate({});

// molar true
generateApi({
  name: "MySuperbApi.ts",
  molar: true,
});

import { Api } from "./__generated__/Api";

const inst = new Api();
const res = await inst.authClientLoginCreate({});
```

### moduleNameFirstTag

> users operation's first tag for route separation

根據 tags 中的第一個標籤名進行路由分離

```json title="swagger.json"
{
  "openapi": "1.0.0",
  "info": {
    "title": "Backend Service API"
  },
  "paths": {
    "/api/auth/get/{Id}": {
      "get": {
        "tags": ["Auth"], // route tag
        "parameters": [
          // ...
        ],
        "responses": {
          // ...
        }
      }
    },
    "/api/Maintenance/Put": {
      "put": {
        "tags": ["Maintenance"], // route tag
        "responses": {
          // ...
        }
      }
    }
  }
}
```

根據上面的 `tags` 產生下列 api

```js
const Auth = {
  get: (id) => {},
};

const Maintenance = {
  put: (maintenance) => {},
};
```

## singleHttpClient

> Ability to send HttpClient instance to Api constructor (default: false)

- 參數 boolean
- 設定 true 時，每個產生的 api class 共用同一 http client

例如 api 有 auth、member

```text
api/auth/id
api/auth/delete
api/auth/put
api/auth/post
api/member/id
api/member/delete
api/member/put
api/member/post
```

使用 `singleHttpClient: false`、`moduleNameIndex: 1` 切分產生 auth、member api，這些 api 都要個別設定 HttpClient

```typescript
import { HttpClient } from "./__generated__/http-client";
import { Auth } from "./__generated__/Auth";
import { Member } from "./__generated__/Member";

/* Auth */
// swagger-typescript-api 產生的 class
export class Auth<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  // ...
}

// 建立實例
const authApi = new Auth({
  baseURL: "http://localhost:8080",
});

// 設定 axios
authApi.instance.interceptors.request.use((config) => {
  // ...
});

// api 使用
const res = await authApi.post({
  Account: "user",
  Password: "123",
});

/* Member */
// swagger-typescript-api 產生的 class
export class Member<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  // ...
}

// 建立實例
const memberApi = new Member({
  baseURL: "http://localhost:8080",
});

// 設定 axios
memberApi.instance.interceptors.request.use((config) => {
  // ...
});
```

啟用 `singleHttpClient`

```typescript
import { HttpClient } from "./__generated__/http-client";
import { Auth } from "./__generated__/Auth";
import { Member } from "./__generated__/Member";

// swagger-typescript-api 產生的 class
// Auth.ts
export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  // ...
}

// swagger-typescript-api 產生的 class
// Member.ts
export class Member<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  // ...
}

// 實作 api
class MyApi extends HttpClient {
  public auth = new Auth(this);
  public member = new Member(this);
}

const api = new MyApi();

api.instance.interceptors.request.use((config) => {
  // ...
});

// api 使用
const res = await api.auth.post({
  Account: "user",
  Password: "123",
});
```

## 排序

### sortTypes

各 interface 內的 key 依照字母排序，各 interface 似乎已經依照字母排序

```typescript
// sortTypes: false
interface Example {
  b: boolean;
  a: number;
  c: Date;
}

// sortTypes: true
interface Example {
  a: number;
  b: boolean;
  c: Date;
}
```

### sortRoutes

排序各 route，以下面 route 為例

```txt
api/Auth/FunctionA
api/Auth/FunctionC
api/Auth/FunctionB
api/Auth/FunctionD
```

輸出

```js
class Auth {
  FunctionA: () => {},
  FunctionB: () => {},
  FunctionC: () => {},
  FunctionD: () => {},
}
```

## 疑難雜症

- 實際上產出的型別、api 方法都是自動產生的，所以有時候會看到不是很理想的名稱
- swagger-typescript-api 有提供 hook 做客製功能

```typescript
import { generateApi } from "swagger-typescript-api";

await generateApi({
  hooks: {
    onBuildRoutePath: () => {},
    onCreateComponent: () => {},
    onCreateRequestParams: () => {},
    onCreateRoute: () => {},
    onCreateRouteName: () => {},
    onFormatRouteName: () => {},
    onFormatTypeName: () => {},
    onInit: () => {},
    onInsertPathParam: () => {},
    onParseSchema: () => {},
    onPreBuildRoutePath: () => {},
    onPreParseSchema: () => {},
    onPrepareConfig: () => {},
  },
});
```

### 定義 Type 、Route 名稱

swagger 結構如下

![type example](/img/swagger-typescript-api/rename-return-type-example.jpg)

產出的方法如下

```typescript
class Auth {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthInfoList
   * @summary 回傳目前登錄者資訊
   * @request GET:/api/Auth/Info
   * @secure
   */
  authInfoList = (params: RequestParams = {}) =>
    this.http.request<
      CoreModelsResponseResponseBaseModel1CoreEntitiesMemberSetCoreVersion1000CultureNeutralPublicKeyTokenNull,
      any
    >({
      path: `/api/Auth/Info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
```

```typescript
import { generateApi } from "swagger-typescript-api";

const typeNameMap = {
  CoreModelsResponseResponseBaseModel1CoreEntitiesMemberSetCoreVersion1000CultureNeutralPublicKeyTokenNull:
    "MemberSet",
};

const routeNameRenameMap = {
  authInfoList: "InfoList",
};

await generateApi({
  hooks: {
    /* 指定 type 名稱 */
    onFormatTypeName: (
      typeName: string,
      rawTypeName?: string,
      schemaType?: "type-name" | "enum-key"
    ) => {
      const name = typeName as keyof typeof typeNameMap;

      if (typeNameMap[name]) {
        // CoreModelsResponseResponseBaseModel1CoreEntitiesMemberSetCoreVersion1000CultureNeutralPublicKeyTokenNull
        console.log(typeName);

        // Core.Models.Response.ResponseBaseModel`1[[Core.Entities.MemberSet, Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]
        console.log(rawTypeName);

        // type-name
        console.log(schemaType);
      }

      return typeNameMap[name] || typeName;
    },

    /* 指定 route 名稱 */
    onFormatRouteName: (routeInfo: RawRouteInfo, templateRouteName: string) => {
      const name = templateRouteName as keyof typeof routeNameRenameMap;

      return routeNameRenameMap[name] || templateRouteName;
    },
  },
});
```

實際輸出

```typescript
class Auth {
  /**
   * No description
   *
   * @tags Auth
   * @name InfoList
   * @summary 回傳目前登錄者資訊
   * @request GET:/api/Auth/Info
   * @secure
   */
  InfoList = (params: RequestParams = {}) =>
    this.http.request<MemberSet, any>({
      path: `/api/Auth/Info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
```

## 未解問題

- 如何根據 interface 建立 class

## 參考

- [使用 swagger-typescript-api](https://blog.csdn.net/m0_63986895/article/details/134288737)
- [swagger-typescript-api 中文详解](https://juejin.cn/post/7205198600015003685)
