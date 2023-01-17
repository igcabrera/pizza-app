import { useContext, useState, useEffect  } from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { PizzaContext } from '../context/pizzaContext';
import '../components/pizzalist.css'


export default function PizzasList() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      const resp = await fetch('/pizzas.json');
      const data = await resp.json();
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pizzas-container">
        <section className="form-container">
          <h1 className="title-style">Listado de Pizzas</h1>
          <div className="card-container">
            {pizzas.map((pizza, index) => (
              <Card key={index} className="card-style">
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                  <p>Ingredientes: <span>{pizza.ingredients.join(', ')}</span></p>
                  <p className='precio'>Precio: <span>${pizza.price}</span></p>
                  <Button className="btn-detalle" onClick={() => navigate(`/pizza/${pizza.id}`)}>
                    Ver detalle
                  </Button>
                  <Button className="btn-agregar" onClick={() => addToCart(pizza)}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
