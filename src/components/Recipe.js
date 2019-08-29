import React from 'react';
import './Recipe.css';
import {Link} from 'react-router-dom';

import { async } from 'q';
const API_KEY = "ce64710354910dce2c5326eb60034bfb";


class Recipe extends React.Component{
    state = {
        activeRecipe: []
    }

    componentDidMount = async (e) =>{
        const title = this.props.location.state.recipe;
       
        const request= await fetch
        (`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
        const result = await request.json();
        this.setState({ activeRecipe: result.recipes[0]})
        
        

    }

    render(){
        console.log(this.props);
        const recipe = this.state.activeRecipe;
        return(
            <div className="container">
               { this.state.activeRecipe.length !== 0 &&

                <div className="active-recipe">
                    <img 
                    className="active-recipe__img" 
                    src={recipe.image_url} 
                    alt={recipe.title}/>
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    <h4 className="active-recipe__publisher"><span>
                        Publisher:{recipe.publisher} 
                    </span></h4>
                    <p className="active-recipe__website">
                        Website: <span><a href={recipe.publisher_url}/>{recipe.publisher_url}</span>
                    </p>
                    <button className = "active-recipe__button">
                        <Link to="/">Go Home</Link>
                    </button>

                </div>



               }
            </div>
        );
    }
}
export default Recipe;