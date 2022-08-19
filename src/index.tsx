import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>
);

