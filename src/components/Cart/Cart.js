import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  return (
    <div>
      <h3>This is cart {cart.length}</h3>
    </div>
  );
};

export default Cart;
