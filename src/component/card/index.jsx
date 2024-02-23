import React, { useState } from 'react'
import Slider from "react-slick";
import img1 from '../../assets/images/card/img1.webp'
import img2 from '../../assets/images/card/img2.webp'
import img3 from '../../assets/images/card/img3.webp'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import VideoPlayer from "react-background-video-player";
import app from "../../assets/video/dev/App.webm";
import web from "../../assets/video/dev/Website.webm";
import nfc from "../../assets/video/dev/NFC.webm";

export default function ProductCard() {
  const [isHovered, setIsHovered] = useState({
    status:false,
    videoType:'',
  });
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                centerMode: false,
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            }
          ]
      };
      console.log(isHovered)
  return (
    <>
    <section>
        <div className="product">
            <div className="flex justify-between items-stretch">
                    <div className="box h-[900px] w-1/3 relative group" onMouseEnter={() => setIsHovered({ status: true, videoType: 'app' })} onMouseLeave={() => setIsHovered({ status: false, videoType: '' })}>
                        {/* <img className='h-full w-full block absolute' src={img1} alt={img1} /> */}
                        <VideoPlayer 
                    className="video"
                    src={app}
                    autoPlay={true}
                    muted={true}
                    />
                        <p className="badge font-helvetica absolute duration-700 group-hover:bg-highlight overflow-hidden top-1/2 left-1/2 -translate-x-1/2 font-medium text-4xl text-white backdrop-blur-sm rounded-full border border-[#F9F9F9] inline-block px-14 py-6 -translate-y-1/2">
                            App  <a href="#"><FaArrowUpLong className='inline-block absolute group-hover:relative -right-full group-hover:right-1 text-5xl rotate-45 text-white'/></a>
                      
                        </p>
                        <div className="btm absolute -bottom-4 bg-black/5 backdrop-blur-md px-6 py-8 flex justify-between">
                            <p className='font-helvetica font-medium text-2xl text-white leading-[32px]'>showcaseX is an on garment NFC code, attached to an activation.  </p>
                            <a href="#"><FaArrowUpLong className='inline-block text-5xl rotate-45 text-white'/></a>
                        </div>
                    </div>
            
                <div className="box h-[900px] w-1/3 relative group" onMouseEnter={() => setIsHovered({ status: true, videoType: 'nfc' })} onMouseLeave={() => setIsHovered({ status: false, videoType: '' })}>
                <VideoPlayer
                    className="video"
                    src={nfc}
                    autoPlay={true}
                    muted={true}
                    />

                    <p className="badge font-helvetica absolute duration-700 group-hover:bg-highlight overflow-hidden top-1/2 left-1/2 -translate-x-1/2 font-medium text-4xl text-white backdrop-blur-sm rounded-full border border-[#F9F9F9] inline-block px-14 py-6 -translate-y-1/2">
                         NFC  <a href="#"><FaArrowUpLong className='inline-block absolute group-hover:relative -right-full group-hover:right-1 text-5xl rotate-45 text-white'/></a>
                    </p> 
                    <div className="btm absolute -bottom-4 bg-black/5 backdrop-blur-md px-6 py-8 flex justify-between">
                        <p className='font-helvetica font-medium text-2xl text-white leading-[32px]'>showcaseX is an on garment NFC code, attached to an activation.  </p>
                        <a href="#"><FaArrowUpLong className='inline-block  text-5xl rotate-45 text-white'/></a>
                    </div>
                </div>
                <div className="box h-[900px] w-1/3 relative group" onMouseEnter={() => setIsHovered({ status: true, videoType: 'web' })} onMouseLeave={() => setIsHovered({ status: false, videoType: '' })}>
                  <VideoPlayer
                    className="video"
                    src={web}
                    autoPlay={true}
                    muted={true}
                    />
                    <p className="badge font-helvetica absolute duration-700 group-hover:bg-highlight overflow-hidden top-1/2 left-1/2 -translate-x-1/2 font-medium text-4xl text-white backdrop-blur-sm rounded-full border border-[#F9F9F9] inline-block px-14 py-6 -translate-y-1/2">
                    Website  <a href="#"><FaArrowUpLong className='inline-block text-5xl absolute group-hover:relative -right-full group-hover:right-1 rotate-45 text-white'/></a>
                    </p>
                    <div className="btm absolute -bottom-4 bg-black/5 backdrop-blur-md px-6 py-8 flex justify-between">
                        <p className='font-helvetica font-medium text-2xl text-white leading-[32px]'>showcaseX is an on garment NFC code, attached to an activation.  </p>
                         <a href="#"><FaArrowUpLong className='inline-block   text-5xl rotate-45 text-white'/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
