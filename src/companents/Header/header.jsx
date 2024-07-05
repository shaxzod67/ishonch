import React, { useContext } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaRegUserCircle } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import ishonchpng from '../../img/Ishonch.png';
import { Natija } from '../Natija/natija';
import { Signup } from '../Kirish/signUp';
import { Login } from '../Kirish/signIn';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../contex/AuthContext';
import Royhat from '../Royhat/Royhat'
const Header = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const token = localStorage.getItem('user');

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' });
                navigate('/signin');
            })
            .catch((error) => {
                console.error('Sign out error:', error);
            });
    };

    return (
        <div>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="navbar">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ishonch</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {!token ? (
                            <div className='sign'>
                                <button className="signup">
                                    <FaUserPlus />
                                    <NavLink className="hover:text-white ml-1" to="/signup">SignUp</NavLink>
                                </button>
                                <button className="signin">
                                    <FaRegUserCircle />
                                    <NavLink className="hover:text-white ml-1" to="/signin">SignIn</NavLink>
                                </button>
                            </div>
                        ) : (
                            < div className='sign'>
                                <button className="signin">
                                    <Link target="_blank" to="/natija">Natija</Link>
                                </button>
                                <button onClick={handleSignOut} className="signup">
                                    <BiExit />
                                    <span className="ml-1">Chiqish</span>
                                </button>
                            </div>
                        )}
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
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><Link target='_blank' to="/royhat">Ro'yhatdan o'tish</Link></button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Header;
