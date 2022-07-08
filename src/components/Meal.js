import React, { useState } from "react";
import Mealitems from "./Mealitems";
import "./style.css";
const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          setSearch("");
        });
    }
  };
  return (
    <>
      <div className="main">
      <button className='btn' onClick={() => window.location.reload()}> Back to Home </button>
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>
            Here you can find a variety of recipes for food search and choose
            your favorite!!
          </h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            placeholder="write your food"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
          />
        </div>
        <div className="container">
          {Mymeal == null ? (
            <p className="notSearch">Food not found</p>
          ) : (
            Mymeal.map((res) => {
              return <Mealitems data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Meal;
