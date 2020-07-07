import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, useRouterHistory } from 'react-router-dom';
import './index.css';
import App from './App';
// import AddItem from './components/AddItem';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import Map from './Map';
import Graph from './Graph';

=======
>>>>>>> 3d8f6090243240530ccb27e587fa33ca0ea5ac0c



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <Route path="/App" component={App}/>
    <Route path="/Map" component={Map}/>
    <Route path="/Graph" component={Graph}/>
=======
    <Route path="/" component={App}/>
    {/* <Route path="/test" component={AddItem}/> */}
>>>>>>> 3d8f6090243240530ccb27e587fa33ca0ea5ac0c
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();