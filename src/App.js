import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  HomeView,
  QuestionView,
  ProfileView,
} from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/random">
          <QuestionView id="random" />
        </Route>
        <Route path="/profile">
          <ProfileView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
