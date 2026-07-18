import React, { useContext, useEffect } from "react";
import ProductCard from "./Components/ProductCard";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { MyShop } from "./Context/MyWebsite";
import axios from "axios"


const App = () => {
  let [products, setProduct] = useState([]);

  let getProducts = async () => {
    let {data} = await axios.get("https://fakestoreapi.com/products")
    setProduct(data);
  }

  useEffect(()=>{
    getProducts();
  },[])

 

  
  

  let { toggle, cart } = useContext(MyShop);

  
  

  return (
    <div className="min-h-screen min-w-screen from-slate-100 via-gray-50 to-slate-200">
      <Navbar />
      {toggle ? (
        <div className="max-w-7xl mx-auto px-8 py-10">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32">
              <h2 className="text-4xl font-bold text-slate-700">
                No Products Left 😢
              </h2>

              <p className="text-slate-500 mt-3">You deleted every product.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {products.map((elem) => {
                const isInCart = cart.find((val) => val.id === elem.id);

                return (
                  <ProductCard key={elem.id} elem={elem} isInCart={isInCart} />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default App;
