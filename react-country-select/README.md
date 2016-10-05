# react-country-select

[![Travis][build-badge]][build]
[![npm package][npm-badge]](https://www.npmjs.com/package/react-country-select)
[![Coveralls][coveralls-badge]][coveralls]

# Project Title

React-country-select

## Demo

Live Demo at : https://gunjan4455.github.io

## Getting Started

Component which is often use in react-forms. Gives dropdown of all the countries with their flag icon.

## Dependency

react-select
```
npm install react-select --save
```

### Installing 
``` 
npm install react-country-select --save

import CountrySelect from "react-country-select"
```

#### Parameters :
```
multi={true} //not mandatory it is false by default

flagImagePath="path to your folder containing all flag icons"
```
### Example
```
<CountrySelect multi={true} flagImagePath="./assets/">
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
