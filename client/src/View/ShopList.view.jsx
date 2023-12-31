import React from "react";
import Layout from "../Templates/Layout.templates";
import { useLocation } from "react-router-dom";
import html2canvas from 'html2canvas';
import {FaShoppingBasket} from 'react-icons/fa';

const ShopList = (props) => {
    // Access the weeklyRecipes prop from props
    const location = useLocation();

    // Now you can access the weeklyRecipes
    const weeklyRecipes = location.state?.weeklyRecipes || [];

    const captureScreenshot = () => {
        const elementToCapture = document.getElementById('MyShopList'); // Replace 'capture-element' with the ID of the element you want to capture
        html2canvas(elementToCapture).then((canvas) => {
            const screenshot = canvas.toDataURL('image/png');
            // Create a download link for the screenshot
            const downloadLink = document.createElement('a');
            downloadLink.href = screenshot;
            downloadLink.download = 'screenshot.png';
            downloadLink.click();
        });
        };

    // Function to calculate the shopping list
    const calculateShoppingList = () => {
        // Initialize an empty shopping list and a map to keep track of ingredient quantities
        const shoppingList = [];
        const ingredientMap = new Map();

        // Iterate through the days and their recipes
        weeklyRecipes.forEach((dayRecipe) => {
            if (dayRecipe.recipes) {
                dayRecipe.recipes.forEach((recipe) => {
                    if (recipe && recipe.ingredients) {
                        // Add each ingredient to the shopping list and update its quantity
                        recipe.ingredients.forEach((ingredient) => {
                            const { qty, measure, ingredient: { name } } = ingredient;
                            const ingredientKey = `${measure || ""} ${"of"} ${name}`;
                            
                            if (ingredientMap.has(ingredientKey)) {
                                // If the ingredient already exists, add its quantity
                                ingredientMap.set(ingredientKey, ingredientMap.get(ingredientKey) + qty);
                            } else {
                                // If it's a new ingredient, initialize its quantity
                                ingredientMap.set(ingredientKey, qty);
                            }
                        });
                    }
                });
            }
        });

        // Convert the map back to a shopping list
        ingredientMap.forEach((qty, ingredient) => {
            shoppingList.push(`${qty} ${ingredient}`);
        });

        return shoppingList;
    };    

    // Get the shopping list
    const shoppingList = calculateShoppingList();

    return (
        <Layout>
            <br/>
            <div id="MyShopList" className="card card-title text-white bg-primary mb-3 mt-5">
                <div className="card-header">
                    <h1 className="card-title">
                        Shopping List 
                        <div>
                            <FaShoppingBasket/>
                        </div>
                    </h1>
                </div>
                <div className="card-body">
                    <ul className="card-text" style={{ textAlign: 'left' }}>
                        {shoppingList.map((ingredient, index) => (
                            <li key={index}>{ingredient} </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button
                    type="button"
                    onClick={captureScreenshot}
                    className="my-4 px-4 btn btn-m btn-secondary mx-2"
                >
                    <b>Download shopping list</b>
            </button>
        </Layout>
    );
};

export default ShopList;
