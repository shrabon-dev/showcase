import React, { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating async task completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Change the duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     {loading && 
    <section className='preloader fixed z-[9999999999] top-0 left-0 w-screen h-screen bg-black'>
      <div className="flex justify-center items-center h-screen">
      <svg className="w-[900px] h-64" viewBox="0 0 100 220">
        <text
          x="-340"
          y="150"
          fontFamily="Arial"
          fontSize="142"
          strokeWidth="2"
          stroke="red" // Set the stroke color to red
          className={loading ? 'showcase-text' : 'showcase-text filled'}
        >
          ShowcaseX
        </text>
      </svg>
    </div>
    </section>
    }
    </>
  )
}
