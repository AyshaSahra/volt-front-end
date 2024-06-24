import React from 'react'
import assets from '../constants/assets';

const VoltHome = () => {
  return (
    <>
    <div className=' h-screen w-full home-background '>
        <div className='h-full w-full radial-background grid grid-cols-3'>
          <div className='ml-[130px] items-start justify-center flex flex-col'>
          <div className=' flex flex-row '>
            <img src={assets.volt} className="h-[54px] w-[54px] "/>
            <p className="font-Cyberway text-[#35CDF8] text-[45px]">VOLT</p>
          </div>
          <div className=' pt-[40px]  font-CpMonoLight text-[13px] text-[#A9A9A9] flex flex-col items-start gap-1'>
            <p>
              The DeFi layer needed on Aptos.
            </p>
            <p>
            Everything Defi at one place.
            </p>
          </div>
          <div className=' pt-5'>
            <p className=' font-CpMonoBold min-[1440px]:text-[58px] text-[48px] flex flex-col tracking-tighter min-[1440px]:tracking-normal leading-[45px] pt-2 text-white'>
              REFURBISHING <br/>THE REALM OF <br/> EXCHANGES
            </p>
          </div>
          </div>

          <div>
            <div className='w-full flex justify-center'>
            <img src={assets.volt_3d} className='w-[295px]  min-[1440px]:mt-[230px] mt-[190px]'/>
            </div>
            <div className='w-full flex justify-center mt-28 '>
              <div className='justify-center flex flex-row items-center gap-2 cursor-pointer'>
              <img src={assets.scroll_l} className='w-[24px] h-[24px]'/>
              <p className='text-[#656565] font-CpMono'>
              Scroll down
              </p>
              <img src={assets.scroll_r} className='w-[24px] h-[24px]'/>
              </div>
            </div>
          </div>

          <div >
          <div className='cut-button h-[52px] w-[332px] text-white bg-[#8EE3FB] flex justify-center items-center
          cursor-pointer mt-[472px] min-[1440px]:mt-[499px]'>
            <p className='cut-button h-[48px] w-[328px] bg-[#00B4E4] flex justify-center items-center font-CpMono'>
              EXPLORE</p>
          </div>
          <div className='styled-div w-[323px] h-[33px] flex justify-center items-center mt-5 ml-1'>
            <div className='bg-[#1A1A1A] w-[318px] h-[28px] flex justify-center items-center'>
            <p className='text-[#656565] font-CpMono text-sm'>Learn more</p>
            </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default VoltHome;