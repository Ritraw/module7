import React from 'react';
import './Header.css';
import {ReactComponent as Register} from './Icons/Login/Register.svg';
import {ReactComponent as Person} from './Icons/Login/Person.svg';
import {ReactComponent as Search} from './Icons/Login/Search.svg';
import {ReactComponent as Cart} from './Icons/Login/Cart.svg';
import {ReactComponent as Heart} from './Icons/Login/Heart.svg';
import { useSelector } from 'react-redux';


import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";



function Header(props) {
  return (
    <div>
      

        {/* NAVIGATION BAR */}
    
        <div className='navigation-bar'>
            <Router>
                <div className='navigation-container'>
                    <div className='navigation-brand'>
                        <Link to="/acciojob">AccioJob</Link>
                    </div>
                    <div className='navigation-list'>
                      <div className='navigation-list-item'>
                        <Link className='home' to="/home">Home</Link>
                        <Link className='home' to="/shop">Shop</Link>
                        <Link className='home' to="/about">About</Link>
                        <Link className='home' to="/blog">Blog</Link>
                        <Link className='home' to="/contest">Contest</Link>
                        <Link className='home' to="/pages">Pages</Link>
                      </div>
                    </div>
                    
                      
                    <div className='navigation-list'>
                      <div className='navigation-list-link'>
                        <div className='login-link'>
                          <div className='icon-button'>
                            <div className='person-icon'>
                              <div className='person'><Person/></div>
                            </div>
                          </div>
                        </div>

                        <div className='registration-link'>
                          <Register/>
                        </div>
                        
                        <div className='search-link'>
                          <div className='icon-button'>
                            <div className='icon-size'>
                              <Search/>
                            </div>
                          </div>
                        </div>
                        
                        <div className='cart-link'>
                          <div className='icon-button'>
                            <div className='icon-size'>
                              <Cart/>
                            </div>
                          </div>
                        </div>
                        
                        
                        <div className='heart-link'>
                          <div className='icon-button'>
                            <div className='icon-size'>
                              <Heart/>
                            </div>
                          </div>
                        </div>
                        
                        
                        
                      </div>
                    </div>
                   
                </div>
            </Router>
        </div>
    </div>
  )
}

export default Header