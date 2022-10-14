import React, { useEffect, useState } from "react";
import { getProductById } from "../../../db/getProductById";
import { Layout } from "../../Layout/Layout";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting = "valor por default" }) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        getProductById(window.location.pathname.split('/')[2])
            .then((response) => { setProduct(response) })
    }, [])

    if (!product) {
        return (<p>Cargando...</p>)
    }
    return (
        <Layout>
            <div className="contenedor">
                {greeting}
                {product.title}
            </div>
        </Layout>
    )
}