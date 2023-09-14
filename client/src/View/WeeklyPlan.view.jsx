import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import Layout from "../Templates/Layout.templates";
import FoodCard from "../Components/FoodCard.component";

const RecipesUploadView = () => {
    const [selectedMealType, setSelectedMealType] = useState("Regular");

    const handleMealTypeChange = (event) => {
        setSelectedMealType(event.target.value);
    };

    return (
        <Layout>
        <div className="">
            <hr />
            <div className="m-5">
            <h1>Meal Planner</h1>
            <div className="m-3" >
                <label>
                Select Meal Type:
                <select value={selectedMealType} onChange={handleMealTypeChange}>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Healthy">Healthy</option>
                    <option value="Regular">Regular</option>
                </select>
                </label>
            </div>
            <div className= 'd-flex text-black ' style={{ width: '1250px' }}>
                <FoodCard dayName="Monday" mealType={selectedMealType} />
                <FoodCard dayName="Tuesday" mealType={selectedMealType} />
                <FoodCard dayName="Wednesday" mealType={selectedMealType} />
                <FoodCard dayName="Thursday" mealType={selectedMealType} />
                <FoodCard dayName="Friday" mealType={selectedMealType} />
                <FoodCard dayName="Saturday" mealType={selectedMealType} />
                <FoodCard dayName="Sunday" mealType={selectedMealType} />
            </div>
            <div className="text-center">
                <Link
                type="submit"
                className="mt-4 px-4 btn btn-m btn-primary mx-auto"
                to={"/recipe/shoplist/"}
                >
                See shopping list
                </Link>
            </div>
            </div>
        </div>
        </Layout>
    );
};

export default RecipesUploadView;
