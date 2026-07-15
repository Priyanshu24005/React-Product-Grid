import React, { useContext } from "react";
import { MyShop } from "../Context/MyWebsite";

const Cart = () => {
  let { cart, setCart,Increament ,Decreament} = useContext(MyShop);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  let deletefn = (id) => {
    setCart((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">🛒 My Cart</h1>

      {cart.length === 0 ? (
        <div className="h-[70vh] flex items-center justify-center">
          <h2 className="text-2xl text-gray-500">Your Cart is Empty</h2>
        </div>
      ) : (
        <div className="flex gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex gap-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain"
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>

                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <span className="font-medium">Quantity:</span>

                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-lg font-bold">
                        −
                      </button>

                      <span className="px-5 py-1 border-x">
                        {item.quantity}
                      </span>

                      <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-lg font-bold" onClick={() => Increament(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-green-600">
                      ₹ {item.price}
                    </span>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      onClick={() => {
                        deletefn(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-80 bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-6">
              <span>Total</span>
              <span className="font-bold text-xl">₹ {total}</span>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
