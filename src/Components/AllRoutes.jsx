import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import NotFoundPage from "../pages/NotFoundPage";
import SingleProductPage from "../pages/SingleProductPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route path="/products/:id" element={<SingleProductPage />}></Route>
      <Route
        path="/about"
        element={
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
