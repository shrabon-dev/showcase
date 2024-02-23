import React from 'react'
import Header from '../component/header'
import Menubar from '../component/menubar'
import HeroSection from '../component/hero'
import Footer from '../component/footer'
import Contact from '../component/contact'
import Brand from '../component/brand'
import Services from '../component/service'
import Mobile from '../component/mobile'
import Product from '../component/product'
import Brand2 from '../component/brand2'
import ProductCard from '../component/card'
import BigProduct from '../component/bigProductShow'
import Video from '../component/video'
import Preloader from '../component/preloader'

export default function Home() {
  return (
    <>
      <Preloader/>
      <Header/>
      <Menubar/>
      <HeroSection/>
      <Brand/>
      <Services/>
      <Video/>
      <Mobile/>
      <Contact bg='white'/>
      <BigProduct/>
      <Product/>
      <Brand2/>
      <ProductCard/>
      <Contact/>
      <Footer/>
    </>
  )
}
