import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (<>
  <div className="navbar-container">
    <Link to="/" className="nav-item">Home</Link>
    <Link to="/about" className="nav-item">About</Link>
    <Link to="/contact"className="nav-item">Contact</Link>
    </div>
    </>
  )
}

export default Navbar