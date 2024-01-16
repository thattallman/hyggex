import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Navigator = () => {
  return (
    <div className="flex p-10">
      <AiOutlineHome className = "h-5" />
      <IoIosArrowForward  className = "h-4"/>
      <h1 className="text-sm"> Flashcard</h1>
      <IoIosArrowForward className = "h-4" />
      <h1 className="text-sm"> Mathematics</h1>
      <IoIosArrowForward className = "h-4" />
     <h1 className="text-sm text-blue-900 font-bold"> Relation and Function</h1>

    </div>
  )
};
 
export default Navigator;
