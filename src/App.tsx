import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import anything
import Navbar from './components/Navbar';
import Current from './components/Current';
import History from './components/History';
import SubHistory from './components/ResultHis';
import About from './components/About';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Current />
        </Route>
        <Route path='/current'>
          <Current />
        </Route>
        <Route path='/history/select'>
          <History />
        </Route>
        <Route path='/history/result'>
          <SubHistory />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
