# Lixxeza-pin
[![Downloads](https://img.shields.io/npm/dm/lixxeza-pin)](https://www.npmjs.com/package/lixxeza-pin)

The first parser for downloading photo or video from Pinterest
## Installation

Install you can using npm

```bash
  npm install lixxeza-pin
```
## Examples
Get a link to download image or video
```javascript
const pinterest = require('lixxeza-pin');

(async() => {
  console.log(await pinterest.getURL('https://www.pinterest.com/pin/705728204135034561/'));
})();
```

Get a buffer of an image or video
```javascript
const pinterest = require('lixxeza-pin');

(async() => {
  console.log(await pinterest.getBuffer('https://www.pinterest.com/pin/705728204135034561/'));
})();
```

Get a buffer (Uint8Array) of an image or video
```javascript
const pinterest = require('lixxeza-pin');

(async() => {
  console.log(await pinterest.getUint8ArrayBuffer('https://www.pinterest.com/pin/705728204135034561/'));
})();
```


## Dependencies

![axios](https://img.shields.io/npm/dependency-version/lixxeza-pin/axios)

![jsdom](https://img.shields.io/npm/dependency-version/lixxeza-pin/jsdom)
## Author

- [Lixxeza](https://www.npmjs.com/~lixxeza)