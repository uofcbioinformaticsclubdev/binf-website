import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div>U of C BINF Club</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}