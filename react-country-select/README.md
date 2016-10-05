# react-country-select

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm](https://www.npmjs.com/package/react-country-select)
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
####You need to download all the flag icons

You can either download zip from https://github.com/gunjan4455/FlagIcons
or git clone https://github.com/gunjan4455/FlagIcons.git

This will give you all the flag icons used in the dropdown. Save the flags folder in your public folder.

### Installing
```
npm install react-country-select --save

import CountrySelect from "react-country-select"
```

#### Parameters :
```
##### Mandatory parameter

flagImagePath="path to your folder containing all flag icons"

onSelect={function which will return options selected}

##### Not Mandatory

multi={false} //for single selection
multi={true} //for multiple selection

By default it is single selection mode
```
### Example
```
import React, {Component} from "react";
import CountrySelect from "react-country-select";

export default class App extends Component {
    propTypes : {
        onSelect: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            tag: null,
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(val) {
      console.log("values selected are:", val);
      //you can handle options selected here.
    }

    render() {
        return (
            <div>
              <CountrySelect multi={true} flagImagePath="./assets/flags/" onSelect={this.onSelect}/>
            </div>
        );
    }
}

```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
