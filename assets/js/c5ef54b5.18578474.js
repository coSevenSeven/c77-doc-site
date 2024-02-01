"use strict";(self.webpackChunkc_77_doc_site=self.webpackChunkc_77_doc_site||[]).push([[5775],{5335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(5893),a=t(1151);const r={title:"\u9032\u968e\u7528\u6cd5",sidebar_label:"\u9032\u968e\u7528\u6cd5",sidebar_position:2},i=void 0,o={id:"Swagger Typescript Api/advance",title:"\u9032\u968e\u7528\u6cd5",description:"\u9019\u908a\u4ee5 Nodejs \u7522\u751f Typescript \u70ba\u4e3b\uff0c\u4ecb\u7d39\u958b\u767c\u4e2d\u7528\u5230\u7684\u529f\u80fd",source:"@site/docs/Swagger Typescript Api/advance.md",sourceDirName:"Swagger Typescript Api",slug:"/Swagger Typescript Api/advance",permalink:"/c77-doc-site/docs/Swagger Typescript Api/advance",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Swagger Typescript Api/advance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u9032\u968e\u7528\u6cd5",sidebar_label:"\u9032\u968e\u7528\u6cd5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/c77-doc-site/docs/Swagger Typescript Api/intro"},next:{title:"\u5176\u4ed6\u88dc\u5145",permalink:"/c77-doc-site/docs/Swagger Typescript Api/extra"}},p={},l=[{value:"\u8a2d\u5b9a swagger json \u4f86\u6e90",id:"\u8a2d\u5b9a-swagger-json-\u4f86\u6e90",level:2},{value:"httpClientType",id:"httpclienttype",level:2},{value:"\u62c6\u89e3 ts \u6a94\u6848\u5167\u5bb9",id:"\u62c6\u89e3-ts-\u6a94\u6848\u5167\u5bb9",level:2},{value:"modular",id:"modular",level:3},{value:"moduleNameIndex",id:"modulenameindex",level:3},{value:"moduleNameFirstTag",id:"modulenamefirsttag",level:3},{value:"singleHttpClient",id:"singlehttpclient",level:2},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:2},{value:"sortTypes",id:"sorttypes",level:3},{value:"sortRoutes",id:"sortroutes",level:3},{value:"\u7591\u96e3\u96dc\u75c7",id:"\u7591\u96e3\u96dc\u75c7",level:2},{value:"\u5b9a\u7fa9 Type \u3001Route \u540d\u7a31",id:"\u5b9a\u7fa9-type-route-\u540d\u7a31",level:3},{value:"\u672a\u89e3\u554f\u984c",id:"\u672a\u89e3\u554f\u984c",level:2},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u9019\u908a\u4ee5 Nodejs \u7522\u751f Typescript \u70ba\u4e3b\uff0c\u4ecb\u7d39\u958b\u767c\u4e2d\u7528\u5230\u7684\u529f\u80fd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import path from "path";\nimport { generateApi } from "swagger-typescript-api";\n\nconst generateApiTsFile = async () => {\n  const result = await generateApi({\n    url: "http://localhost:8151/swagger/v1/swagger.json",\n    output: path.resolve(process.cwd(), "./src/api"),\n  });\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u8a2d\u5b9a-swagger-json-\u4f86\u6e90",children:"\u8a2d\u5b9a swagger json \u4f86\u6e90"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53c3\u6578\u6709 url\u3001input\u3001spec\uff0c\u4e09\u8005\u5176\u4e2d\u4e4b\u4e00\u5fc5\u586b"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import path from "path";\nimport { generateApi } from "swagger-typescript-api";\n\nconst swaggerJsonPath = path.resolve(process.cwd(), "./swagger.json");\n\nawait generateApi({\n  // api \u8cc7\u6599\u4f86\u6e90\u7db2\u5740 url\n  url: "http://localhost:8151/swagger/v1/swagger.json",\n\n  // api \u8cc7\u6599\u4f86\u6e90\u6a94\u6848 input\u3001\u6216\u76f4\u63a5\u624b\u5beb js \u7269\u4ef6 spec\n  input: swaggerJsonPath,\n\n  // api \u8cc7\u6599\u4f86\u6e90 js \u7269\u4ef6 spec\n  spec: {\n    swagger: "2.0",\n    info: {\n      version: "1.0.0",\n      title: "Swagger Petstore",\n    },\n    // ...\n  },\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"httpclienttype",children:"httpClientType"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["httpClient \u662f\u6307 api \u7528\u4ec0\u9ebc module \u8acb\u6c42\uff0c\u6709 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," \u4ee5\u53ca ",(0,s.jsx)(n.a,{href:"https://github.com/axios/axios",children:"Axios"})]}),"\n",(0,s.jsx)(n.li,{children:'\u53c3\u6578\u70ba\u5b57\u4e32 "axios" \u3001 "fetch"'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8a2d\u5b9a axios \u6642\u7684\u57fa\u672c\u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { HttpClient } from "./__generated__/http-client";\n\n// swagger-typescript-api \u7522\u751f\u7684 class\nexport class Auth<\n  SecurityDataType = unknown\n> extends HttpClient<SecurityDataType> {\n  // ...\n}\n\nconst authApi = new Auth({\n  baseURL: "http://localhost:8080/",\n});\n\n// \u8a2d\u5b9a axios interceptor\nauthApi.instance.interceptors.request.use((config) => {\n  // ...\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u62c6\u89e3-ts-\u6a94\u6848\u5167\u5bb9",children:"\u62c6\u89e3 ts \u6a94\u6848\u5167\u5bb9"}),"\n",(0,s.jsx)(n.h3,{id:"modular",children:"modular"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"generate separated files for http client, data contracts, and routes (default: false)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u628a ts \u6a94\u6848\u5206\u6210"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"http client ( \u8acb\u6c42\u5be6\u4f8b )"}),"\n",(0,s.jsx)(n.li,{children:"data contracts ( \u6240\u6709\u76f8\u95dc interface\u3001enum \u90fd\u6703\u96c6\u4e2d\u5728\u9019\u88e1 )"}),"\n",(0,s.jsx)(n.li,{children:"routes ( \u5404 api methods )"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"modulenameindex",children:"moduleNameIndex"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"determines which path index should be used for routes separation"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6839\u64da\u7d66\u7684 index \u5207\u5206 route\uff0c\u985e\u4f3c\u7528 ",(0,s.jsx)(n.code,{children:"Route.split('/')[moduleNameIndex]"})," \u6c7a\u5b9a\u5207\u5272\u7a0b\u5ea6"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9700\u8981\u8a2d\u5b9a ",(0,s.jsx)(n.code,{children:"modular: true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982 api \u6709 auth\u3001member"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"api/auth/get\napi/auth/delete\napi/auth/put\napi/auth/post\napi/member/get\napi/member/delete\napi/member/put\napi/member/post\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// moduleNameIndex = 0 \u7522\u751f\u7684\u7d50\u69cb\nconst api = {\n  auth: {\n    get: (id) => {},\n    delete: (id) => {},\n    put: (auth) => {},\n    post: (auth) => {},\n  },\n  member: {\n    get: (id) => {},\n    delete: (id) => {},\n    put: (member) => {},\n    post: (member) => {},\n  },\n};\n\n// moduleNameIndex = 1 \u7522\u751f\u7684\u7d50\u69cb\nconst auth = {\n  get: (id) => {},\n  delete: (id) => {},\n  put: (auth) => {},\n  post: (auth) => {},\n};\n\nconst member = {\n  get: (id) => {},\n  delete: (id) => {},\n  put: (member) => {},\n  post: (member) => {},\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"modulenamefirsttag",children:"moduleNameFirstTag"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"users operation's first tag for route separation"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u64da tags \u4e2d\u7684\u7b2c\u4e00\u500b\u6a19\u7c64\u540d\u9032\u884c\u8def\u7531\u5206\u96e2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="swagger.json"',children:'{\n  "openapi": "1.0.0",\n  "info": {\n    "title": "Backend Service API"\n  },\n  "paths": {\n    "/api/auth/get/{Id}": {\n      "get": {\n        "tags": ["Auth"], // route tag\n        "parameters": [\n          // ...\n        ],\n        "responses": {\n          // ...\n        }\n      }\n    },\n    "/api/Maintenance/Put": {\n      "put": {\n        "tags": ["Maintenance"], // route tag\n        "responses": {\n          // ...\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u64da\u4e0a\u9762\u7684 ",(0,s.jsx)(n.code,{children:"tags"})," \u7522\u751f\u4e0b\u5217 api"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const Auth = {\n  get: (id) => {},\n};\n\nconst Maintenance = {\n  put: (maintenance) => {},\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"singlehttpclient",children:"singleHttpClient"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Ability to send HttpClient instance to Api constructor (default: false)"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53c3\u6578 boolean"}),"\n",(0,s.jsx)(n.li,{children:"\u8a2d\u5b9a true \u6642\uff0c\u6bcf\u500b\u7522\u751f\u7684 api class \u5171\u7528\u540c\u4e00 http client"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982 api \u6709 auth\u3001member"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"api/auth/id\napi/auth/delete\napi/auth/put\napi/auth/post\napi/member/id\napi/member/delete\napi/member/put\napi/member/post\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"singleHttpClient: false"}),"\u3001",(0,s.jsx)(n.code,{children:"moduleNameIndex: 1"})," \u5207\u5206\u7522\u751f auth\u3001member api\uff0c\u9019\u4e9b api \u90fd\u8981\u500b\u5225\u8a2d\u5b9a HttpClient"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { HttpClient } from "./__generated__/http-client";\nimport { Auth } from "./__generated__/Auth";\nimport { Member } from "./__generated__/Member";\n\n/* Auth */\n// swagger-typescript-api \u7522\u751f\u7684 class\nexport class Auth<\n  SecurityDataType = unknown\n> extends HttpClient<SecurityDataType> {\n  // ...\n}\n\n// \u5efa\u7acb\u5be6\u4f8b\nconst authApi = new Auth({\n  baseURL: "http://localhost:8080",\n});\n\n// \u8a2d\u5b9a axios\nauthApi.instance.interceptors.request.use((config) => {\n  // ...\n});\n\n// api \u4f7f\u7528\nconst res = await authApi.post({\n  Account: "user",\n  Password: "123",\n});\n\n/* Member */\n// swagger-typescript-api \u7522\u751f\u7684 class\nexport class Member<\n  SecurityDataType = unknown\n> extends HttpClient<SecurityDataType> {\n  // ...\n}\n\n// \u5efa\u7acb\u5be6\u4f8b\nconst memberApi = new Member({\n  baseURL: "http://localhost:8080",\n});\n\n// \u8a2d\u5b9a axios\nmemberApi.instance.interceptors.request.use((config) => {\n  // ...\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u555f\u7528 ",(0,s.jsx)(n.code,{children:"singleHttpClient"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { HttpClient } from "./__generated__/http-client";\nimport { Auth } from "./__generated__/Auth";\nimport { Member } from "./__generated__/Member";\n\n// swagger-typescript-api \u7522\u751f\u7684 class\n// Auth.ts\nexport class Auth<SecurityDataType = unknown> {\n  http: HttpClient<SecurityDataType>;\n\n  constructor(http: HttpClient<SecurityDataType>) {\n    this.http = http;\n  }\n\n  // ...\n}\n\n// swagger-typescript-api \u7522\u751f\u7684 class\n// Member.ts\nexport class Member<SecurityDataType = unknown> {\n  http: HttpClient<SecurityDataType>;\n\n  constructor(http: HttpClient<SecurityDataType>) {\n    this.http = http;\n  }\n\n  // ...\n}\n\n// \u5be6\u4f5c api\nclass MyApi extends HttpClient {\n  public auth = new Auth(this);\n  public member = new Member(this);\n}\n\nconst api = new MyApi();\n\napi.instance.interceptors.request.use((config) => {\n  // ...\n});\n\n// api \u4f7f\u7528\nconst res = await api.auth.post({\n  Account: "user",\n  Password: "123",\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6392\u5e8f",children:"\u6392\u5e8f"}),"\n",(0,s.jsx)(n.h3,{id:"sorttypes",children:"sortTypes"}),"\n",(0,s.jsx)(n.p,{children:"\u5404 interface \u5167\u7684 key \u4f9d\u7167\u5b57\u6bcd\u6392\u5e8f\uff0c\u5404 interface \u4f3c\u4e4e\u5df2\u7d93\u4f9d\u7167\u5b57\u6bcd\u6392\u5e8f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// sortTypes: false\ninterface Example {\n  b: boolean;\n  a: number;\n  c: Date;\n}\n\n// sortTypes: true\ninterface Example {\n  a: number;\n  b: boolean;\n  c: Date;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sortroutes",children:"sortRoutes"}),"\n",(0,s.jsx)(n.p,{children:"\u6392\u5e8f\u5404 route\uff0c\u4ee5\u4e0b\u9762 route \u70ba\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"api/Auth/FunctionA\napi/Auth/FunctionC\napi/Auth/FunctionB\napi/Auth/FunctionD\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f38\u51fa"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class Auth {\n  FunctionA: () => {},\n  FunctionB: () => {},\n  FunctionC: () => {},\n  FunctionD: () => {},\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7591\u96e3\u96dc\u75c7",children:"\u7591\u96e3\u96dc\u75c7"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5be6\u969b\u4e0a\u7522\u51fa\u7684\u578b\u5225\u3001api \u65b9\u6cd5\u90fd\u662f\u81ea\u52d5\u7522\u751f\u7684\uff0c\u6240\u4ee5\u6709\u6642\u5019\u6703\u770b\u5230\u4e0d\u662f\u5f88\u7406\u60f3\u7684\u540d\u7a31"}),"\n",(0,s.jsx)(n.li,{children:"swagger-typescript-api \u6709\u63d0\u4f9b hook \u505a\u5ba2\u88fd\u529f\u80fd"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { generateApi } from "swagger-typescript-api";\n\nawait generateApi({\n  hooks: {\n    onBuildRoutePath: () => {},\n    onCreateComponent: () => {},\n    onCreateRequestParams: () => {},\n    onCreateRoute: () => {},\n    onCreateRouteName: () => {},\n    onFormatRouteName: () => {},\n    onFormatTypeName: () => {},\n    onInit: () => {},\n    onInsertPathParam: () => {},\n    onParseSchema: () => {},\n    onPreBuildRoutePath: () => {},\n    onPreParseSchema: () => {},\n    onPrepareConfig: () => {},\n  },\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9a\u7fa9-type-route-\u540d\u7a31",children:"\u5b9a\u7fa9 Type \u3001Route \u540d\u7a31"}),"\n",(0,s.jsx)(n.p,{children:"swagger \u7d50\u69cb\u5982\u4e0b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"type example",src:t(862).Z+"",width:"1436",height:"716"})}),"\n",(0,s.jsx)(n.p,{children:"\u7522\u51fa\u7684\u65b9\u6cd5\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class Auth {\n  /**\n   * No description\n   *\n   * @tags Auth\n   * @name AuthInfoList\n   * @summary \u56de\u50b3\u76ee\u524d\u767b\u9304\u8005\u8cc7\u8a0a\n   * @request GET:/api/Auth/Info\n   * @secure\n   */\n  authInfoList = (params: RequestParams = {}) =>\n    this.http.request<\n      CoreModelsResponseResponseBaseModel1CoreEntitiesMemberSetCoreVersion1000CultureNeutralPublicKeyTokenNull,\n      any\n    >({\n      path: `/api/Auth/Info`,\n      method: "GET",\n      secure: true,\n      format: "json",\n      ...params,\n    });\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { generateApi } from "swagger-typescript-api";\n\nconst typeNameMap = {\n  CoreModelsResponseResponseBaseModel1CoreEntitiesMemberSetCoreVersion1000CultureNeutralPublicKeyTokenNull:\n    "MemberSet",\n};\n\nconst routeNameRenameMap = {\n  authInfoList: "InfoList",\n};\n\nawait generateApi({\n  hooks: {\n    /* \u6307\u5b9a type \u540d\u7a31 */\n    onFormatTypeName: (\n      typeName: string,\n      rawTypeName?: string,\n      schemaType?: "type-name" | "enum-key"\n    ) => {\n      const name = typeName as keyof typeof typeNameMap;\n\n      if (typeNameMap[name]) {\n        // CoreModelsResponseResponseBaseModel1CoreEntitiesMemberSetCoreVersion1000CultureNeutralPublicKeyTokenNull\n        console.log(typeName);\n\n        // Core.Models.Response.ResponseBaseModel`1[[Core.Entities.MemberSet, Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]\n        console.log(rawTypeName);\n\n        // type-name\n        console.log(schemaType);\n      }\n\n      return typeNameMap[name] || typeName;\n    },\n\n    /* \u6307\u5b9a route \u540d\u7a31 */\n    onFormatRouteName: (routeInfo: RawRouteInfo, templateRouteName: string) => {\n      const name = templateRouteName as keyof typeof routeNameRenameMap;\n\n      return routeNameRenameMap[name] || templateRouteName;\n    },\n  },\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5be6\u969b\u8f38\u51fa"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class Auth {\n  /**\n   * No description\n   *\n   * @tags Auth\n   * @name InfoList\n   * @summary \u56de\u50b3\u76ee\u524d\u767b\u9304\u8005\u8cc7\u8a0a\n   * @request GET:/api/Auth/Info\n   * @secure\n   */\n  InfoList = (params: RequestParams = {}) =>\n    this.http.request<MemberSet, any>({\n      path: `/api/Auth/Info`,\n      method: "GET",\n      secure: true,\n      format: "json",\n      ...params,\n    });\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u672a\u89e3\u554f\u984c",children:"\u672a\u89e3\u554f\u984c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u4f55\u6839\u64da interface \u5efa\u7acb class"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003",children:"\u53c3\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/m0_63986895/article/details/134288737",children:"\u4f7f\u7528 swagger-typescript-api"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7205198600015003685",children:"swagger-typescript-api \u4e2d\u6587\u8be6\u89e3"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},862:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/rename-return-type-example-5840eb655b253a76c62c8078de0f951f.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);