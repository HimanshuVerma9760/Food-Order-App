import { useContext } from "react";
import logoimg from "../assets/logo.jpg";
import Button from "./util/UI/Button";
import { CartContext } from "./Store/CartContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoimg} alt="restaurent" />
          <h1>Nasty Tasty Foods</h1>
        </div>
        <nav>
          <Button textOnly={true}>Cart ({totalItems})</Button>
        </nav>
      </header>
    </>
  );
}
