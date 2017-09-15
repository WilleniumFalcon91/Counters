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
          <img src="https://vignette2.wikia.nocookie.net/muppet/images/2/24/The_Count_cape_cover.jpg/revision/latest?cb=20160108224919"className="App-logo" alt="logo" />
          <h2>Counter App</h2>
        </div>
        <Value />
        <Chatroom  handleClick={this._comment}/>
      </div>
    );
  }
}

export default App;
