import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { PizzaContext } from '../context/pizzaContext';

const Nav = () => {
  const { cart, getTotalPrice } = useContext(PizzaContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

 

  return (
    <nav>

      <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={`me-4 ${setActiveClass}`} to="/cart">
        Carrito
        </NavLink>



      <div className='precionav'>Total: <span>${getTotalPrice()}</span></div>
    </nav>
  )
}

export default Nav;
