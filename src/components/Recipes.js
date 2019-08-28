import React from 'react';
import './Recipe.css';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
        {props.recipes.map((recipe)=>{
          return (
            <div className="col-md-4">
                <div className="recipes__box">
                    <img 
                    className="recipes__box-img"
                    src={recipe.image_url}
                    alt={recipe.title}/>
                    <div className="recipe__text">
                        <h5 className="recipes__title">
                        {recipe.title.length < 20? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                        </h5>
                        <p className="recipes__subtitle">Publisher: <span>
                            {recipe.publisher}
                            </span></p>
                    </div>
                    <button className="recipe_buttons">view Recipe</button>

                </div>
            </div>
          );
        })}

        </div>
        
    </div>
);

export default Recipes;