import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-16 flex items-center justify-between p-1 bg-black'>
      <div className='w-1/2 flex justify-between h-full'>
          <h1 className='text-white flex items-center'>E-Cart</h1>
          <ul className='w-3/5 text-sm h-full text-white flex items-center justify-between'>
            <li>Home</li>
            <li>Features</li> 
            <li>Pricing</li>
            <li>About</li>
            {/* <li>Dropdown</li> */}
            <select className='bg-black w-24 outline-none cursor-pointer'  name="Dropdown" id="">
                <option value="opt1">opt1</option>
                <option value="opt2">opt2</option>
                <option value="opt3">opt3</option>
            </select>
          </ul>
      </div>
      <div className='w-1/3 flex h-2/3 justify-center bg-inherit '>
        <input className='p-2 outline-none w-1/2 bg-black border text-white' type="search" name="nav-search" placeholder='Search' id="" />
        <button className='w-1/5 h-full cursor-pointer bg-white flex justify-center items-center rounded' type="submit">Search</button>
      </div>
    </nav>
  )
}

export default Navbar
