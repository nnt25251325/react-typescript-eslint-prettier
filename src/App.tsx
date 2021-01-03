import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'antd/dist/antd.css';
import '@Assets/scss/styles.scss';

import PrivateRoute from '@Components/PrivateRoute';
import MainHeader from '@Components/MainHeader';
import Login from '@Pages/login';
import Home from '@Pages/home';
import Contact from '@Pages/contact';

const BASE_NAME = process.env.REACT_APP_BASE_ROOT;
const history = createBrowserHistory({ basename: BASE_NAME });

const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <MainHeader />

        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/Home" component={Home} />
          <PrivateRoute path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
