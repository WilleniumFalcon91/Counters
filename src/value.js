import React, { Component } from 'react';

class Value extends Component {

    constructor (props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    render () {
        return (
            <h1>{this.state.value}</h1>
        )
    }
}

export default Value;