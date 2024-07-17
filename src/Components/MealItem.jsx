import { useContext } from "react";
import { currencyFormatter } from "./util/formatting";
import Button from "./util/UI/Button";
import { CartContext } from "./Store/CartContext";
export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);
  function handleAddItem() {
    addItem(meal);
  }
  return (
    <>
      <li className="meal-item">
        <article>
          <img src={`http://localhost:3002/${meal.image}`} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">
              {currencyFormatter.format(meal.price)}
            </p>
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-actions">
            <Button onClick={handleAddItem}>Add to Cart</Button>
          </p>
        </article>
      </li>
    </>
  );
}
