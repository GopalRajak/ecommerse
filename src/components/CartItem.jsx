import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-white shadow rounded-lg mb-4 w-full">
      <div className="sm:h-24 sm:w-24 h-40 w-40 flex-shrink-0">
        <img src={item.image} className="h-full w-full object-cover" alt={item.title} />
      </div>
      <div className="sm:ml-4 mt-4 sm:mt-0 flex-1 overflow-hidden">
        <h1
          className="text-gray-700 font-semibold text-lg truncate"
          title={item.title}
        >
          {item.title}
        </h1>
        <h2
          className="text-gray-400 text-sm truncate"
          title={item.description}
        >
          {item.description}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
