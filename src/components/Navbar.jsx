import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, handleLogout } = useContext(AuthContext)
    return (
        <div>
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="w-11/12 py-6 mx-auto">
                    <div className="lg:flex justify-between">
                        <div className="flex items-center justify-between border border-blue-500">
                            {/* <a href="#">
                                <img
                                    className="w-auto h-6 sm:h-7"
                                    src="https://merakiui.com/images/full-logo.svg"
                                    alt="Logo"
                                />
                            </a> */}
                            <h1 className='text-lg font-bold'>Visa Navigator</h1>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div
                            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen
                                ? 'translate-x-0 opacity-100'
                                : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
                                }`}
                        >
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-2 xl:mx-4 xl:text-lg border border-red-300">
                                <NavLink to={'/'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Home
                                </NavLink>
                                <NavLink to={'/all-visas'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    All visas
                                </NavLink>
                                <NavLink to={'/add-visa'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Add Visa
                                </NavLink>
                                <NavLink to={'/my-added-visas'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    My added visas
                                </NavLink>
                                <NavLink to={'/my-visa-application'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    My Visa applications
                                </NavLink>

                            </div>

                            <div className="flex items-center mt-4 lg:mt-0 gap-3">
                                {/* <button
                                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                                    aria-label="show notifications"
                                >

                                </button> */}


                                {
                                    user && user?.email ? <div className='flex justify-between items-center gap-2'>
                                        <button
                                            type="button"
                                            className="flex items-center focus:outline-none"
                                            aria-label="toggle profile dropdown"
                                        >
                                            {/* <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                            className="object-cover w-full h-full"
                                            alt="avatar"
                                        />
                                    </div> */}

                                            {/* <a id="not-clickable"></a> */}
                                            <a id="not-clickable">
                                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                                    <img
                                                        // src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                        src={user.photoURL}
                                                        className="object-cover w-full h-full"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </a>
                                            <Tooltip anchorSelect="#not-clickable">
                                                <button>{user.displayName}</button>
                                            </Tooltip>
                                        </button>
                                        {/* <img title={user.displayName} className='w-12 h-12 rounded-full' src={user.photoURL} alt="" /> */}
                                        <button onClick={handleLogout} className='btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg'>Logout</button>
                                    </div> : <div className='flex'>
                                        <Link to={'/auth/register'} className='btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg'>Register</Link>
                                        <Link to={'/auth/login'} className='btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg'>Login</Link>
                                    </div>
                                }
                                {/* <Link to={'/auth/login'} className='btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg'>Login</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
