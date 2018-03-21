import React, {Component, PropTypes as t} from 'react'
import {render} from 'react-dom'
import SelectComponent from '../../src'

export default class Demo extends Component {
  constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
    }

  onSelect(val) {

  }

  render() {
    return <div>
      <h3><strong>React-country-select</strong></h3>
      <br />
      <div>
        <h4><i>Single select</i></h4>
        <SelectComponent multi={false} flagImagePath="./assets/" onSelect={this.onSelect}/>
        <br />
        <h4><i>Multiple select</i></h4>
        <SelectComponent multi={true} flagImagePath="./assets/" onSelect={this.onSelect}/>
        <br />
        <h4><i>Without flags</i></h4>
        <SelectComponent onSelect={this.onSelect}/>
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
