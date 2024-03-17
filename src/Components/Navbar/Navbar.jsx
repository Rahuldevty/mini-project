import React from 'react'
import './Navbar.css'
import Logo from "../../Assets/logo2.png"
import HomeLogo from "../../Assets/home-icon.svg"
import AboutLogo from "../../Assets/about-logo.png"

function Navbar() {
  return (
    <div>
      <nav className="NavWrapper">
        <a className = "LogoLink" href = "/"><img className = "PageLogo" src = {Logo} alt= "BigBook"/></a>
        <div className="NavMenu">
          <a href= "/home"><img src = {HomeLogo}></img><span>HOME</span></a>
          <a href= "/home"><img src = {AboutLogo}></img><span>ABOUT US</span></a>
          <a href= "/home"><img src = {HomeLogo}></img><span>LOGIN</span></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
