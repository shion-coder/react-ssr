import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

/* -------------------------------------------------------------------------- */

ReactDOM.hydrate(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('app')
);
