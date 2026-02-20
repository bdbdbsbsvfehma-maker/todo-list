import React, { useEffect } from "react";
import scss from "./Menu.module.scss";
import { useProduct } from "../../context/MainContext";

const Menu = () => {
  const { readProduct, product, delProduct, addOrder } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div>
      <div id={scss.menu}>
        <div className="container">
          <h1>Menu</h1>
          <div className={scss.menu_text}>
            {product.map((item, idx) => (
              <div className={scss.name} key={idx}>
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
                <div className={scss.btn}>
                  {/* <br />
                  <br /> */}
                  <h5>{item.price}$</h5>
                </div>
                <div className={scss.btN}>
                  <button onClick={() => delProduct(item.id)}>delete</button>
                  <button onClick={() => addOrder({ ...item })}>
                    to order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
