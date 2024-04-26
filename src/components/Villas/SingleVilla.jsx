import React from "react";
import { useParams } from 'react-router-dom'
import { villas } from "../../villas";

const SingleVilla = () => {
    const { id } = useParams();
    const numericId = Number(id);
    const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
    return (
        <>
            <section id="singleVilla" className="page">
                <div className="container">
                    <h3>{filteredVilla.name}</h3>
                    <div className="images">
                        <div className="villaImg">
                            <img src={filteredVilla.image} alt={filteredVilla.name} />
                        </div>
                        <div className="otherImgs">
                            <div>
                                <img src={"/landing.jpg"} alt="villa" />
                                <img src={"/people.jpg"} alt="villa" />
                            </div>
                            <div>
                                <img src={"/people2.jpg"} alt="villa" />
                                <img src={"/villa10.jpg"} alt="villa" />
                            </div>
                        </div>
                    </div>
                    <h4>{filteredVilla.location}</h4>
                    <p>
                        {filteredVilla.bathrooms} Bedrooms / {filteredVilla.guests} Guests /{" "}
                        {filteredVilla.bathrooms} Bathrooms / {filteredVilla.squareMeter}{" "}
                        Area
                    </p>
                    <div className="checkin_out">
                        <h5>
                            Check In: <span> 9:00 AM</span>
                        </h5>
                        <h5>
                            Check Out <span> 11:00 PM</span>
                        </h5>
                    </div>
                    <div className="location">
                        <h4>LOCATION</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113965.16364597673!2d87.19370943005305!3d26.795027356960947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef419fc7271c1d%3A0x1d1300367590c002!2sDharan!5e0!3m2!1sen!2snp!4v1713111047153!5m2!1sen!2snp"
                            style={{ width: "100%", height: "400px", border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleVilla;