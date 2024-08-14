import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("printing cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-2/3">
            {cart.map((item, index) => (
              <div key={item.id} className="mb-1">
                <CartItem item={item} itemIndex={index} />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <h3 className="text-xl">Summary</h3>
              <p className="text-lg mt-2">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Cart is empty</h1>
          <Link to={"/"}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
