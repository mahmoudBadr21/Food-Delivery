import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-paltforms">
      <img src={assets.play_store} alt='' width={'auto'} height={'unset'} />
      <img src={assets.app_store} alt='' width={'auto'} height={'unset'} />
      </div>
    </div>
  )
}

export default AppDownload
