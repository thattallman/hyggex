import React from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { MdOutlineReplay } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
const StudyScreen = () => {
  return (
    <div>
      <h1 className="text-blue-900 font-bold text-2xl px-16">
        Relations and Functions (Mathematics)
      </h1>
      <div className="p-5">
        <ul className="flex  items-center justify-center">
          <li className="text-sm px-5">Study</li>
          <li className="text-sm px-5">Quiz</li>
          <li className="text-sm px-5">Test</li>
          <li className="text-sm px-5">Game</li>
          <li className="text-sm px-5">Other</li>
        </ul>

        <div className="flex items-center justify-center py-5 ">
          <div className="h-64 w-2/5 bg-blue-900 rounded-3xl ">

            <div className="flex justify-between p-5">
              <MdLightbulbOutline className="text-white h-7 " />
              <GiSpeaker className="text-white h-8" />
              
            </div>
            <div className="py-10">
              <h1 className="text-white px-44 text-2xl ">9 + 6 + 7x - 2x -3</h1>
            
            </div>

          </div>
        </div>
        <div className="flex  items-center justify-center">
        <div className="flex items-center justify-between w-1/3">
        <MdOutlineReplay  className="text-blue-900"/>
  
      
        <IoChevronBackCircle  className="text-blue-900" />
        <h1 className="text-xl px-6">  01/10 </h1>
       
        <IoChevronForwardCircleSharp className="text-blue-900" />
      
        <MdFullscreen className="text-blue-900" />

        </div>
        </div>
      </div>
    </div>
  );
};

export default StudyScreen;
