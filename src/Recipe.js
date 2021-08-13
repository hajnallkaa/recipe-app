import React from 'react';
import style from './recipe.module.css';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{Math.round(calories)} kcal</p>
            <img src={image} alt="img" className={style.image} ></img>
        </div>
    )
}

export default Recipe;
