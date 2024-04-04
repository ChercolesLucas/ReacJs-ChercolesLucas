import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-4 flex justify-center bg-neutral-100">
      <p className="text-xl">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
