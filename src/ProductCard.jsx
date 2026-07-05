const ProductCard = ({ elem, del }) => {
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

        <h2 className="mt-3 text-lg font-bold text-slate-800 line-clamp-2 min-h-[56px]">
          {elem.title}
        </h2>

        <p className="text-slate-500 text-sm mt-2 line-clamp-3 min-h-[60px]">
          {elem.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <div>
            <p className="text-green-600 text-2xl font-bold">
              ${elem.price}
            </p>
          </div>

          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {elem.rating.rate}
          </div>

        </div>

        <button
          onClick={() => del(elem.id)}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition duration-300 active:scale-95"
        >
          Delete Product
        </button>

      </div>
    </div>
  );
};

export default ProductCard;