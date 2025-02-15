import React, { useEffect, useState } from 'react'
import Style from "./Navbar.module.css";
import logo from "../../assets/images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CounterContext } from '../../Context/CounterContext';


export default function Navbar() {

    let x = useContext(CounterContext);
    console.log(x);


    return (
        <>
            <nav className='bg-gray-100 text-center py-2 static top-0 left-0 right-0'>
                <div className="container mx-auto py-2 justify-between flex flex-col lg:flex-row">
                    <div className='flex flex-col lg:flex-row '>
                        <img width={110} src={logo} alt="fresh cart" />
                        <ul className='flex flex-col lg:flex-row'>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='' >Home</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='cart' >Cart</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='products' >Products</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='brands' >Brands</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='categories' >Categories</NavLink></li>
                        </ul>
                    </div>


                    <div>
                        <ul className='flex flex-col lg:flex-row items-center'>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='login' >Login</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='register' >Register</NavLink></li>
                            <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light'  >Logout</NavLink></li>
                            <li className='flex  items-center'>
                                <i className='fab mx-2 fa-facebook'></i>
                                <i className='fab mx-2 fa-twitter'></i>
                                <i className='fab mx-2 fa-instagram'></i>
                                <i className='fab mx-2 fa-youtube'></i>
                                <i className='fab mx-2 fa-tiktok'></i>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}
