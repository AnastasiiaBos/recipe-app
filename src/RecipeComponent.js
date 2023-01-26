import icon from './iconTick.png';

export default function RecipeComponent ({label, image, calories, ingredients, servings, fat, protein, carb, index}) {
    return (
        <div className={`centerWrapper ${index % 2 ? "grey" : ""}`}>
            <div className="descriptionContainer">
                <img className="recipeImage" src={image} width="300px" alt="dish"/>

                <div className="nutrientsContainer">
                    <h2>{label}</h2>
                    <p><span className="nutrientValue">{servings.toFixed()}</span> servings</p>
                    <p className="caloriesContainer"><span className="calories">{calories.toFixed()}</span> kcal</p>

                    <ul className="nutrientsList">
                        <li>
                            <span className="nutrient">FAT</span>
                            <span className="nutrientValue">{fat.toFixed()}g</span>
                        </li>
                        <li>
                            <span className="nutrient">PROTEIN</span>
                            <span className="nutrientValue">{protein.toFixed()}g</span>
                        </li>
                        <li>
                            <span className="nutrient">CARB</span>
                            <span className="nutrientValue">{carb.toFixed()}g</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="ingredientsList">{ingredients.map( (ingredient, index) => (
                <li key={index}>
                    <img className="ingedientsIcon" src={icon} width="20px" alt="tick icon"/>
                    <span>{ingredient}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}