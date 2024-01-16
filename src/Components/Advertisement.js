import React from 'react'
import logo2 from '../pics/logo2.jpg';
import { IoMdAddCircle } from "react-icons/io";

const Advertisement = () => {
  return (
    <div className='flex justify-between'>
      <img alt='logo2' src={logo2} className='h-20 px-7 '></img>
      <div className='flex px-7 py-1'>
      <IoMdAddCircle className='text-blue-900 '/>
      <h1 className='text-xl text-blue-900 font-bold px-2 py-1'>Create Flashcard</h1>
      </div>
      
    </div>
    
  )
}

export default Advertisement