import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
        <div className='border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600 ml-4'>P. Sisodia</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#about">About</a></li>
                <li className='p-5'><a href="#work">Work</a></li>
                <li className='p-5'><a href="#contact">Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
                : 'fixed left-[-100%]'}>

                <h1 className=' ml-8 my-6 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-300 '>P. Sisodia</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href="#about">About</a></li>
                    <li className='p-2'><a href="#work">Work</a></li>
                    <li className='p-2'><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div> 
  )
}

export default Header
