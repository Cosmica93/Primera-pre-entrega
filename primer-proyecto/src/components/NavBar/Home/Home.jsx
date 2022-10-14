import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../db/getProducts";
import { Layout } from "../../Layout/Layout";


export const Home = () => {

const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts()
        .then((response)=>{
        setProducts(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    return (
        <Layout>
            <ul>
                {products.map((item,i)=>{
                    return(
                    <Link key={i} to={`/category/${item.id}`}>
                    <li>{item.title}</li>
                    </Link>
                    )
                })} 
            </ul>
        </Layout>
    )
}