import React from 'react'
import assets from '../constants/assets'

const LaunchPage = () => {
  return (
    <>
    <div className='h-screen w-full background-l'>
        <div className='h-full w-full radial-background grid grid-cols-3 pt-20'>
            <div className='flex flex-col justify-center items-end  w-full'>
                <p className='font-CpMonoBold text-white pl-16 text-[40px] min-[1440px]:text-[50px]'>
                    <span className='text-[#35CDF8] text-[45px]'>2X </span>SPEED FAST EXCHANGES
                </p> 
                <p className='font-CpMono text-sm text-[#656565] pt-10 mr-4'>
                    BROWSE TOKENS
                </p>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <img src={assets.volt_3d} className='w-[292px] mr-3'/>
            </div>
            <div className='flex flex-col justify-center items-start w-full mt-4'>
                <p className='pr-16 text-[#A9A9A9] font-CpMonoLight text-xs tracking-wide text-left min-[1440px]:text-sm'>
                    Volt is a comprehensive DeFi platform 
                    offering seamless swapping, maximum yield
                    earning, precision DCA (Dollar-Cost Averaging), 
                    and customizable limit orders
                </p>
                <p className='font-CpMono text-sm text-[#35CDF8] pt-20 ml-4'>
                    LAUNCH APP
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default LaunchPage