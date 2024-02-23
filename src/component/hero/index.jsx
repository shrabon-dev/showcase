import React, { useRef } from 'react'
import bg from '../../assets/images/bg.png'
import textLogo from '../../assets/images/textLogo.png'
import Button from '../button'
import { FaCheckCircle } from "react-icons/fa";
import Slider from 'react-slick';
import VideoPlayer from "react-background-video-player";
import video1 from "../../assets/video/hero/1.webm";
import video2 from "../../assets/video/hero/2.webm";
import video3 from "../../assets/video/hero/3.webm";

export default function HeroSection() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:6000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        draggable: true,
       
      };
      
  return (
    <>
    <section className='heroSection bg-black pb-32 relative overflow-hidden'>
        <Slider {...settings} >
            <div className="w-[100dvh]  h-screen relative">
                <VideoPlayer
                className="video"
                src={video1}
                autoPlay={true}
                muted={true}
                />
            </div>
            <div className="w-[100dvh]  h-screen relative">
                <VideoPlayer
                className="video"
                src={video2}
                autoPlay={true}
                muted={true}
                />
            </div>
            <div className="w-[100dvh]  h-screen relative">
                <VideoPlayer
                className="video"
                src={video3}
                autoPlay={true}
                muted={true}
                />
            </div>
        </Slider> 
        <div className="content  absolute top-24 md:-top-10 w-full">
        <div className="container ">
            <div className="md:flex justify-between">
                <div className=" md:w-3/5 lg:w-2/5">
                    <div className="box inline-block bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] p-6 rounded-2xl sm:p-12 backdrop-blur-sm border border-[#676767] mt-32 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%]">
                        <h4 className='font-helvetica font-medium text-5xl text-white leading-[56px]'>The <span className='font-artusi italic font-thin'> Immersive</span> Product Experience <span className='font-artusi italic font-thin'> Solution</span> </h4>
                        <div className='py-7'>
                            <picture className='inline-block'><img src={textLogo} alt={textLogo} /></picture>
                            <p className='text-2xl md:text-lg lg:text-2xl font-normal sm:pl-4 font-helvetica inline-block capitalize text-white'>your fashion brand today</p>
                        </div>
                        <div className="btn flex gap-4">
                            <Button bg="transparent" text="Try The App"/>
                            <Button text="Book A Call"/>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 lg:w-1/5 text-right flex md:block">
                    <div className="box bg-gradient-to-t to-[#6767673b] via-[#74747433] from-[#ffffff22] p-6 rounded-2xl backdrop-blur-sm border border-[#67676796]   md:mt-[120%] lg:mt-[175%] text-left">
                        <h4 className='font-helvetica font-medium text-2xl text-white flex justify-between pb-2'> Mobile app  <span><FaCheckCircle className='inline-block'/></span></h4>
                        <p className='font-helvetica text-sm font-normal text-[#A6A2A2] '>Hosted directly on our flagship app</p>
                    </div>
                    <div className="box  bg-gradient-to-t to-[#6767672a] via-[#74747433] from-[#ffffff22] p-6 rounded-2xl backdrop-blur-sm border border-[#67676796] md:mt-10 text-left">
                        <h4 className='font-helvetica font-medium text-2xl text-white flex justify-between pb-2'> Web Integration  <span><FaCheckCircle className='inline-block'/></span></h4>
                        <p className='font-helvetica text-sm font-normal text-[#A6A2A2] '>Directly integrated into a brands e-commerce platform</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
