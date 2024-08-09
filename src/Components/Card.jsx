import React from 'react';
import CardStyles from "../Styles/Card.module.css"

const Card = ({ recipe }) => {
  return (
    <div className= {CardStyles.cardContainer}>
        <h3>{recipe.nombre}</h3>
        <img src={recipe.imagen} alt="" className= {CardStyles.cardImg} />
        <h4>{recipe.precio}</h4>
    </div>
  )
}

export default Card
