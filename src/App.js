import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Value from './value';
import Chatroom from './chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter App</h2>
        </div>
        <Value />
        <Chatroom  handleClick={this._comment}/>
      </div>
    );
  }
}

export default App;
