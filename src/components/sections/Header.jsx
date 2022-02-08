import '../../styles/Header.css';
import logo from '../../img/logo.svg';
import iconSearch from '../../img/buscar.png'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className='header-home'>
        <NavLink className='header-home-logo' to='/'><img src={logo} alt='logo-header'></img></NavLink>
        
        <form action="" className='header-search'>
            <input type="text" name="" id="" placeholder="¿Qué necesitas?" className='header-search-input' maxLength={30}/>
            <img src={iconSearch} className='header-search-img'></img>
        </form>
        <nav className='header-nav'>
            <ul className='header-nav-ul'>
                <li className='first-nav selected'><NavLink to='/'>INICIO</NavLink></li>
                <li><NavLink to='/sugerencias'>SUGERENCIAS</NavLink></li>
                <li><NavLink to='/contacto'>CONTACTO</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header;