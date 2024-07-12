import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to={'/'}>Home Page</Link>
        <Link to={'/About'}>About Page</Link>
        <Link to={'/Contact'}>Contact Page</Link>
    </nav>
  )
}

export default Navbar