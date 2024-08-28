import '../styles/navbar-classic-responsiv.css'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='sidebar'>
        <li><Link to=""><a>Home</a></Link></li>
        <li><Link to=""><a>Blog</a></Link></li>
        <li><Link to=""><a>Products</a></Link></li>
        <li><Link to=""><a>About</a></Link></li>
        <li><Link to=""><a>Forum</a></Link></li>
        <li><Link to=""><a>Login</a></Link></li>
      </ul>

      <ul>
        <li><Link to=""><a>Home</a></Link></li>
        <li><Link to=""><a>Blog</a></Link></li>
        <li><Link to=""><a>Products</a></Link></li>
        <li><Link to=""><a>About</a></Link></li>
        <li><Link to=""><a>Forum</a></Link></li>
        <li><Link to=""><a>Login</a></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
