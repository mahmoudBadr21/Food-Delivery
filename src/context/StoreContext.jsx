import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreConext = createContext(null);

const StoreConextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFormCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItem[item]
      }
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFormCart,
    getTotalCartAmount
  };

  return (
    <StoreConext.Provider value={contextValue}>
      {props.children}
    </StoreConext.Provider>
  );
};

export default StoreConextProvider;
