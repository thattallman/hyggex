import React from "react";
import Logo from "../pics/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="py-3">
        <img  className="h-16 px-7 "  alt="logo" src={Logo}></img>
      </div>
      <div className="py-4  px-5 ">
        <ul className="flex  px-5 py-1 h-12">
          <li className="px-5 text-base py-2">Home</li>
          <li className="px-5 text-base py-2">Flashcard</li>
          <li className="px-5 text-base py-2">Contanct</li>
          <li className="px-5 text-base py-2">FAQ</li>
          
          <li className="px-4 py-2 text-base font-semibold text-white bg-blue-900  bg-gradient-to-r from-blue-000 to-blue-500 hover:bg-blue-600   rounded-l-full rounded-r-full shadow-md cursor-pointer transition-all duration-300">
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
