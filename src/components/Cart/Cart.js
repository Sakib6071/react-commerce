import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const {cart}=props
  console.log(props.children);
  let totalPrice = 0;
  let shipping =0;
  let quantity=0;
  for(const product of cart){
    quantity+=product.quantity;
    totalPrice += product.price*product.quantity;
    shipping += product.shipping;
  }
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice+shipping+tax;
  return (
    <div className="cart">
      <h2 className="orderHeading">Order Summary</h2>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
      {props.children}
    </div>
  );
};

export default Cart;
