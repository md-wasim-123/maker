import React from 'react'
import Logo from '../images/logo.svg'
function Navbar() {
  return (
    <div className='flex sm:hidden md:block bg-[#02243F] px-12  py-5'>
    <img className='w-28' src={Logo} alt="" />
    </div>
  )
}

export default Navbar
