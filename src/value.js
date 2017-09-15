import React, { Component } from 'react';

import AddButton from './addition';
import MinusButton from './subtraction';

class Value extends Component {

    constructor (props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    render () {
        return (
            <div>
                <h1>
                    {this.state.value}
                </h1>
                <AddButton handleClick={this._addNumber} />
                <MinusButton handleClick={this._minusNumber}/>
            </div>
        )
    }


    _addNumber = () => {
        const newValue = this.state.value + 1;
        this.setState({
            value: newValue
        });
    }
    _minusNumber = () => {
        const newValue = this.state.value - 1;
        this.setState({
            value: newValue
        });
    }
}

export default Value;