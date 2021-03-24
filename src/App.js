import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './Navigation/Navigation';
import { HashRouter, Route } from "react-router-dom";
import Profile from './Contents/Profile';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Route path="/" exact={true} component={Header} />
          <Navigation />
          {/* <Route path="/" exact={true} component={HOME} /> */}
          <Route path="/profile" exact={true} component={Profile} />
        </HashRouter>
         <Footer />
      </>
    );
  }
}

export default App;