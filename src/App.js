import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './Navigation/Navigation';
import { HashRouter, Route, Switch } from "react-router-dom";
import Profile from './Contents/Profile';
import Footer from './components/Footer';
import Project from './Contents/Project';
import ScrollTop from './components/ScrollTop';
import Contact from './Contents/Contact';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <ScrollTop>
              <Route path="/" exact={true} component={Header} />
              <Navigation />
              {/* <Route path="/" exact={true} component={HOME} /> */}
              <Route path="/profile" component={Profile} />
              <Route path="/project" component={Project} />
              <Route path="/contact" component={Contact} />
            </ScrollTop>
          </Switch>
        </HashRouter>
         <Footer />
      </>
    );
  }
}

export default App;