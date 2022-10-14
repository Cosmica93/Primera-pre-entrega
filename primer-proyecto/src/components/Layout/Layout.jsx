import React from "react";
import { NavBar } from "../NavBar/NavBar";

export const Layout = ({ children }) => {
    return (
        <div style={{width:"100vw", height:"100vh"}}>
            <NavBar/>
            {children}
        </div>
    )
}