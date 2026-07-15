import { createContext } from "react";
import { useState } from "react";

export let MyShop = createContext();

export let Provider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const [cart, setCart] = useState([]);

  let Increament = (id) => {
  setCart(
    cart.map((elem) => {
      if (id === elem.id) {
        return {
          ...elem,
          quantity: elem.quantity + 1,
        };
      }

      return elem;
    })
  );  
  };

  let Decreament = (id) => {
  setCart(
    cart.map((elem) => {
      if (id === elem.id) {
        return {
          ...elem,
          quantity: elem.quantity - 1,
        };
      }

      return elem;
    })
  );  
  };

  return (
    <MyShop.Provider value={{ toggle, cart, setCart, setToggle, Increament ,Decreament}}>
      {children}
    </MyShop.Provider>
  );
};
