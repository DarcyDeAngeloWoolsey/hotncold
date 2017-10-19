import React, { Component } from 'react';
import './App.css';
import Project from './components/Project.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> Hot and Cold </h2>{' '}
        </div>

        <Project />
      </div>
    );
  }
}

export default App;
