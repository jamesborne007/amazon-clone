
import React from 'react'
import './Headerpage.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
  return (         
    <div className='header'>
        <Link to='/'>
            <img  className='headerLogo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
       
        <div className='headerSearch'>
            <input type="text" className='headerSearchInput' />
            <SearchIcon className='headerSearchIcon'/>

        </div>

        <div className="headerNav">
            <div className='headerOption'>
                <span className='H-Option1'> hello guest</span>
                <span className='H-Option2'>Sign In</span>

            </div>
            <div className='headerOption'>
                <span className='H-Option1'> Returns</span>
                <span className='H-Option2'> & Orders</span>
            
            </div>
            <div className='headerOption'>
                <span className='H-Option1'>Your</span>
                <span className='H-Option2'> Prime</span>

            </div>
            
            <Link to='/Checkout'>
                <div className="headerOptionBasket">
                    <ShoppingBasketIcon/>
                    <span className='H-Option2 H-BasketCount'>0</span>
                </div>
            </Link>
          
        </div>

    </div>     
  )
}

export default Header
