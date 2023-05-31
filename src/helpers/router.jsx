import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import React from "react";
import ProductDetails from "../components/ProductDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/product-details/:productId",
        element: <ProductDetails />,
    },
]);
