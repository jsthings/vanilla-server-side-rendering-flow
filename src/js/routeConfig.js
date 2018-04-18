import React from 'react';
import { Redirect } from 'react-router-dom';

import actions from 'js/actions';

import Login from 'js/components/pages/Login/Login';
import Home from 'js/components/pages/Home/Home';

export const RedirectToLogin = () => (
  <Redirect to={'/login'}/>
);

export const RedirectToHome = () => (
  <Redirect to={'/home'}/>
);

// 2 Set of Routes for userLoggedIn and userNotLoggedIn
const routeConfig = (isLoggedIn) => {
  return !isLoggedIn ? [
    {
      path: '/login',
      component: Login,
      loadData: actions.getData.bind(null,'DATA_FOR_LOGIN')
    },
    {
      path: '/',
      component: Login,
      loadData: actions.getData.bind(null,'DATA_FOR_LOGIN')
    }
  ] : [
    {
      path: '/home',
      component: Home,
      loadData: actions.getData.bind(null,'DATA_FOR_HOME')
    },
    {
      path: '/login',
      component: Home,
      loadData: actions.getData.bind(null,'DATA_FOR_HOME')
    },
    {
      path: '/',
      component: Home,
      loadData: actions.getData.bind(null,'DATA_FOR_HOME')
    }
  ]
};

export default routeConfig;