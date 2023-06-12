import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import "./Home.scss";
import Products from "../Products/Products";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../store/api";
import { Context } from "../../store/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    const getProducts = async () => {
      fetchDataFromApi("/api/products?populate=*").then((res) => {
        setProducts(res)
      });
    };
    
    const getCategories = async () => {
      fetchDataFromApi("/api/categories?populate=*").then((res) => {
        setCategories(res)
      });
    };

    getCategories();
    getProducts();
  }, [setCategories, setProducts]);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
