import React from 'react';
import HeroImage from '../assets/icon2.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Android Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and desgining android application with java.
            Currently, I am learning full stack java. I have a developer account on google play store,
            with two android application on it.
          </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                     flex item-center rounded-md bg-gradient-to-r
                     from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio<span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="My Profile" 
                classNAme="rounded-2xl mx-auto w-2/3 md:w-full h-50 w-50 object-cover" />
            </div>
        </div>
    </div>
    
  )
}

export default Home