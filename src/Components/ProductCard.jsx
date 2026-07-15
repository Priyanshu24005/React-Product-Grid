import { useContext } from "react";
import { MyShop } from "../Context/MyWebsite";

const ProductCard = ({ elem, isInCart }) => {
  let { setCart ,Increament ,Decreament} = useContext(MyShop);

  const addtoCart = () => {
    setCart((prev) => [...prev, {...elem,quantity:1}]);
  };

  
  

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-slate-200">
      <div className="bg-slate-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={elem.image}
          alt={elem.title}
          className="h-48 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {elem.category}
        </span>

        <h2 className="mt-3 text-lg font-bold text-slate-800 line-clamp-2 min-h-14">
          {elem.title}
        </h2>

        <p className="text-slate-500 text-sm mt-2 line-clamp-3 min-h-15">
          {elem.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-green-600 text-2xl font-bold">${elem.price}</p>
          </div>

          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {elem.rating.rate}
          </div>
        </div>

        {isInCart ? (
          <div className="mt-6 flex justify-center">
            <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden shadow-sm">
              <button className="px-4 py-3 text-xl font-semibold hover:bg-slate-100 transition" onClick={()=>Decreament(elem.id)}>
                -
              </button>

              <span className="px-6 py-3 border-x border-slate-300 font-semibold text-lg">
                {isInCart.quantity}
              </span>

              <button className="px-4 py-3 text-xl font-semibold hover:bg-slate-100 transition" 
               onClick={()=>Increament(elem.id)}>
                +
              </button>
            </div>
          </div>
        ) : (
          <button
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 active:scale-95"
            onClick={addtoCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
