import React, { Component } from 'react'
import Header from './pageHome/Header';
import Organaisation from './pageHome/Organaisation';
import Footer from './pageHome/Footer';
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from 'react-router-dom';



export default class Wrapper extends Component {
   render() {
      return (
         <>
            <Router>
               <Switch>
                  <Route exact path='/'>
                     <div className="wpapper">
                        <div className="content">
                           <div className='hed'>
                              <div className="container">
                                 <Header />
                                 <Organaisation />
                                 <Footer />
                              </div>
                           </div>
                        </div>
                     </div>
                  </Route>
                  <Route exact path='/portfolio'>
                     <div className="wpapper">
                        <div className="content">
                           <div className='hed'>
                              <div className="container">
                                 <Header />
                                 <h1>Portfolio</h1>
                                 <Footer />
                              </div>
                           </div>
                        </div>
                     </div>
                  </Route>
                  <Route exact path='/about'>
                     <div className="wpapper">
                        <div className="content">
                           <div className='hed'>
                              <div className="container">
                                 <Header />
                                 <h1>About</h1>
                                 <Footer />
                              </div>
                           </div>
                        </div>
                     </div>
                  </Route>
                  <Route exact path='/contact'>
                     <div className="wpapper">
                        <div className="content">
                           <div className='hed'>
                              <div className="container">
                                 <Header />
                                 <h1>Contact</h1>
                                 <Footer />
                              </div>
                           </div>
                        </div>
                     </div>
                  </Route>
               </Switch>
            </Router>
         </>
      );
   }
}
