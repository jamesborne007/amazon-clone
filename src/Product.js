
import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateProvider } from './StateProvider';


function Product({ id,title,image,price,rating }) {
  const [{basket}, dispatch]= useStateProvider();


  const addToBasket = () =>{
    //dispatch the item into the datalayer(stateProvider)
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

  };

  return (
    <div className='product'>
        <div className="productInfo">
            <p>{title}</p>
            <p className='productPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="productRating">
              {Array(rating).fill().map((_, i) => (<p className='staricon'><StarIcon/></p>))}
              
                
            </div>
        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product
