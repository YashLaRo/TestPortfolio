import React from 'react';
import './style.css'; // Import your CSS file here
import { useForm, ValidationError } from '@formspree/react'
import { Button } from 'react-bootstrap';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xdoqlllb")
  if (state.succeeded) {
    return <p style={{ color: 'yellow' }}>Thanks for writing!</p>
  }
  return (
    <div className='contactform' id="contactus">
      <div className="container">
      <p style={{color:'white'}}> Contact ME</p>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Mathewada,Kudal</div>
              <div className="text-two">Sindhudurg</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 9145081841</div>
              <div className="text-two">+91 8888686593</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">yashnarvek@gmail.com</div>

            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
            <form onSubmit={handleSubmit} method='Post'>
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea name="text" class="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>

              </div>
              <div className="button">
                <Button type="Submit" disabled={state.submitting} value="Send Now" ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

