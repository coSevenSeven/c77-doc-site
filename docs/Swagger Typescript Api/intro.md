---
sidebar_label: "基本用法"
sidebar_position: 1
---

# swagger typescript api

## 介紹

- 將 swagger 內容轉換為 typescript 檔案，這個內容以版本`13.0.3`為主
- [Github 網址](https://github.com/acacode/swagger-typescript-api)
- [NPM 網址](https://www.npmjs.com/package/swagger-typescript-api)

![intro](/img/swagger-typescript-api/how-it-works.jpg)

## 基本使用

### 安裝

```md
npm i -D swagger-typescript-api
```

### 取得 swagger json 資料

啟動後端 server 取得 swagger 資料，複製標題下 json 連結 `http://localhost:8151/swagger/v1/swagger.json`

![get json file url](/img/swagger-typescript-api/swagger-json-source.jpg)

### cli 產生 typescript 檔案

設定 script 使用 `npx` 執行，相關參數[點我查詢](https://github.com/acacode/swagger-typescript-api?tab=readme-ov-file#-usage)

執行 ts 檔案

```json title="package.json"
{
  "scripts": {
    "api": "npx swagger-typescript-api -p http://localhost:8151/swagger/v1/swagger.json -o ./src/api"
  }
  // ...
}
```

### 使用 nodejs 產生 typescript 檔案

安裝 ts node

```md
npm i -D ts-node
```

設定 ts 指令內容

```typescript title="src/script/generateApi.ts"
import path from "path";
import { generateApi } from "swagger-typescript-api";

const generateApiTsFile = async () => {
  const result = await generateApi({
    url: "http://localhost:8151/swagger/v1/swagger.json",
    output: path.resolve(process.cwd(), "./src/api"),
  });
};
```

執行指令

```json title="package.json"
{
  "scripts": {
    "api": "npx ts-node ./src/script/generateApi.ts"
  }
  // ...
}
```

### 使用產生的 ts 檔案

使用 cli 會產生 Api.ts 檔案，使用 Api class 呼叫 api

![intro](/img/swagger-typescript-api/how-to-use.gif)
