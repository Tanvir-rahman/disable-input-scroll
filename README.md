# disable-input-scroll

A [Node.js](https://nodejs.org/) module which disable scroll from input type number.

## Installation

```bash
npm install disable-input-scroll --save
```

**Params:**
* classname - name of the class which needs disabling scroll feature [Default - "no-scroll"]

## Usage

```html
  <input type="number" value="0" class="no-scroll" />
```

```javascript
const disableInputScroll = require('disable-input-scroll')

disableInputScroll();
```

### License

Copyright © 2021, [Tanvir Rahman](https://github.com/Tanvir-rahman).
Released under the [MIT License](LICENSE).

***
