import React, { useState } from 'react'
import './ProductCard.css'
import {useDispatch, useSelector} from 'react-redux';

function ProductCard( 
    {
        id,
        newPrice,
        oldPrice,
        productImage,
        productName
    }
  )
{
   
  return (
    <div className='card-rectangle'>
        <div className='card-container'>
           
            <div className='card-image'>
                <img src={productImage}/>
            </div>
        </div>
        <div className='card-content'>
            <p className='product-name'>{productName}</p>
            <p className='product-oldPrice'>{oldPrice}</p>
            <p className='product-newPrice'>{newPrice}</p>
        </div>
      

        <div className='button-contianer'>
            <button className='add-to-cart'>
                <h3>ADD TO CART</h3>
            </button>
        </div>
    </div>
    

  )
}

export default ProductCard