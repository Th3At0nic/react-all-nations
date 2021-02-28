import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  //   let totalPopulation = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const country = cart[i];
  //     totalPopulation = totalPopulation + country.population;
  //   }

  // reduce is the alternative of for loop...here below i did reduce to shortage the code than for loop

  const totalPopulation = cart.reduce(
    (sum, country) => sum + country.population,
    0
  );
  return (
    <div>
      <h3>This is cart {cart.length}</h3>
      <h3>Total population: {totalPopulation}</h3>
    </div>
  );
};

export default Cart;
