"use client"
import { useTheme } from '@/app/context/ThemeContext';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { label } from 'framer-motion/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const Navbar = () => {
    const {theme , toggleTheme} = useTheme();
  const[isMobileMenuOpen ,  setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  const menuItems = [
    {href:"/", label:"Home"},
    {href:"/about", label:"About"},
    {href:"/projects", label:"Projects"},
    {href:"/contact", label:"Contact"},
  ]

    return (
    <nav className='fixed w-full  bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200
    dark:border-gray-700 shadow-sm transition-colors'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div>
            {/* desktop  menu */}
            <div className='flex items-center justify-between h-16'>
                <Link href="/" className='text-xl font-bold text-primary'>
                         {/* Portfolio */}
                         MK
                </Link>

                {/* menus */}
                <div className='hidden md:flex items-center space-x-8'>
                    {
                        menuItems.map((item) => {
                            const isActive = pathname == item.href;
                        return(
                            <Link key={item.href} href={item.href} className={`hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>{item.label}</Link>
                        )}
                    )}

                    <button onClick={toggleTheme}
                    className='p-2 rounded-md hover:bg-gray-100 text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                        {
                            theme === "dark" ? ( <SunIcon className='w-5 h-5'/> ) : ( <MoonIcon className='w-5 h-5'/> )
                        }
                    </button>
                </div>
           

                 {/* mobile menu buttons */}

                <button 
                onClick={toggleMobileMenu}
                className='md:hidden p-2 rounded-lg hover:scale-125 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                    {
                        isMobileMenuOpen ? (<XMarkIcon className='w-5 h-5' />) : (<Bars3Icon className='w-5 h-5' />)
                    }
                </button>
            </div>
         </div>

            {/* phone  */}
            {
                isMobileMenuOpen && (
                    <div className='md:hidden'>
                        <div className='py-4 space-y-4'>
                            {
                                menuItems.map((item, index) =>(
                                    <div key={index} onClick={toggleMobileMenu}>
                                        <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
                                    </div>
                                ))
                            }
                            <div>
                                <button onClick={toggleTheme}
                                className=' flex items-center py-2 hover:text-primary transition-colors '>
                        {
                            theme === "dark" ? ( 
                                <> <SunIcon className='w-5 h-5 mr-2'/> Light Mode</>
                                ) : ( 
                                <> <MoonIcon className='w-5 h-5 mr-2'/> Dark Mode</>
                                )
                        }
                    </button>
                            </div>
                        </div>
                    </div>
                )
            }
    </div>
    </nav>
  )
}

export default Navbar;
