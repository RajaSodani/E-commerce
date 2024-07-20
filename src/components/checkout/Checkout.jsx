import React, { useState } from "react";
import "./checkout.css";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    alert("User information stored locally. Proceeding to payment.");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="contactNumber"
          value={userInfo.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
        />
        <button type="submit" className="checkout-button">Proceed to Payment</button>
      </form>
    </div>
  );
};
