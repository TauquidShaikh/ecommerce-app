import React from 'react'

function NewsletterBox() {

    const OnSumitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl text-gray-800 font-medium'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>Join our newsletter to stay updated with our latest offers and products.</p>
        <form onSubmit={OnSumitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' requiredS />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox
