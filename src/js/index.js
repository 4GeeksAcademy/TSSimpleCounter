import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from '../SecondsCounter.js';

ReactDOM.render(
  <SecondsCounter initialSeconds={0} />,
  document.getElementById('root')
);
