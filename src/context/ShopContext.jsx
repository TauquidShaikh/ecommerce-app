import { createContext } from "react";
import { Products } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = "₹";
    const delivery_fee = 10;

    const value = {
        Products,
        currency,
        delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
