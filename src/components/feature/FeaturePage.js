import React from 'react'

const FeaturePage = () => {
  return (
    <>
    <div className='h-screen w-full radial-background'>
    <div className='h-full w-full feature-bg grid grid-cols-2'>
      {/*left section*/}
      <div className='flex flex-col justify-center items-end pr-3'>
      <div className='w-[314px] h-[28px] bg-[#1A1A1A] content-center text-center min-[1440px]:mr-3 mr-1'>
        <p className='font-CpMono text-sm text-[#656565] '>
          VOLT FEATURES
        </p>
      </div>

      <div className='flex flex-col items-end tracking-tighter min-[1440px]:leading-[70px] leading-[60px] my-14 min-[1440px]:text-[58px] text-[48px]'>
      <p className='font-CpMonoBold text-white pr-14'>
        VOLT DOES
      </p>
      <p className='font-CpMonoBold text-[#35CDF8] pr-1'>
        SWAP
      </p>
      </div>
      <p className=' w-[49%] text-[#A9A9A9] font-CpMonoLight text-xs tracking-tighter text-left min-[1440px]:text-sm'>
        <span className='text-white font-CpMono'>
          Swap 
        </span> feature ensures that you always
        recieve the optimum value for your swaps , 
        regardless of the tokens involved
      </p>
      </div>

      <div className='text-white flex flex-row items-center'>
      <div className='w-[1px] h-3/4 mt-32 ml-2 bg-[#565757]'/>

      <div>
        
      </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default FeaturePage