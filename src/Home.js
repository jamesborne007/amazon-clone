
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="homeContainer">
            <img src='https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg' alt='' className='homeImage'/>

                
            <div className="homeRow">
                <Product id='12321341' title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' price={11.96} rating={5} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71bVExi4yXL._AC_UL381_SR381,381_.jpg' />
                <Product id='49538094' title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen With K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                    price={239.0} rating={4} image='https://m.media-amazon.com/images/I/61dx0mqSQ9L._AC_SX679_.jpg'/>
                
            </div>
            <div className="homeRow">
                <Product id='4903850' title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor' 
                    price={199.99} rating={3} image='https://m.media-amazon.com/images/I/714nNOYJKKL._AC_UL480_QL65_.jpg' /> 
                <Product id='23445930' title='Amazon Echo(3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
                    price={98.99} rating={5} image='https://m.media-amazon.com/images/I/713Nb6CHS-L._AC_UY327_FMwebp_QL65_.jpg'/>
                <Product id='3254354345' title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                    price={598.99} rating={4} image='https://m.media-amazon.com/images/I/71k1WZSJoKL._AC_UY327_QL65_.jpg'/>

            </div>
            <div className="homeRow">
                <Product id='90829332' title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440' 
                    price={1094.98} rating={4} image='https://m.media-amazon.com/images/I/61ctbs1MWmL._AC_SX679_.jpg'/>
            </div>

        </div>

      
    </div>
  )
}

export default Home
