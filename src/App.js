import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import swal from 'sweetalert';
import RecipeComponent from './RecipeComponent';

function App() {
  const MY_ID = '88a5da95';
  const MY_KEY = '71d0f8b9764c0e3eb4bb4fc266e15d55';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [searchedWord, setSearchedWord] = useState('chicken');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchedWord}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();

      setRecipes(data.hits);
    };
    getRecipe();
  }, [searchedWord]);

  const searchWord = (evt) => {
    setSearch(evt.target.value);
  };

  const onSubmitSearch = (evt) => {
    evt.preventDefault();

    onClickSearch();
  };

  const onClickSearch = () => {
    if (search || search.length > 0) {
      setSearchedWord(search);
    } else {
      swal({
        title: "Please type what you are looking for",
        icon: "warning",
        button: {
          text: "Ok",
          className: "red",
        },      
      });    
    }
    setSearch('');
  }

  return (
    <div>
      <h1>Find a Recipe</h1>
      <div className="inputContainer">
        <form onSubmit={onSubmitSearch}>
          <input type="text" onChange={searchWord} placeholder="Search..." value={search} />
        </form>
        <button onClick={onClickSearch}>
          <img src="https://www.iconpacks.net/icons/2/free-search-icon-2911-thumb.png" width="20px" alt="search icon"/>
        </button>
      </div>
      {recipes.slice(0, 10).map((item, index) => (
          <RecipeComponent
          key={index}
          index={index}
          label={item.recipe.label} 
          image={item.recipe.image} 
          calories={item.recipe.calories} 
          ingredients={item.recipe.ingredientLines}
          servings={item.recipe.yield}
          fat={item.recipe.totalNutrients.FAT.quantity}
          protein={item.recipe.totalNutrients.PROCNT.quantity}
          carb={item.recipe.totalNutrients.CHOCDF.quantity}
          />
      )
      )}
    </div>
  );
}

export default App;
