import React from 'react'
import FAQBox from './FAQBox'

const FAQ = () => {
  return (
    <div className='py-28'>
      <div>
        <h1 className='text-3xl font-bold text-blue-900 px-11'>FAQ</h1>
        <div className='px-11 py-6 '>
        <FAQBox text={" Can education flashcards be used for all age groups?"} />
        <FAQBox text={" How do education flashcards work?"} />
        <FAQBox text={"Can education flashcards be used for test preparation?"} />

      </div>
      </div>
  
    </div>
  )
}

export default FAQ