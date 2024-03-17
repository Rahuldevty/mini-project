import React from 'react'
import './Navbar.css'
import Logo from "../../Assets/logo2.png"

function Navbar() {
  return (
    <div>
      <nav className="NavWrapper">
        <a className = "LogoLink" href = "/"><img className = "PageLogo" src = {Logo} alt= "BigBook"/></a>
        <div className="NavMenu">
          <a href= "/home"><img src = {Logo}></img><span>HOME</span></a>
          <a href= "/home"><img src = "src\Assets\home-icon.svg"></img><span>ABOUT US</span></a>
          <a href= "/home"><img src = "src\Assets\home-icon.svg"></img><span>LOGIN</span></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
