import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

function App() {
  // const APP_ID = 'd4c2f807';
  // const APP_KEY = 'ae34f44461619df4b299022c84fd88bb';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
 

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d4c2f807&app_key=ae34f44461619df4b299022c84fd88bb`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search for recipes" value={search} onChange={updateSearch} />
        <button  className="search-button" type="submit">Submit</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}>
        </Recipe>
      ))}
      </div>
    </div>
  );
}

export default App;
