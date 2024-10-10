import React from 'react'
import './explorMenu.css'
import { menu_list } from '../../assets/assets'

const ExplorMenu = ({category, setCategory}) => {
  return (
    <div className='explor-menu' id='explor-menu'>
      <h1>Eexplor our menu</h1>
      <p className='explor-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explor-menu-list">
        {
          menu_list.map((item, index)=>{
            return(
              <div onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)}
                className="explor-menu-list-item"
                key={index}
              >
                <img className={category === item.menu_name? "active":""} src={item.menu_image} alt='' width={"auto"} height={"nuset"} />
                <p>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExplorMenu
