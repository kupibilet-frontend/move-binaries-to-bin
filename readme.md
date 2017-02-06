# move-binaries-to-bin

[![NPM version][npm-img]][npm-url]
[![Build Status][travis-img]][travis-url]
[![Greenkeeper Status][greenkeeper-img]][greenkeeper-url]

## Problem

If you use [eslint](http://eslint.org/)/[styleint](https://github.com/stylelint/stylelint) or another executable package as dependency of dependency (see [eslint-config-kupibilet](https://github.com/kupibilet-frontend/eslint-config-kupibilet)), [yarn](yarnpkg.com) and [pnpm](https://github.com/pnpm/pnpm) will not install binaries into `./node_modules/.bin`. This script will help you to move binaries after installation.

### Supported packages

* [eslint](http://eslint.org/)@^3.15.0
* [stylelint](https://stylelint.io/)@^7.8.0

Feel free to submit issues for any of packages.

## Install

```sh
yarn add move-binaries-to-bin --dev
```
or
```sh
npm i move-binaries-to-bin --save-dev
```
## Usage


Add **postinstall** hook into your npm script that contains **move-bin**:

```json
{
  "name": "your-project",
  "scripts": {
    "postinstall": "move-bin"
  }
}
```

Also you can always run `./node_modules/move-bin`

## License

MIT © [kupibilet.ru](https://kupibilet.ru)


[travis-img]: https://travis-ci.org/kupibilet-frontend/move-binaries-to-bin.svg
[travis-url]: https://travis-ci.org/kupibilet-frontend/move-binaries-to-bin
[npm-img]: https://badge.fury.io/js/move-binaries-to-bin.svg
[npm-url]: https://www.npmjs.com/package/move-binaries-to-bin
[greenkeeper-img]: https://badges.greenkeeper.io/kupibilet-frontend/move-binaries-to-bin.svg
[greenkeeper-url]: https://greenkeeper.io/
