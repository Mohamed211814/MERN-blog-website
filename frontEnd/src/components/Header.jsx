import React from 'react'
import { images } from '../constants'

function Header() {
  return (
    <section>
        <header className='flex justify-between mx-8 items-center'>
            {/** LOGO */}
            <div>
                <img className='w-36 cursor-pointer' src={images.logo} alt="" />
            </div>

            {/** THE LIST */}
            <div>
                <ul className='flex justify-between gap-x-10 mr-8 items-center font-semibold'>
                    <li>
                      <a className='hover:text-cyan-500 transition-all duration-300' href="">Home</a>
                    </li>
                    <li>
                      <a className='hover:text-cyan-500 transition-all duration-300' href="">Articles</a>
                    </li> 
                    <li>
                      <a className='hover:text-cyan-500 transition-all duration-300' href="">Pages</a>
                    </li> 
                    <li>
                      <a className='hover:text-cyan-500 transition-all duration-300' href="">Pricing</a>
                    </li> 
                    <li>
                      <a className='hover:text-cyan-500 transition-all duration-300' href="">Faq</a>
                    </li>
                    <button className='rounded-xl outline outline-cyan-500 px-6 py-2 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300'>Sign In</button>
                </ul>
            </div>
        </header>
    </section>
  )
}

export default Header