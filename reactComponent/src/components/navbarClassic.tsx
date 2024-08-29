import '../styles/navbar-classic-responsiv.css'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

import { Link } from 'react-router-dom';

const Navbar = () => {

  function showSidebar() {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
            (sidebar as HTMLElement).style.display = 'flex';
        } else {
            (sidebar as HTMLElement).style.display = 'none';
        }
      }
  }

  return (
    <nav>
      <ul className='sidebar'>
      <li className='main-close-icon-div' onClick={showSidebar} ><a><img className='main-close-icon' src={close}/></a></li>
        <li><Link to=""><a className='menu-sidebar-li-element'>Home</a></Link></li>
        <li><Link to=""><a className='menu-sidebar-li-element'>Blog</a></Link></li>
        <li><Link to=""><a className='menu-sidebar-li-element'>Products</a></Link></li>
        <li><Link to=""><a className='menu-sidebar-li-element'>About</a></Link></li>
        <li><Link to=""><a className='menu-sidebar-li-element'>Forum</a></Link></li>
        <li><Link to=""><a className='menu-sidebar-li-element'>Login</a></Link></li>
      </ul>

      <ul>
        <li><Link to=""><a>Home</a></Link></li>
        <li className='hide-on-mobile'><Link to=""><a>Blog</a></Link></li>
        <li className='hide-on-mobile'><Link to=""><a>Products</a></Link></li>
        <li className='hide-on-mobile'><Link to=""><a>About</a></Link></li>
        <li className='hide-on-mobile'><Link to=""><a>Forum</a></Link></li>
        <li className='hide-on-mobile'><Link to=""><a>Login</a></Link></li>
        <li className='main-menu-icon-div' onClick={showSidebar} ><a><img className='main-menu-icon' src={menu}/></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
