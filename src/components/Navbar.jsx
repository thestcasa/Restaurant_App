import { Link } from "react-router-dom";
import './navbar.css';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Nuova Ordinazione</Link>
        </li>
        <li>
          <Link to='/orders'>Ordinazioni</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;