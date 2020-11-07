import bttnstyle from './dist/css/tkg-button.css'
import cardhoverstyle from './dist/css/tkg-card-hover.css'
import accordian from './dist/css/tkg-accordian.css'
import { TKGAccordian } from './dist/js/tkg-templates/tkg-accordian'
import { TKGButton } from './dist/js/tkg-templates/tkg-button'
import { TKGHoverCard } from './dist/js/tkg-templates/tkg-card-hover'
import { TKGPager } from './dist/js/tkg-templates/tkg-pager'
import $ from "jquery";
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
