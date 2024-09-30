import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      
      <div className='col-span-1 my-auto mx-auto'>
        <div className='w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt="heroimage" />
        </div>
      </div>

      <div className='col-span-2 px-5 my-auto'>
        
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-300'>
            I'm a
            </span> <br />
            <TypeAnimation 
                sequence={[
                    "Frontend Dev",
                    1000,
                    "UI/UX Designer",
                    1000,
                    "Freelancer",
                    1000,
                ]}
                wrapper ="span"
                speed={50}
                repeat={Infinity}
            />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'> 
            My name is Prabhanshu Sisodia and I have 1+ years of experience in Front-End development. 
        </p>

        <div className='my-11'>
            <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 
            bg-gradient-to-br from-orange-500 to bg-pink-500 text-white'>
                Download CV
            </a>
            <a href="#contact" className='px-6 py-3 w-full rounded-xl 
            border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                Contact
            </a>
        </div>
      </div>


    </div>
  )
}

export default Hero
