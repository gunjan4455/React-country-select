import React from 'react'
import {render} from 'react-dom'
import Component from '../../src'
let url = 'http://localhost:5000/images/flags/';
let Demo = React.createClass({
  render() {
    return <div>
      <h3><strong>React-country-select<strong></h3>
      <Component/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
