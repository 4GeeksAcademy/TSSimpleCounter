import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from '/workspaces/TSSimpleCounter/src/js/component/SecondsCounter.jsx';


ReactDOM.render(
  <SecondsCounter initialSeconds={0} />,
  document.getElementById('root')
);
