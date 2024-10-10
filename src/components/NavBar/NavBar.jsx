import React, { useContext, useState } from 'react'
import './navBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreConext } from '../../context/StoreContext'

const NavBar = ({setShowLogin}) => {

  const [menu , setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreConext)

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt='' width={"auto"} height={"unset"} /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explor-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='' width={"auto"} height={"unset"} />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt='' width={"auto"} height={"unset"} /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default NavBar
