import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
