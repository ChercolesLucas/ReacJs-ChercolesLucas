import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header className="bg-neutral-100">
        <ul className="flex justify-end  text-xs p-3 [&>li>a]:tracking-wide [&>li>a]:ms-1">
          <li>
            <a href="#">Suscribite I</a>
          </li>
          <li>
            <a href="#">Buscar tienda I</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
        </ul>
      </header>

      <main>
        <nav className="bg-white text-black  p-5 flex justify-between items-center ">
          <svg
            className="h-7 w-auto "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69 32"
          >
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z" />
          </svg>
          <ul className="flex space-x-4 ">
            <li>
              <a href="#">Destados</a>
            </li>
            <li>
              <a href="#">Hombre</a>
            </li>
            <li>
              <a href="#">Mujer</a>
            </li>
            <li>
              <a href="#">Niño/a</a>
            </li>
            <li>
              <a href="#">Accesorios</a>
            </li>
            <li>
              <a href="#">Oportunidades</a>
            </li>
          </ul>
          <CartWidget />
        </nav>
      </main>
    </>
  );
};

export default NavBar;
