import React from 'react';

import { Provider } from 'react-redux';
import { HashRouter, StaticRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { JssProvider, jss } from 'react-jss';

import basename from 'base.config';
import customHistory from './history';

import App from './components/App';

const createGenerateClassName = () => {
  let counter = 0;
  return (rule, sheet) => {
    counter++;
    console.log(counter);
    return `custom--${rule.key}-${counter}`
  }
};


export const ClientRouter = props => {
  return (
    <Provider store={props.store}>
      <ConnectedRouter history={customHistory}>
        <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
          <App/>
        </JssProvider>
      </ConnectedRouter>
    </Provider>
  );
};

// Client Side Static App
export const AppHashRouter = (props) => {
  return (
    <Provider store={props.store}>
      <HashRouter basename={basename}>
        <App/>
      </HashRouter>
    </Provider>
  )
};

export const ServerRouter = props => {
  return (
    <Provider store={props.store}>
      <StaticRouter basename={basename} location={props.location} context={props.context}>
        <JssProvider jss={jss} registry={props.registry} generateClassName={createGenerateClassName()}>
          <App/>
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
};
