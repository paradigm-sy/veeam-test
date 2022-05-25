import React from 'react';
import ReactDOM from 'react-dom/client';
import FormGenerator from './components/FormGenerator/FormGenerator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormGenerator />
  </React.StrictMode>
);
