import React, { useContext, useState } from "react";

export const UserData = React.createContext();

// export const userContextProvider = ({ props }) => {
//   return <userData.provider value={<Ecom />}>{props}</userData.provider>;
// };
// ---------------------------------------------------------------------------------------------------------------

// const CartContext = createContext();

export const UseCart = () => {
  return useContext(UserData);
};

export const UserContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <UserData.Provider value={{ cartItems, addToCart }}>
      {children}
    </UserData.Provider>
  );
};
