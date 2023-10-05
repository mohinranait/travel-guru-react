import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <>
            <header className='py-3 absolute z-50 top-0 left-0 w-full bg-transparent '>
                <div className="container mx-auto px-5">
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src={logo} className='w-[120px]' alt="" />
                        </div>
                        <div className='flex items-center py-2 px-3 border border-white  bg-white bg-opacity-20 rounded-lg'>
                            <span>
                                <IoSearchOutline className='text-2xl text-white'></IoSearchOutline>
                            </span>
                            <input type="text" className='bg-transparent pl-3 w-[450px] outline-none' placeholder='Search your donation...'/>
                        </div>
                        <ul className='flex items-center gap-8'>
                            <li><NavLink to="/" className={`text-white font-semibold`}>Home</NavLink></li>
                            <li><NavLink className={`text-white font-semibold`}>Donation </NavLink></li>
                            <li><NavLink className={`text-white font-semibold`}>Blogs</NavLink></li>
                            <li><NavLink to={'/login'} className={`px-6 py-2 rounded-md bg-[#F9A51A] text-black font-semibold`}>Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header> 
        </>
    );
};

export default Header;