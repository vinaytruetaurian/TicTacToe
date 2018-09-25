import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import RouteList from './routes'
ReactDOM.render(
    <Router
      history={browserHistory}
      routes={RouteList}
    />,
    document.getElementById('root')
  )
  

registerServiceWorker();
