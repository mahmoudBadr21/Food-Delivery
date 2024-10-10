import React, { useContext, useState } from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets'
import { StoreConext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, image, description}) => {

  const {cartItem, addToCart, removeFormCart} = useContext(StoreConext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt='' width={'auto'} height={'unset'} />
        {!cartItem[id]
          ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' width={'auto'} height={'unset'} />
          :<div className='food-item-counter'>
            <img onClick={() => removeFormCart(id)} src={assets.remove_icon_red} alt='' width={'auto'} height={'unset'} />
            <p>{cartItem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' width={'auto'} height={'unset'} />
          </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' width={'auto'} height={'unset'} />
        </div>

        <p className="food-item-desc">
          {description}
        </p>

        <p className="food-item-price">
          ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
