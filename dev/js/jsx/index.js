// dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Bootstrap React-apps
const appsCollection = document.querySelectorAll('[data-react-app]');

appsCollection.forEach((appContainer) => {
  const appName = appContainer.getAttribute('data-react-app');
  const App = require(`./apps/${appName}`).default;

  // display launched app in the console
  console.log('React App ->', appName);

  ReactDOM.render(<App />, appContainer);
});
