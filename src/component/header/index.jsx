import React from 'react'

export default function Header() {
  return (
    <>
    <header className='bg-white py-1 w-full absolute top-0 z-[99999]'>
        <div className="container">
          <marquee behavior="fast" direction="center">
            <div className="flex justify-around">
                <p className='font-helvetica text-highlight font-medium text-[8px] md:text-lg'>NEW BRANDS FREE TRIAL</p>
                <p className='font-helvetica text-highlight font-medium text-[8px] md:text-lg'>NEW BRANDS FREE TRIAL</p>
                <p className='font-helvetica text-highlight font-medium text-[8px] md:text-lg'>NEW BRANDS FREE TRIAL</p>
            </div>
          </marquee>
        </div>
    </header>
    </>
  )
}
