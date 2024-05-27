import React, { useState } from "react";

const Navbar = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white text-lg font-bold">{heading}</div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {children}
            <a
              href="#"
              className="text-gray-300 hover:bg-white hover:text-red-500  px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-white hover:text-red-500  px-3 py-2 rounded-md text-sm font-medium"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-white hover:text-red-500  px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {children}
            <a
              href="#"
              className="block text-gray-300 hover:bg-white hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Movies
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
