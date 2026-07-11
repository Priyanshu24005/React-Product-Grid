import { createContext } from "react";
import { useState } from "react";

export let MyShop = createContext();

export let Provider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const [cart, setCart] = useState([]);

  return <MyShop.Provider value={{toggle,cart,setCart,setToggle}}>{children}</MyShop.Provider>;
};
