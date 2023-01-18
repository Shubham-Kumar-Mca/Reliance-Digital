import React, { useEffect, useState } from 'react';
import "../Styles/Header.css"
import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import Navbar from './Navbar';

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['back-color-lightRed'];
  if (scrolled) {
    x.push('header');
  }                 

  return (
    <div>
      <div className='back-color-lightRed'>
        <div className='p-x-30 d-flex align-item-center justify-content-between p-t-5 all__'>
          <div className='d-flex align-item-center justify-content-between cursor-pointer'>
            <MdLocationOn className='font-size' />
            <p className='border-right'>Find a store</p>
          </div>
          <div>
            <p className='border-right cursor-pointer'>Buying guides</p>
          </div>
          <div>
            <p className='cursor-pointer'>Contact us</p>
          </div>
        </div>

        <div className={x.join(" ")}>
          <div className='m-x-30 d-flex align-item-center justify-content-between pl-15'>
            <div className='logo'>
              <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="RelianceDigital Logo" title='RelianceDigital Logo' />
            </div>
            <div className='InputDiv d-flex align-item-center'>
              <input type="text" className='searchPanel__searchBox' placeholder='Find your favorite products' />
              <FaSearch className='searchPanel__search cursor-pointer' />
            </div>
            <div className='d-flex align-item-center justify-content-between last-div'>
              <div>
                <p className='border-right cursor-pointer'>Select your PIN Code</p>
              </div>
              <div className='d-flex align-item-center justify-content-between border-18 cursor-pointer'>
                <FaShoppingCart className='font-siz' />
                <p className='border-right'>Cart</p>
              </div>
              <div className='d-flex align-item-center justify-content-between border-20 cursor-pointer'>
                <FaUserAlt className='font-siz' />
                <p>Login</p>
              </div>
            </div>
          </div>

          <div className='back-color-blue'>
            <Navbar />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Header