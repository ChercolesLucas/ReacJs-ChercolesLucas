import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"; // Importa el icono de la bolsa de compras de Material-UI

const CartWidget = () => {
  return (
    <div className="flex items-center">
      <span className="">
        <ShoppingBagIcon />{" "}
        {/* Utiliza el icono de la bolsa de compras de Material-UI */}
      </span>
      <span>0</span> {/* Número harcodeado, puede ser dinámico en el futuro */}
    </div>
  );
};

export default CartWidget;
