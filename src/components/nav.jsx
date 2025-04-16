import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div className='fixed top-6 left-0 z-40 w-full max-w-screen flex justify-center items-center'>
    <nav className='w-[90%] px-12 py-2 ring-2 ring-gray-200 shadow-lg rounded-full bg-white flex justify-between items-center flex-col md:flex-row'>
    <div>
      <img src="logo.svg" className='max-w-[120px]'/>
    </div>
    <div className='md:hidden w-full bg-gray-200 h-[1px] rounded-full my-2'></div>
    <div className='gap-6 font-cormorant font-semibold text-gray-700 flex'>
      <a href="/" className='hover:text-black hover:underline transition-all'>Home</a>
      <a href="/#About" className='hover:text-black hover:underline transition-all'>About</a>
      <Link to="/projects" className='hover:text-black hover:underline transition-all'>Works</Link>
      <a href="/#gallery" className='hover:text-black hover:underline transition-all'>Gallery</a>
      <a href="/#contact" className='hover:text-black hover:underline transition-all'>Contact</a>
    </div>
    </nav>
    </div>
  )
}

export default Nav