import React from "react";
import { Link } from 'react-router-dom';


const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
      <Link to="/contactos" >
          Necesitas ayuda?
        </Link>
        <span> / </span>
        <a href="https://twitter.com/mundoPatin">
          Di Hola en Twitter
        </a>
        <span> / </span>
        <Link to="/" >
            Navega en nuestra página
        </Link>
      </p>
      
    </footer>
  );
};

export default Footer;
