import React from 'react';
import Background from './Background.png';
function Navbar() {
  return (
    <div className="bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }}
  >
    <nav className="s">
      <div className="container mx-auto p-4 flex justify-between pl-40">
        <a href="/" className="text-3xl font-bold text-white">
          GetPayin
        </a>
        <div className="hidden md:flex items-center space-x-4 pr-60 ">
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/" className="text-white hover:text-gray-200">
            Employer
          </a>
          <div className="relative">
            <button className="text-white hover:text-gray-200">
              Candidate
            </button>
        
          </div>
          <div className="relative">
            <button className="text-white hover:text-gray-200">
              Pages
            </button>
           
          </div>
          <a href="/" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
        <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
              Register
            </button>
          </div>
        <div className="md:hidden">
          <button className="flex items-center px-3 py-2 rounded">
          
          </button>
        </div>
      </div>
    </nav>
    <div className="container mx-auto mt-24 text-center">
      <h1 className="text-5xl font-bold text-white">
        Search Between More <br />
        Then  <span className="bg-green-200 bg-opacity-10 rounded px-4 py-0 text-green-500">
            50,000
          </span> Open Jobs.
      </h1>
      <p className="text-lg text-gray-300 mt-4">
        Trending Jobs Keywords: <span className="bg-green-200 bg-opacity-10 rounded px-2 py-1 text-green-500">
            Web Designer
          </span>, 
          <span className="bg-green-200 bg-opacity-10 rounded px-2 py-1 text-green-500">
            Web Developer
          </span>, 
          <span className="bg-green-200 bg-opacity-10 rounded px-2 py-1 text-green-500">
            iOS Developer
          </span>, 
          <span className="bg-green-200 bg-opacity-10 rounded px-2 py-1 text-green-500">
            Android Developer
          </span>
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-9">
        <div className="relative w-full md:w-1/3 mr-2">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg shadow-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-green-500"
            placeholder="Search Keywords..."
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <div className="relative w-full md:w-1/3 mr-4">
          <select
            className="w-full px-4 py-3 rounded-lg shadow-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-green-500"
          >
            <option value="location">Location </option>
           
          </select>
          <span className="absolute  top-1/2 transform -translate-y-1/2 text-gray-400">
           
          </span>
        </div>
        <div className="relative w-full md:w-1/3">
          <select
            className="w-full px-4 py-3  rounded-lg shadow-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-green-500"
          >
            <option value="category">Category </option>
          
          </select>
          <span className="absolute  top-1/2 transform -translate-y-1/2 ">
            
          </span>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 md:mt-0 ml-9 md:ml-">
          SEARCH
        </button>
      </div>
    </div>
    
  </div>
  
  );
  


}

export default Navbar;