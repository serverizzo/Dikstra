import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WhatEverIDefaultExport from './App';
import * as serviceWorker from './serviceWorker';

// Note: Whatever I render, I must make uppercase ( as per the requirements of JSX )
ReactDOM.render(<WhatEverIDefaultExport />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
