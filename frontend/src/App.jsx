import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => 
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <ProductList 
        products={products} 
        onAdd={handleAddProduct} 
        onEdit={handleEditProduct} 
        onDelete={handleDeleteProduct} 
      />
    </div>
  );
}

export default App;
