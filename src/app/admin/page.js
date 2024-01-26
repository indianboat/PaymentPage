import React from "react";
import Link from "next/link";

const Page = () => {
  const handleGatewaySelection = (selectedGateway) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gateway", selectedGateway);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl">Your Gateways</h1>
      <div className="flex flex-col">
        <Link href="#">
          <button
            className="text-xl"
            // onClick={() => handleGatewaySelection("razor")}
          >
            Razor Pay
          </button>
        </Link>
        <Link href="#">
          <button
            className="text-xl"
            // onClick={() => handleGatewaySelection("paypal")}
          >
            PayPal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
