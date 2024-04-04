import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"; 

const CartWidget = () => {
  return (
    <div className="flex items-center">
      <span className="">
        <ShoppingBagIcon />{" "}
      </span>
      <span>0</span> 
    </div>
  );
};

export default CartWidget;
