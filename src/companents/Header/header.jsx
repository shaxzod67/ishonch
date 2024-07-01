import React from 'react'
import ishonchpng from '../../img/Ishonch.png'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Natija } from '../Natija/natija'
import { Signup } from '../Kirish/signUp'
import { Login } from '../Kirish/signIn'
import { FaUserPlus } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
    return (
        <div>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div  className='navbar'>
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ishonch</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <button className='signup'> <FaUserPlus />
                            <NavLink className="mr-5 hover:text-white" to='/signup'>SignUp</NavLink>
                        </button>
                        <button className='signin'>
                            <FaRegUserCircle />
                            <NavLink className="mr-5 hover:text-white" to='/signin'>SignIn</NavLink>
                        </button>
                    <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0 text-white"><Link to='/natija'>Natija</Link>
                        <svg fill="none" stroke="currentColor" sstrokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </nav>
                </div>
            </header>
            <section className="text-gray-400 bg-gray-900 body-font h-[90vh]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                        <img className="object-cover object-center rounded w-[100%] h-[100%]" alt="hero" src={ishonchpng} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Ishonch o'quv
                            <br className="hidden lg:inline-block" />Markazi
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Ro'yhatdan o'tish</button>
                        </div>
                    </div>
                </div>
            </section>
            {
                <Routes>
                    <Route element={<Natija />} path='/natija' />
                    <Route element={<Signup />} path='/signup' />
                    <Route element={<Login />} path='/signin' />
                </Routes>
            }
        </div>
    )

}

