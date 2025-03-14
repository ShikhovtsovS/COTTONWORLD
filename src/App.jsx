import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-pink-300 via-gray-100 to-gray-400 min-h-screen flex flex-col items-center p-6">
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
