import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3002/meals");
        if (!response.ok) {
          console.log("Error: while fetching meals from backend");
        } else {
          console.log("Successful Connection");
          const meals = await response.json();
          setLoadedMeals(meals);
        }
      } catch (error) {
        console.log(
          "Error: while sending the fetch request, check your connection"
        );
        throw error;
      }
    }
    fetchMeals();
  }, []);

  return (
    <>
      <ul id="meals">
        {loadedMeals.map((meal) => {
          return <MealItem key={meal.id} meal={meal}/>
        })}
      </ul>
    </>
  );
}
