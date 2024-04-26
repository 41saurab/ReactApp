import React from 'react'
import HeroSection from '../../subComponents/HeroSection'
import TopVillas from '../../subComponents/TopVillas'
import Regions from '../../subComponents/Regions'
import OurSpecialities from '../../subComponents/OurSpecialities'
import Host from '../../subComponents/Host'
import About from '../../subComponents/About'
import Contact from '../../subComponents/Contact'

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopVillas />
      <Regions />
      <OurSpecialities />
      <Host />
      <About />
      <Contact/>
    </>
  )
}

export default Home