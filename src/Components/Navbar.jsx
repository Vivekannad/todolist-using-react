import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-600 flex justify-between text-white py-2'>
        <div className="logo mx-6">
            <span className='font-bold text-xl font-mono'>ITask</span>
        </div>
        <ul className="flex gap-9 mx-5">
        <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar