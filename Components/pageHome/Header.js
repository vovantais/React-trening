import React, { Component } from 'react'
import {
   NavLink,
} from "react-router-dom";

export default class Header extends Component {
   render() {
      return (
         <>

            <header>
               <div className='header'>
                  <div className='header__row'>
                     <div className='header__body'>
                        <nav className="header__menu active">
                           <ul className="header__list">
                              <li><NavLink exact to='/'>home</NavLink></li>
                              <li><NavLink exact to="/portfolio">portfolio</NavLink></li>
                              <li><NavLink exact to="/about">about us</NavLink></li>
                              <li><NavLink exact to="/contact">contact</NavLink></li>
                           </ul>
                        </nav>
                        <span className="header__toggle active">☰</span>
                     </div>
                  </div>
               </div>
            </header>
         </>
      );
   }
}
