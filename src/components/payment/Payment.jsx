import React, { useContext } from "react";
import "./payment.css";
import { ShopContext } from "../../context/shop-context";

export const Payment = () => {
  const { checkout } = useContext(ShopContext);
    
  const handlePayment = () => {
    alert("Payment Successful! Thank you for your purchase.");
  };

  return (
    <div className="payment">
      <h2>Payment Gateway</h2>
      <button onClick={()=>{
          checkout();
          handlePayment()
        }} className="payment-button">Pay Now</button>
    </div>
  );
};
