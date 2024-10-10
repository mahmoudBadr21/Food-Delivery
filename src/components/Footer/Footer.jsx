import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt='' width={'auto'} height={'unset'} />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cupiditate sint, inventore distinctio, est dolor ad architecto ipsam voluptatibus quo nam fugit unde. Cupiditate illo quis nesciunt eaque veniam totam.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt='' width={'auto'} height={'unset'} />
            <img src={assets.twitter_icon} alt='' width={'auto'} height={'unset'} />
            <img src={assets.linkedin_icon} alt='' width={'auto'} height={'unset'} />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2-414-097-8753</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
