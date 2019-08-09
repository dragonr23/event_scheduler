import React from 'react';
import Header from './components/header';
import Events from './views/events';
import Schedule from './views/schedule';
import { Switch, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' render={() => <Schedule />}/>
      <Route exact path='/events' render={() => <Events />}/>

    </Switch>

    </div>
  );
}

export default App;
