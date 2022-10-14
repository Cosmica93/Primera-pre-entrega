import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/NavBar/Home/Home";
import { ItemDetailContainer } from "../components/NavBar/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/NavBar/ItemListContainer/ItemListContainer";

export const AppRouter= () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
    )
}