import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo salon.jpg'; // Asigură-te că calea către logo este corectă
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <div className="contact-info">
                    <span className="phone-number">0722 123 456</span>
                    <span className="owner-name">Robert_Frizeru</span>
                </div>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Acasă</Link></li>
                <li><Link to="/location">Locație</Link></li>
                <li><Link to="/gallery">Galerie Foto</Link></li>
                <li><Link to="/videos">Videoclipuri</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
