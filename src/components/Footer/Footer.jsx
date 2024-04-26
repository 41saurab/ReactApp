import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer' : 'otherPage_footer'}>
        <div className="container">
          <h4>LUXURY RENTAL</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptas quisquam unde dolorum rerum placeat.</p>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/termsandconditons'}>Terms And Conditions</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Contact with us</h4>
          <p>+000 000 000 0</p>
          <p>41saurab@gmail.com</p>
          <p>All Rights Reserved By Saurab</p>
        </div>
      </footer>
    </>
  )
}

export default Footer