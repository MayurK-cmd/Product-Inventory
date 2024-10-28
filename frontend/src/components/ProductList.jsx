import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import PropTypes from "prop-types";

function ProductList({ products, onAdd, onEdit, onDelete }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSave = (newProduct) => {
    onAdd(newProduct);
    setFormVisible(false);
    setCurrentProduct(null); // Reset current product
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setFormVisible(true); // Show form for editing
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => setFormVisible(true)}>Add Product</button>

      {isFormVisible && (
        <ProductForm
          product={currentProduct}
          onSave={handleSave}
          onCancel={() => {
            setFormVisible(false);
            setCurrentProduct(null); // Reset current product on cancel
          }}
        />
      )}

      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No products available right now</p>
      )}
    </div>
  );
}

// PropTypes for type checking
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductList;
