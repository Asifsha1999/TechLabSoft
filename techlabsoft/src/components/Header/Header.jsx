// Suggested code may be subject to a license. Learn more: ~LicenseLog:1324173278.

import React from 'react';
import './Header.css';
import logo from "../../assets/techlabsoft.png"

const Header = () => {
  return (
    <nav className="bg-white-800 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">
                <img className="nav-logo" src={logo} alt="" /></a> 
          </div>
          <div className="hidden md:block">
            <div className="ml-10 mt-5 flex items-baseline space-x-4">
              <a href="/" className="text-black-300 hover:bg-black-700 hover:text-pink-500 hover:scale-110 transition ease-in-out duration-300  px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/services" className="text-black-300 hover:bg-black-700 hover:text-pink-500 hover:scale-110 transition ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/about" className="text-black-300 hover:bg-black-700 hover:text-pink-500 hover:scale-110 transition ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/contact" className="text-white-300 bg-pink-500 hover:bg-black-700 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          {/* Add other elements like login button here if needed */}
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      {/* ... (You can add a mobile menu here if you want) ... */}

    </nav>
  );
};

export default Header;
