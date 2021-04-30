/* eslint-disable unicorn/prefer-module */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App name="ddd" age={25} />, document.querySelector('#root'));
