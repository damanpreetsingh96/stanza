import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
