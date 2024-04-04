import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css'

function App() {
    const greeting = "Pagina oficial de nike";
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={greeting} />
      </div>
    </>
  );
}

export default App
