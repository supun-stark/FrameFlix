import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { FaFoursquare } from "react-icons/fa";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            {/* <FaFoursquare className="mainicon"/> */}
            <Link to="/"><FaFoursquare/>rame Flix</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar