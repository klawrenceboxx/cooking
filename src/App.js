import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  // would typically use "enviornment tools for the app key and app id, because if this code is being pushed live, then people would be able to read these values"
  const APP_ID = "345abc9c";
  const APP_KEY = "c6f46d96ebc8d175764e2d01348d3202	";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=%22chicken%22&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
