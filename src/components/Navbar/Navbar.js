import React from 'react';
import assets from '../constants/assets';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav className='w-full bg-[#0C0808] h-[62px] border-b-2 border-solid px-8 py-3 border-[#333333]'>
      <ul className=' h-full flex justify-between items-center '>
        <ul className='flex align-center items-center gap-8'>
          <img className="h-8 w-8" src={assets.volt}/>
          <ul className=' font-CpMono text-[#656565]'>
            FAQ
          </ul>
          <ul className=' font-CpMono text-[#656565]'>
            Contact
          </ul>
        </ul>
        <ul className='flex align-center items-center gap-4'>
          <ul className='flex align-center items-center gap-4'>
            <img className=" h-[18px] w-[18px]" src={assets.xlogo}/>
            <img className="h-[18px] w-[18px]" src={assets.instagram}/>
        </ul>
        <ul>
          <div className='cut-button h-[42px] w-[156px] mix-blend-hard-light text-white bg-white flex justify-center items-center 
          cursor-pointer'>
            <p className='cut-button h-[40px] w-[154px] bg-[#0C0808] flex justify-center items-center font-CpMono'>LAUNCH APP</p>
          </div>
        </ul>
        </ul>
      </ul>
    </nav>
  )
}

export default NavBar