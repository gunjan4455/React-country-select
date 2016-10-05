# react-country-select

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Live Demo at : https://gunjan4455.github.io

Component which is often use in react-forms. 

Gives listing of all the countries with their flag icon.

Dependency : react-select

npm install react-select --save

Use it as : 
 
npm install react-country-select --save

import CountrySelect from "react-country-select"

To use single select : Just use the component

2 parameters:

multi={true} //not mandatory it is false by default

flagImagePath="<path to your folder containing all flag icons>"

<CountrySelect multi={true} flagImagePath="./assets/">

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
