import React from 'react'
import './style.scss'
import teamsLogo from '../../assets/images/Teams Logo.png'
import location from '../../assets/images/location.png'
import clock from '../../assets/images/clock.png'
import save from '../../assets/images/save.png'

const Job = (props) => {
    return (
        <div className="job-items col-md-2 py-2 px-4 d-flex flex-column justify-content-around ">
            {props.isPromoted ? "Promoted" : ""}
            <div className="job-title-container d-flex justify-content-between">
                <div className="logo-container d-flex  justify-content-center align-items-center">
                    <img src={teamsLogo} />
                </div>

                <div className='job-title'>
                    <p>UI/UX Designer</p>
                    <p id="teams">Teams</p>
                </div>
            </div>
            <div className="d-flex justify-content-start location-and-time">
                <img src={location} className='icon' />
                <span className="sub-text">Seattle, USA (Remote)</span>
            </div>
            <div className="d-flex justify-content-start align-items-center location-and-time">
                <img src={clock} className='icon' />
                <span className="sub-text">1day ago | 22 applicants</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <button className='btn btn-primary transviti-btn'>Apply Now</button>
                <img src={save} className='save'/>
            </div>

        </div>
    )
}

export default Job