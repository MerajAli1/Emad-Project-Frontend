import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/ProductSlice";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./Navbar";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.productReducer);
  console.log("Api", allProduct);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filterPrducts = allProduct.filter((product) => {
    try {
      if (selectedCategory === "All") {
        return true;
      } else {
        return product.category.includes(selectedCategory);
      }
    } catch (error) {
      console.log(error);
      return false; // Handle the error by returning false or handle it accordingly
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bolder text-center">
                Latest Products
              </h1>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-2 col-6 mb-3">
              <button
                className="btn btn-outline-dark w-100 h-100"
                onClick={() => handleCategoryClick("All")}
              >
                All
              </button>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <button
                className="btn btn-outline-dark w-100 h-100"
                onClick={() => handleCategoryClick("men's clothing")}
              >
                Men's Clothing
              </button>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <button
                className="btn btn-outline-dark w-100 h-100"
                onClick={() => handleCategoryClick("women's clothing")}
              >
                Women's Clothing
              </button>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <button
                className="btn btn-outline-dark w-100 h-100"
                onClick={() => handleCategoryClick("jewelery")}
              >
                Jewellery
              </button>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <button
                className="btn btn-outline-dark w-100 h-100"
                onClick={() => handleCategoryClick("electronics")}
              >
                Electronic
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {filterPrducts?.map((product) => (
              <div
                onClick={() => navigate(`/productDetail/${product.id}`)}
                className="col-12 col-sm-6 col-md-3 mb-4"
                key={product.id}
              >
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    height="250px"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">{product.price}$</p>
                    <a href="#" className="btn btn-outline-dark">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Products;
