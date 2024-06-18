import React from 'react'
import logo from "../logoo.jpg"
import "./navbar.css"
const Navbar = () => {
    let name="adam"
  return (
    
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul>
        <li>hello {name} </li>
        <li>Contact</li>
      </ul>
    </div>
    
  )
}

export default Navbar

