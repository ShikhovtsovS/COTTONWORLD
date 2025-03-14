import React from "react";

const ProductCard = ({ shirt }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105">
      <div className="w-full h-52 flex items-center justify-center rounded-2xl overflow-hidden">
        <img
          src={shirt.image}
          alt={shirt.name}
          className="max-w-full max-h-full object-contain rounded-2xl"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        {shirt.name}
      </h2>
      <p className="text-gray-500">{shirt.description}</p>
      <div className="flex gap-4 mt-4">
        <a
          href={shirt.ozonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          OZON
        </a>
        <a
          href={shirt.wbLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition shadow-md"
        >
          WB
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
