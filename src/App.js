import React from 'react';
import './App.css';


import Form from "./components/form";
import Recipes from './components/Recipes'
import { async } from 'q';

const API_KEY = "ce64710354910dce2c5326eb60034bfb";


class App extends React.Component{
   
  state = {
    recipes: [],
  };

  getRecipe=async (e)=>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call= await fetch
    (`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

    const data = await api_call.json();
    this.setState({recipes : data.recipes});
    console.log(this.state.recipes);
  };


  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        
        <Form getRecipe={this.getRecipe}/>
        {this.state.recipes.map((recipe)=>{
          return (
            <div key={recipe.recipe_id}>
              <img src={recipe.image_url} alt={recipe.title}/>
              <p >{recipe.title}</p>
            </div>
          );
        })}
        <Recipes recipes={this.state.recipes}/>
      </div>

    )
  }
}



export default App;
