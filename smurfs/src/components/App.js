import React, { Component } from 'react';
import './App.css';
import SmurfListView from '../views/SmurfListView'
import SmurfCreator from './SmurfCreator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfCreator />
        <SmurfListView />
      </div>
    );
  }
}

export default App;
