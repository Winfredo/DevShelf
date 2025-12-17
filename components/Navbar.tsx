"use client"
import React from 'react'

const Navbar = () => {
  return (
      <nav className="w-full h-13 bg-[#2562B2] shadow-md z-10">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-blue-200">
              🔔
            </button>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
              JS
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
