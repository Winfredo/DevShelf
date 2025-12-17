"use client"
import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
       <aside className="w-50 bg-[#1E60B2] text-white min-h-screen p-4">
          <h2 className="text-xl font-bold mb-6">Expense Tracker</h2>
          
          <nav className="space-y-4">
            <Link 
              href="/dashboard" 
              className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              📊 Dashboard
            </Link>
            <Link 
              href="/transactions" 
              className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              💰 Transactions
            </Link>
            <Link 
              href="/statistics" 
              className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              📈 Statistics
            </Link>
            <Link 
              href="/settings" 
              className="flex items-center p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              ⚙️ Settings
            </Link>
          </nav>
        </aside>
  )
}

export default Sidebar
