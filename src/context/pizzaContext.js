import React, { createContext, useState } from 'react';

export const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = pizza => {
   setCart([...cart, pizza]);
  }

  const handleRemovePizza = (id) => {
    setCart(cart.filter(pizza => pizza.id !== id));
  }
  
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(pizza => {
      totalPrice += pizza.price;
    });
    return totalPrice;
  }

  //const removeFromCart = pizzaId => {
  //  setCart(cart.filter(pizza => pizza.id !== pizzaId));
  //}

  return (
    <PizzaContext.Provider value={{ cart, addToCart, PizzaContext, handleRemovePizza, getTotalPrice }}>
      {children}
    </PizzaContext.Provider>
  );
};

