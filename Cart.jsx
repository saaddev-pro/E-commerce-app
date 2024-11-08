
import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
