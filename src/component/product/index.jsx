import React from 'react'
import img1 from '../../assets/images/product/img1.webp'
import p1 from '../../assets/images/product/p1.webp'
import circle from '../../assets/images/product/circle.png'

export default function Product() {
  return (
    <>
     <section className='bg-black py-16'>
        <div className="container px-6 md:px-0">
            <div className="flex flex-wrap-reverse flex-row-reverse lg:flex-row justify-between items-center">
                <div className="lg:w-1/2">
                    <div className="txt-box">
                        <h4 className='font-helvetica font-medium text-[42px] md:text-[62px] lg:text-[62px] xl:text-[80px] text-white md:leading-[80px]'>
                        The <span className='font-artusi font-thin italic'>problem</span> of 2D <span className='font-artusi font-thin italic '>product</span> displays.
                        </h4>
                        <p className='font-helvetica font-medium text-lg xl:text-2xl md:mt-10 text-[#E0DBCE] leading-[39px] pl-14 pr-14 relative after:w-8 after:h-6 after:absolute after:content after:rounded-br-[100%] after:bg-[#E0DBCE] after:left-0 after:top-5'>
                        The next generation of fashion consumer demands more social, immersive and experiential touchpoints with their favorite fashion brands and products.
                        </p>
                        <h6 className='font-helvetica font-medium text-2xl xl:text-4xl mt-5 md:mt-10 text-[#E0DBCE] leading-[52px] pl-14 pr-20 relative after:w-10 after:h-16 after:absolute after:content after:rounded-br-[100%] after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  after:to-highlight after:left-0 after:top-3 after:to-[112%] after:from-[-26%] after:from-[#000000] '>
                        Yet brands continue to present e-commerce <span className='font-artusi italic'>products as</span> static 2D images:
                        </h6>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="img-box">
                        <picture>
                            <img className='ml-auto block w-auto' src={img1} alt={img1} />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="lg:flex mt-20">
                <div className="lg:w-1/2">
                <div className="img-box ">
                        <div className="slider-box">
                            <picture>
                                <img className='m-auto block w-full md:max-w-xl ' src={p1} alt={p1} />
                            </picture>
                        </div>
                        <div className="circle">
                            <picture>
                                <img className='m-auto block w-full md:max-w-lg' src={circle} alt={circle} />
                            </picture>
                        </div>

                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="details-box">
                        <div className="slider-box">
                            <div className="details">
                            <h4 className='font-helvetica text-right font-medium text-[32px] md:text-[62px] xl:text-[80px] text-white leading-[80px]'> This is the   
                            <span className='font-artusi italic'> Immersive</span> Product <span className='font-artusi italic '> Experience</span>   Solution
                            </h4>
                          
                             <div className="features mt-10 bg-[#191919] p-10">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <h6 className='text-[#F7381E] font-helvetica font-medium text-lg lg:text-2xl xl:text-3xl pb-6'>Features</h6>
                                        <ul>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Product display</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>VTO</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Real time colorways / co-creation</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Screen capture and Social  media share</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>On / off avatar</li>
                                        </ul>
                                    </div>
                                    <div className="w-1/3">
                                        <h6 className='text-[#F7381E] font-helvetica font-medium text-lg lg:text-2xl xl:text-3xl pb-6'>Highlights</h6>
                                        <ul>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>4K HDR Augmented</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Reality</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Real time Haptic touch</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>0 Latency</li>
                                          
                                        </ul>
                                    </div>
                                    <div className="w-1/3">
                                        <h6 className='text-[#F7381E] font-helvetica font-medium text-lg lg:text-2xl xl:text-3xl pb-6'>Verticals</h6>
                                        <ul>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Fashion</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Eyewear</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Cosmetics and Fragrance</li>
                                            <li className='font-helvetica text-base xl:text-xl leading-[31px] text-[#878787] font-medium pb-2'>Accessories - Bags / Watches / Jewelry</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
