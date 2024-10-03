[![wakatime](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/9366daa8-742d-461a-b78d-b6eb6bd7f0fd.svg)](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/9366daa8-742d-461a-b78d-b6eb6bd7f0fd) [![E2E](https://github.com/ragaeeb/al-atharnet-sdk/actions/workflows/e2e.yml/badge.svg)](https://github.com/ragaeeb/al-atharnet-sdk/actions/workflows/e2e.yml) [![Node.js CI](https://github.com/ragaeeb/al-atharnet-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/ragaeeb/al-atharnet-sdk/actions/workflows/build.yml) ![GitHub License](https://img.shields.io/github/license/ragaeeb/al-atharnet-sdk) ![GitHub Release](https://img.shields.io/github/v/release/ragaeeb/al-atharnet-sdk) [![codecov](https://codecov.io/gh/ragaeeb/al-atharnet-sdk/graph/badge.svg?token=5T7N9ML6N6)](https://codecov.io/gh/ragaeeb/al-atharnet-sdk) [![Size](https://deno.bundlejs.com/badge?q=al-atharnet-sdk@1.0.0)](https://bundlejs.com/?q=al-atharnet-sdk%401.0.0) ![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label&color=blue) ![npm](https://img.shields.io/npm/v/al-atharnet-sdk) ![npm](https://img.shields.io/npm/dm/al-atharnet-sdk) ![GitHub issues](https://img.shields.io/github/issues/ragaeeb/al-atharnet-sdk) ![GitHub stars](https://img.shields.io/github/stars/ragaeeb/al-atharnet-sdk?style=social)

# al-atharnet-sdk

SDK to access alathar.net content.

## Installation

To install al-atharnet-sdk, use npm or yarn:

```bash
npm install al-atharnet-sdk
# or
yarn add al-atharnet-sdk
# or
pnpm i al-atharnet-sdk
```

## Usage

### Importing the SDK

```javascript
import { getPage } from 'al-atharnet-sdk';
```

### Get Page Information

Retrieve metadata about a specific page.

```javascript
(async () => {
    try {
        const page = await getPage(23233);
        console.log(page);
    } catch (error) {
        console.error(error.message);
    }
})();
```
