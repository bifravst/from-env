# fromEnv [![npm version](https://img.shields.io/npm/v/@bifravst/from-env.svg)](https://www.npmjs.com/package/@bifravst/from-env)

[![GitHub Actions](https://github.com/bifravst/from-env/workflows/Test%20and%20Release/badge.svg)](https://github.com/bifravst/from-env/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![@commitlint/config-conventional](https://img.shields.io/badge/%40commitlint-config--conventional-brightgreen)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

Helper function which ensures that required environment variables are set.

## Example

```typescript
import { fromEnv } from "@bifravst/from-env";

const { env } = fromEnv({
  env: "MY_ENV",
})(process.env);
```

This will throw an exception if `MY_ENV` is not set on `process.env`. Otherwise,
`env` will not contain the value of `process.env.MY_ENV`.

## Installation

    npm i --save-dev --save-exact @bifravst/from-env

## Usage

See [`fromEnv.spec.ts`](./src/fromEnv.spec.ts).
