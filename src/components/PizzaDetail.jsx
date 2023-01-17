import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../components/pizzadetail.css'


export default function PizzaDetail() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('/pizzas.json')
    .then(response => response.json())
    .then(data => {
      const pizzaFiltrada = data.filter(pizza => pizza.id === id)[0];
      setPizza(pizzaFiltrada);
    })
  }, [id]);

  if (!pizza) {
    return <div>no existe...</div>
  }

  return (
    <div className="pizza-detail-container">
      <img src={pizza.img} alt={pizza.name} className="pizza-detail-img"/>
      <div className="pizza-detail-info">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className='precio'>Precio: <span>${pizza.price}</span></p>
      </div>
    </div>
  );
}
