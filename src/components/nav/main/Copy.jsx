import React from 'react'
import logo from '../doctor/image/Minimalist_Hospital_and_Medical_Health_Logo-removebg-preview.png'

const Copy = () => {
  return (
    <div className='copy-content'>
        <img style={{width:200,height:200}} src={logo} alt="" />
        <span className='copy-text'>Copyright © 2017, Practo. All rights reserved.</span>
    </div>
  )
}

export default Copy