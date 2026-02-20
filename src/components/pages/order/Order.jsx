import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/MainContext";
import scss from "./Order.module.scss";

const Order = () => {
  const { readOrder, delOrder, order } = useProduct();
  const [count, setCount] = useState(0);
  useEffect(() => {
    readOrder();
  }, []);

  return (
    <div className={scss.order}>
      <div className="container">
        {order.map((item, idx) => (
          <div key={idx}>
            <div className={scss.top}>
              <div className={scss.img}>
                <img src={item.item.img} alt="" />
              </div>
              <div className={scss.name}>
                <h3>{item.name}</h3>
                <br />
                <br />
                <h3>{count * 2}$</h3>
              </div>
              <div className={scss.btn1}>
                <button onClick={() => delOrder(item.id)}>delete</button>
                <div className={scss.btn2}>
                  <button onClick={() => setCount(count + 1)}>+</button>
                  <h4>{count}x</h4>
                  <button
                    onClick={() => setCount(count > 0 ? count - 1 : count)}
                  >
                    -
                  </button>
                  {/* <h3> {count} </h3> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
