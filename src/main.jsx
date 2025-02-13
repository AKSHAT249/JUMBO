import { StrictMode, useState, useEffect, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import React, { createContext } from 'react';







createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <App />
    </StrictMode>
  
);

