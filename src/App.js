import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './components/Album'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            portada soc....
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            un link a un altre lloc
          </a>
        </header>
        <Album/>
      </div>
    );
  }
}

export default App;
