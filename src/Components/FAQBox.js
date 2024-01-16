import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQBox = ({text}) => {
  return (
  
    <div className='py-2'>
    <div className='border border-black  w-2/5 rounded-lg px-4 flex justify-between py-2 '>
        <h1 className='text-sm py-2'>{text}</h1>
        <RiArrowDropDownLine />
    </div>
    </div>

  )
}

export default FAQBox