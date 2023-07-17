import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import DarkModeButton from './DarkModeButton';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeButton />
    <App />
  </React.StrictMode>
);