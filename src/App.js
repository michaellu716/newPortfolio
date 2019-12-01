import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Portfolio2 from './components/Portfolio2';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Portfolio2 resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;