import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link to="/" style={{ color: "black" }}></Link>
          <ul className="categories">
            <Link to="/">All</Link>
            <Link to="/category/procesadores">Procesadores</Link>
            <Link to="/category/motherboards">MotheBoards</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
