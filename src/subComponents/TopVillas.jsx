import React from 'react'
import { villas } from '../villas'
import { Link } from 'react-router-dom'
import { IoIosPeople } from 'react-icons/io'
import { FaBath, FaBed } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'
import { RxDot } from 'react-icons/rx'

const TopVillas = () => {
  return (
      <>
          <section id='topVillas'>
                <h1>TOP PICK VILLAS</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea. Deserunt nisi sed vero, quas similique alias quasi quae beatae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos?</p>
              <div className="villasContainer">
                  {
                      villas.slice(0, 3).map((element) => {
                          return (
                              <Link className='card' to={`/villas/${element.id}`} key={element.id} >
                                  <img src={element.image} alt={element.name} />
                                  <div className="location_text badge">
                                      <span>{element.location}</span>
                                      <span><RxDot/></span>
                                      <span>{element.category}</span>
                                  </div>
                                  <div className="title_text">{element.name}</div>
                                  <div className="specifications">
                                      <div className="spec">
                                          <IoIosPeople />
                                          <span>{element.guests}Guests</span>
                                      </div>
                                      <div className="spec">
                                          <FaBed />
                                          <span>{element.bedrooms}Bedrooms</span>
                                      </div>
                                      <div className="spec">
                                          <BiArea />
                                          <span>{element.squareMeter}m<sup>2</sup></span>
                                      </div>
                                      <div className="spec">
                                          <FaBath />
                                          <span>{element.bathrooms}Bathroom</span>
                                      </div>
                                  </div>
                              </Link>
                          )
                      })
                  }
              </div>
          </section>
    </>
  )
}

export default TopVillas