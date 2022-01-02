import React, { useState } from "react";
import "./App.css";
import ReactPayPal from "./ReactPayPal";

export default function App() {
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {checkout === true ? (
          <div className="payment-div">
            <ReactPayPal />
          </div>
        ) : (
          <div>
            <h1>React-PayPal</h1>
            <button
              onClick={() => {
                setCheckout(true);
              }}
              className="checkout-button"
              style={{ cursor: "pointer" }}
            >
              Checkout
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
