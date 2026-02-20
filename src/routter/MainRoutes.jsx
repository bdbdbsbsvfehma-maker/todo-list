import React from "react";
import Menu from "../components/pages/menu/Menu";
import Admin from "../components/pages/admin/Admin";
import Order from "../components/pages/order/Order";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Menu /> },
    { link: "/admin", element: <Admin /> },
    { link: "/orders", element: <Order /> },
  ];

  return (
    <Routes>
      {routes.map((item, index) => (
        <Route key={index} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
