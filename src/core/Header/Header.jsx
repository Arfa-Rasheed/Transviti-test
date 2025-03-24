import React from 'react'
import logo from '../../assets/images/Tranvisti Logo.png'
import profilePic from '../../assets/images/profile-pic.png'
import './style.scss'

const Header = () => {
  const navMenu = [
    { name: "Top Companies", url: "" },
    { name: "Job Tracker", url: "" },
    { name: "My Calendar", url: "" },
    { name: "Documents", url: "" },
    { name: "Messages", url: "" },
    { name: "Notifications", url: "" },
  ]
  return (
    <div className=" d-flex justify-content-around align-items-center header-wrapper">
      <div className="col-md-11 d-flex justify-content-between align-items-center nav-inner-container">
        <div className="logo" >
          <img src={logo} />
        </div>
        <div className="menu-container col-md-7 d-flex justify-content-between" >
          <h5>Find Jobs</h5>
          <div className='menu-inner-container col-md-10 d-flex justify-content-between align-items-center'>
            {
              navMenu.map((menu) => {
                return <span className='list-style-none nav-menu'>{menu.name}</span>
              })
            }
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-between align-items-center" >
          <input type="password" className="search-field" id="inputPassword2" placeholder="Search" />
          <button type="button" class="btn btn-primary transviti-btn">Resume Builder</button>
          <img src={profilePic} className='profile-pic' />
        </div>
      </div>
    </div>
  )
}

export default Header