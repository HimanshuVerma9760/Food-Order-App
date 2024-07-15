import logoimg from "../assets/logo.jpg";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoimg} alt="restaurent" />
          <h1>Nasty Tasty Foods</h1>
        </div>
        <nav>
          <button>Cart (0)</button>
        </nav>
      </header>
    </>
  );
}
