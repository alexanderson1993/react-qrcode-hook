# `React QRCode Hook` 📸

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> React hook for creating QR Code data urls

[![Edit useReact hook](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xjojxm82jw)

## Install

```sh
yarn add react-qrcode-hook
```

or

```sh
npm install --save react-qrcode-hook
```

## Usage

This hook returns a data URL which can be added as the source to an image. The
only parameter to the hook function is the string you want to codify.

```js
import useQrCode from "react-qrcode-hook";

function App() {
  useQrCode("Hello There");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img alt="qr code" src={qrCode} />
    </div>
  );
}
```

## Example

In the project folder:

```sh
yarn
yarn example
```

or

```sh
npm install
npm run example
```

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/6558157?v=4" width="100px;"/><br /><sub><b>Alex</b></sub>](https://ralexanderson.com)<br />[💻](https://github.com/alexanderson1993/react-qrcode-hook/commits?author=alexanderson1993 "Code") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!
