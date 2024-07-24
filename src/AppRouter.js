// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function AppRouter() {
  return (
    <Router>
      <Switch>
      <Route path="/" element={<LoginPage/>} />
        {/* <Route path="/" exact component={App} /> */}
        {/* <Route path="/landing" component={LandingPage} /> */}
        <Route path="/login" component={Login} />
        <Route path="/sign" component={SignUp} />

      </Switch>
    </Router>
  );
}

export default AppRouter;
