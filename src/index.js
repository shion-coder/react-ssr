import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './client/components/Home';

/* -------------------------------------------------------------------------- */

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head></head>
      <body>
        <div id="app">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `;

  res.send(html);
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
