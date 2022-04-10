import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/styles/tailwind.css';

// layouts

import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';

// views without layouts

import Landing from 'views/Landing.js';
import Profile from 'views/Profile.js';
import Index from 'views/Index.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path='/Showcase/admin' component={Admin} />
      <Route path='/Showcase/auth' component={Auth} />
      {/* add routes without layouts */}
      <Route path='/Showcase/landing' exact component={Landing} />
      <Route path='/Showcase/profile' exact component={Profile} />
      <Route path='/Showcase' exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from='*' to='/Showcase' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
