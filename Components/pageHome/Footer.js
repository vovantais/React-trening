import React, { Component } from 'react'

export default class Footer extends Component {
   render() {
      return (
         <div>
            <div className="footer">
               <div className="container">
                  <div className="footer__row">
                     <div className='footer__body'>
                        <div className="footer__item">
                           <div className="footer__text">© Copyright @Gedeiko 2020, All rights reserved.</div>
                        </div>
                        <div className="footer__item">
                           <div className="footer__icon">
                              <div className="footer__link"> <a href="" className="link__twitter"></a> </div>
                           </div>
                           <div className="footer__icon">
                              <div className="footer__link"> <a href="" className="link__linkeId"></a> </div>
                           </div>
                           <div className="footer__icon">
                              <div className="footer__link"> <a href="" className="link__google"></a> </div>
                           </div>
                           <div className="footer__icon">
                              <div className="footer__link"> <a href="" className="link__facebook"></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
