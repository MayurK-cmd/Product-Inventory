import React, { useState, useEffect } from "react";

function ProductForm({ product, onSave, onCancel }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setQuantity(product.quantity);
    } else {
      setName('');
      setPrice('');
      setQuantity('');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure price and quantity are valid numbers
    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
      alert("Please enter valid positive numbers for price and quantity.");
      return;
    }

    const productData = {
      id: product ? product.id : Date.now(),
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };

    onSave(productData);
    // Optionally reset fields only on successful save
    // Resetting them can also be handled by the parent component if needed
    if (!product) {
      setName('');
      setPrice('');
      setQuantity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0" // Prevent negative values
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="0" // Prevent negative values
        required
      />
      <button type="submit">{product ? 'Update' : 'Add'}</button>
      {product && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ProductForm;
