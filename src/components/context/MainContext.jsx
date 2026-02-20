import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const MainContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    data.push(newProduct);
    localStorage.setItem("p", JSON.stringify(data));
    readProduct();
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    setProduct(data);
  }

  function delProduct(id) {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("p", JSON.stringify(data));
    readProduct();
  }

  function addOrder(newOrder) {
    let data = JSON.parse(localStorage.getItem("order")) || [];
    data.push(newOrder);
    localStorage.setItem("order", JSON.stringify(data));
    readOrder();
  }

  function readOrder() {
    let data = JSON.parse(localStorage.getItem("order")) || [];
    setOrder(data);
  }

  function delOrder(id) {
    let data = JSON.parse(localStorage.getItem("order")) || [];
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("order", JSON.stringify(data));
    readOrder();
  }

  const values = {
    addProduct,
    readProduct,
    product,
    delProduct,
    addOrder,
    readOrder,
    delOrder,
    order,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
