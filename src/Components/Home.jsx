import React from 'react';
import Card from './Card';
import { productos } from '../utils/productos';
import '../Styles/App.css'

const Home = () => {
  return (
    <>
        <h1>Lista de Productos</h1>
        <div className="list-container">
        {productos.map((producto) => (
          <Card key={producto.id} recipe={producto} />
        ))}
      </div>
    </>
  )
}

export default Home


