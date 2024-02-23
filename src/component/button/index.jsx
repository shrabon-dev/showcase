import React from 'react'

export default function Button(props) {
  return (
    <>
     <a className={`font-helvetica overflow-hidden relative duration-300 ease-linear font-medium text-base md:text-xs lg:text-sm inline-block xl:text-lg after:absolute after:bg-white after:w-0 hover:after:h-5 hover:before:h-5 hover:after:w-5 after:h-0 after:duration-200 after:ease-linear after:rounded-bl-[100%] after:right-0 after:top-0 before:top-0 before:absolute before:bg-white before:w-0 hover:before:w-5 before:duration-300 before:ease-linear before:h-0 before:rounded-br-[100%] before:left-0 ${props.bg == 'transparent' ? 'bg-transparent border-2 border-white after:-top-1 before:-bottom-1  hover:bg-highlight  hover:border-highlight':'bg-highlight '}  text-white px-4 md:px-2 lg:px-6 xl:px-6 2xl:px-8 py-3`} href="#">{props.text}</a>
    </>
  )
}
