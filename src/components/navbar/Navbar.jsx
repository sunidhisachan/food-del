import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu")

      return (
            <div className='navbar'>
          <NavLink to='/'> <img src={assets.logo} alt="" className="logo" /></NavLink>       
                  <ul className="navbar-menu">
                        <NavLink to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>home</NavLink>
                        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>menu</a>
                        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>mobile-app</a>
                        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>contact us</a>
                  </ul>
                  <div className="navbar-right">
                        <img src={assets.search_icon} alt="" />
                        <div className="navbar-search-icon">
                             <NavLink to='/cart'> <img src={assets.basket_icon} alt="" /></NavLink>
                              <div className="dot"></div>

                        </div>
                        <button onClick={()=>setShowLogin(true)} >sign in</button>
                  </div>
            </div>
      )
}

export default Navbar

