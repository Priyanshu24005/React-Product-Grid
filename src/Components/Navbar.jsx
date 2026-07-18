import React, { useContext } from 'react'
import { MyShop } from '../Context/MyWebsite';

const Navbar = () => {
  
    let {setToggle} = useContext(MyShop);

  return (
    <div className='flex justify-between'>
       <header className="bg-white shadow-md sticky top-0 z-10 min-w-full">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          React Product Store
        </h1>
         <div className='flex gap-4'>
            <p className='cursor-pointer' onClick={()=> setToggle(true)}>Home</p>
            <p className='cursor-pointer' onClick={() => setToggle(false)}>Cart</p>
         </div>

         <button className='bg-blue-600 p-2 cursor-pointer text-white rounded'>Login</button>
      </div>
    </header>
    </div>
  )
}

export default Navbar
