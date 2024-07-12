import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to={'/'}>Home Page</Link>
        <Link to={'/about'}>About Page</Link>
        <Link to={'/contact'}>Contact Page</Link>
        <Link to={'/signup'}>Sign Up</Link>
    </nav>
  )
}

export default Navbar