import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import Button from '../button'
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";


export default function Menubar() {
    let [closeMenu,setCloseMenu] = useState(false)
  return (
    <>
     <nav className='py-2 md:py-8 absolute top-10 w-full z-[99999]'>
        <div className="container px-6 md:px-0 ">
            <div className="md:flex justify-between items-center">
                <div className="inline-block md:w-1/6">
                    <div className="logo">
                        <a href="#">
                            <picture>
                                <img className='w-36 md:w-52' src={logo} alt={logo} />
                            </picture>
                        </a>
                    </div>
                </div>
                <div className="mobile_menu inline-block md:hidden float-right cursor-pointer">
                    <span>
                        <RiMenu4Line onClick={()=>setCloseMenu(!closeMenu)} className='inline text-2xl text-white'/>
                    </span>
                </div>
                 
                <div className={`'after:bg-black/50 ${closeMenu ? 'block opacity-1':'hidden opacity-0 '}duration-300 ease-linear md:opacity-100  md:block pt-10 mt-5 md:mt-0 md:pt-0 after:content-[''] after:backdrop-blur-md after:w-[150%] md:after:hidden after:h-screen after:absolute after:top-0 after:-left-10 after:z-[-1] relative md:w-5/6`}>
                    <div className="md:flex justify-end items-center ">
                        
                        <div className="md:w-5/6 md:mt-0 md:pt-0 relative bg-highlight py-10 md:p-0 md:bg-transparent">
                            <div onClick={()=>setCloseMenu(!closeMenu)} className="mobile_menu absolute right-0 cursor-pointer bg-white p-2 top-0 inline-block md:hidden">
                                <span>
                                    <IoCloseOutline className='inline text-highlight text-4xl'/>
                                </span>
                            </div>
                            <div className="menu">
                                <ul className='space-y-6 md:space-y-0 md:flex justify-center'>
                                    <li><a className='menu_a md:menu_active' href="#">Home</a></li>
                                    <li><a className='menu_a' href="#">Solution</a></li>
                                    <li><a className='menu_a' href="#">About US</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/6 text-right pt-10 md:pt-0">
                            <div className="book-btn md:text-right">
                                <Button menu='true' text="Book A Demo"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     </nav>
    </>
  )
}
