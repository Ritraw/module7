import React from 'react'
import './Footer.css'
import { ReactComponent as Facebook } from './Icons/Facebook.svg';
import { ReactComponent as Instagram } from './Icons/Instagram.svg';
import { ReactComponent as Twitter } from './Icons/Twitter.svg';
import SaveResponse from './SaveResponse';
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-header'>
        <div className='footer-container'>
          <div className='footer-row'>
            <div className='footer-col-md-3'>
              <div className='navbar-brand'>
                <h3>Acciojob</h3>
              </div>
            </div>
            <div className='col-md-3-s'>
              <div className='social-media'>
                <div className='social-icon-size'>
                  <div className='facebook-icon'>
                    <Facebook/>
                  </div>
                </div>
                <div className='social-icon-size'>
                  <div className='instagram-icon'>
                    <Instagram/>
                  </div>
                </div>
                <div className='social-icon-size'>
                  <div className='twitter-icon'>
                    <Twitter/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className='footer-section'>
        <div className='footer-section-container'>
          <div className='footer-section-row'>
            <div className='fs-col-md-2'>
              <h5 style={{'width':'115px', 'height':'24px'}}>Company Info</h5>
                <div className='fs-link'>
                  <p style={{'width':'67px'}}>About Us</p>
                  <p style={{'width':'50px'}}>Carrier</p>
                  <p style={{'width':'97px'}}>We are hiring</p>
                  <p style={{'width':'33px'}}>Blog</p>
                </div>
            </div>
          
            <div className='fs-col-md-2'>
              <h5 style={{'width':'45px', 'height':'24px'}}>Legal</h5>
                <div className='fs-link'>
                  <p style={{'width':'67px'}}>About Us</p>
                  <p style={{'width':'50px'}}>Carrier</p>
                  <p style={{'width':'97px'}}>We are hiring</p>
                  <p style={{'width':'33px'}}>Blog</p>
                </div>
            </div>
            
            <div className='fs-col-md-2'>
              <h5 style={{'width':'72px', 'height':'24px'}}>Features</h5>
                <div className='fs-link'>
                  <p style={{'width':'142px'}}>Buisness Marketing</p>
                  <p style={{'width':'97px'}}>User Analytic</p>
                  <p style={{'width':'68px'}}>Live Chat</p>
                  <p style={{'width':'134px'}}>Unlimited Support</p>
                </div>
            </div>
            
            <div className='fs-col-md-2'>
              <h5 style={{'width':'86px', 'height':'24px'}}>Resources</h5>
                <div className='fs-link'>
                  <p style={{'width':'115px'}}>IOS & Android</p>
                  <p style={{'width':'106px'}}>Watch a Demo</p>
                  <p style={{'width':'79px'}}>Customers</p>
                  <p style={{'width':'25px'}}>API</p>
                </div>
            </div>
            
            <div className='fs-col-md-4'>
              <h5 style={{'width':'103px', 'height':'24px'}}>Get In Touch</h5>
                <div className='fs-link-email'>
                  <div className='input-grp'>
                   <SaveResponse/>
                  </div>
                  <p>Lorem impsum dolor amit</p> 
                </div>
            </div>
          
          
          
          
          </div>
        </div>
      </div>

     
   
        
      
    
        
      <div className='footer-bottom'>
        <div className='fb-container'>
          <div className='fb-row'>
            <div className='fb-col-md-7'>
              <h6>Made with ❤️ at Acciojob</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer