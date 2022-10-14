import "./NavBar.css";
import ImagenLogo from "../../Assets/logo2.svg";
import {CartWitdget} from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = ()=>{
    return(
        <nav>
            <Link to="/">
            <img className="logo" src={ImagenLogo} alt='logo astromatch'/>
            </Link>
            <ul className='navegacion'>
                <li><a href='/'>inicio</a></li>
                <li><a href='/'>libros</a></li>
                <li><a href='/'>cursos</a></li>
            </ul>
            <CartWitdget/>
        </nav>
    )
}