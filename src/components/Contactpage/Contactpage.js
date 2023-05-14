import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a front-end developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+923322400879");
          }}
        >Say Hello</button>
       
        {/* <div className="card">
  <h2>Contact Us</h2>
  <div className="row">
    <div className="col">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Surname</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Email</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Message</label>
        <textarea defaultValue={""} />
      </div>
    </div>
    <div className="col">
      <input type="submit" defaultValue="Submit" />
    </div>
  </div>
</div> */}

        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>Adil Memon</span></p>
      </Container>
    </div>
  )
}

export default Contactpage