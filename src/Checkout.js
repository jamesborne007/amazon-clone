
import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkoutLeft">
            <img className='checkout-Ad' src="https://m.media-amazon.com/images/G/01/GiftCards/2023/Q4/VX-2338_Large_US_Holiday_Peak_Shopping/VX-2338_HolidayPeak_LPBanner_D_Hero_AGC_BGC_02_HOL._SX3000_QL85_.jpg"
                 alt="" />

            <div>
                <h2 className='checkout-Title'>Your Shopping Basket</h2>  
            </div>     
        </div>

        <div className="checkoutRight">
            <Subtotal/>
            {/* <h2>The subtotal will go inside there</h2> */}
        </div>

      
    </div>
  )
}

export default Checkout
