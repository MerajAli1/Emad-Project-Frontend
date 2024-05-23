import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import ProductDetail from "../ProductDetail";
import Products from "../Products";
import Navbar from "../Navbar";
import CartPage from "../CartPage";
import Checkout from "../Checkout";
import AdminPortal from "../admin/AdminPortal";
import AdminForm from "../admin/AdminForm";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layout";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminForm />} />
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/adminPortal/*" element={<AdminPortal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
