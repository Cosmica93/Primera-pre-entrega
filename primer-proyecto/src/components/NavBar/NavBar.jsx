import "./NavBar.css";
import ImagenLogo from "../../Assets/logo2.svg";
import {CartWitdget} from "./CartWidget/CartWidget";

export const NavBar = ()=>{
    return(
        <nav>
            <img className="logo" src={ImagenLogo} alt='logo astromatch'/>
            <ul className='navegacion'>
                <li><a href='/'>inicio</a></li>
                <li><a href='/'>libros</a></li>
                <li><a href='/'>cursos</a></li>
            </ul>
            <CartWitdget/>
        </nav>
    )
}