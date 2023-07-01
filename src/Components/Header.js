import React from 'react'


import Logo from "../assets/leaf.png"

export const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt='Logo'/>
            <span>To Do List</span>
        </div>
        <div className='themeSelector'>
            <span className="light activeTheme"></span>
            <span className="medium activeTheme"></span>
            <span className="dark activeTheme"></span>
            <span className="gOne activeTheme"></span>
            <span className="gTwo activeTheme"></span>
            <span className="gThree activeTheme"></span>
        </div>
    </header>
  )
}
