import logoimg from "../assets/logo.jpg";
import Button from "./util/UI/Button";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoimg} alt="restaurent" />
          <h1>Nasty Tasty Foods</h1>
        </div>
        <nav>
          <Button textOnly={true}>Cart (0)</Button>
        </nav>
      </header>
    </>
  );
}
