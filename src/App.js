import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PizzasList from './components/PizzasList';
import PizzaDetail from './components/PizzaDetail';
import Cart from './components/Cart';
import { PizzaProvider, PizzaContext } from './context/pizzaContext';
import './App.css'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    
      <PizzaProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<PizzasList />} />
          <Route path="pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </PizzaProvider>
    </BrowserRouter>
  );
};

export default App;
