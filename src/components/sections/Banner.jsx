import banner from '../../img/banner-home.png';
import { NavLink } from 'react-router-dom';
import '../../styles/Banner.css';

const Banner = () => (
    <main className="main-home">
        <div className="banner-main-home">
            <p className='banner-main-home-title-first'>Un lugar para encontrar el contenido <br></br> de tus materias, construido por <br></br> estudiantes</p>
            <p className='banner-main-home-title-second'>Aun no te rindas, puedes lograrlo, el tiempo es relativo</p>
            <div className='banner-main-home-container-buttons'>
                <NavLink to='/contenido' className='banner-button-one'>Ver Contenido</NavLink>
                <NavLink to='/examenes-pasados'>Examenes Pasados</NavLink>
            </div>
        </div>
        <img 
            src= {banner}
            alt="banner-home" 
            className='img-main-home'
        />
    </main>
);

export default Banner;