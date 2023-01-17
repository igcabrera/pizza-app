import React, { useContext } from 'react';
import { PizzaContext }  from '../context/pizzaContext';
import '../components/cart.css'

const Cart = () => {
    const { cart, handleRemovePizza, getTotalPrice } = useContext(PizzaContext);
    
    return (
      <div className="cart-container">
        <h1>Carrito</h1>
        <div className="cart-items">
          {cart.map((pizza, index) => (
            <div key={index} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h2>{pizza.name}</h2>
                <p>Ingredientes: <span>{pizza.ingredients.join(', ')}</span></p>
                <p className='precio'>Precio: <span>${pizza.price}</span></p>
                <button onClick={() => handleRemovePizza(pizza.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
        <div className='total-pagar'>
            <p>Total: <span className='getprice'>${getTotalPrice()}</span></p>
            <button className="ir-pagar">Ir a pagar</button>
        </div>
      </div>
    );
    }
    
    export default Cart;