import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';


import Home from './userpages/Home'
import Policy from './userpages/policy/Policy'
import Hub from './userpages/hub/Hub'
import BigHeader from './views/BigHeader'
import TwitterNearFeed from './views/TwitterNearFeed'

function App() {
  return (
    <div className="App">
      
      <Router>
        <BigHeader/>
        <Switch>
          <Route exact path="/ev" component={Home} />
          <Route path="/ev/policy" component={Policy} />
          <Route path="/ev/hub" component={Hub} />
          <Route path="/ev/events" component={TwitterNearFeed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
