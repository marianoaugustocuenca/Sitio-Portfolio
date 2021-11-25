import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
        <div>
            <ul>
                <li><Link to="/" target="_blank">Home</Link></li>
                <li><Link to="/galeria" target="_blank">Galería</Link></li>
                <li><Link to="/novedades" target="_blank">Novedades</Link></li>
                <li><Link to="/contacto" target="_blank">Contacto</Link></li>
                <li><Link to="/nosotros" target="_blank">Sobre mí</Link></li>
            </ul>
        </div>
        </nav>
    )

};

export default Nav;
