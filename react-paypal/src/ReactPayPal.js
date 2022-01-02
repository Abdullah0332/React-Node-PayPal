import React, { useEffect, useState } from "react";

export default function ReactPayPal() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "USD",
                  value: 50.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
          setError(true);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div style={{ padding: "10px" }}>
      <h4>Total Amount in Rs. : 500 /-</h4>
      <div ref={paypalRef} />
    </div>
  );
}
