import React from 'react'
import './style.scss'
import bgImage from '../assets/images/profile-bg.png'
import profilePic from '../assets/images/profile-pic.png'
import Job from '../shared/Job'
const Home = () => {
  const profileDetails = {
    name: "Albert Flores",
    designation: "Senior Product Designer",
    title1: "UI/UX Designer",
    title2: "Graphic Designer",
    title3: "Web...",
    location: "Clinton,Maryland"
  }

  const profileAnalytics = {
    profileViewers: 140,
    resumeViewers: 20,
    myJobs: 88
  }
  return (
    <div className='col-md-12 d-flex justify-content-center home-wrappper'>
      <div className="col-md-11 d-flex justify-content-between mt-4" >
        <div className="profile-container" >
          <div className="profile-inner-container d-flex flex-column justify-content-between">
            <div className="bg-pic">
              <img src={bgImage} />
              <div className="profile-details-container d-flex flex-column justify-content-between align-items-center">
                <img src={profilePic} />
                <div className="profile-details">
                  <p><b>{profileDetails.name}</b></p>
                  <p>{profileDetails.designation} | {profileDetails.title1} | {profileDetails.title2} | {profileDetails.title3}</p>
                  <p>{profileDetails.location}</p>
                </div>
              </div>
            </div>

            <div className="profile-analytics p-4">
              <div className="profile-analytics-inner-container">
                <div className="d-flex justify-content-between">
                  <span>Profile Visitors </span><span className="count">140</span>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                  <span>Resume Viewers </span><span className="count">90</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>My Jobs </span><span className="count">88</span>
                </div>
              </div>
            </div>

            <div className="my-calendar px-4 py-2">
              <p className='calendar-heading'>My Calendar</p>
              <p>Upcoming Interviews</p>
            </div>
          </div>

        </div>
        <div className="job-container" >
          <div className="job-container-heading">
            <h4 >
              Find your Dream Job,<span className='name'>Albert!</span>
            </h4>
            <p>Explore the latest job openings and apply for the best opportunities available today!</p>
          </div>

          <div className="search-container d-flex align-items-center justify-content-between p-4">
            <input type="text" placeholder="Job Title, Company, or Keywords" class="form-control-plaintext" id="staticEmail2" value="" />
            <div className="dropdown py-2 px-4">
              Search Location
            </div>
            <div className="dropdown p-2 px-4">
              Job Type
            </div>
            <button className='btn btn-primary transviti-btn'>Search</button>
          </div>

          <div className="filter-container mt-4 d-flex align-items-center justify-content-between">
            Similar:
            <button type="button" class="btn btn-outline-secondary">Frontend</button>
            <button type="button" class="btn btn-outline-secondary">Backend</button>
            <button type="button" class="btn btn-outline-secondary">Graphic Designer</button>
          </div>

          <div className="featured-jobs-container mt-4">
              <div className="heading-container d-flex justify-content-between align-items-center col-md-4">
                <p className='featured-jobs-heading'>Featured Jobs</p> 
                <a href="#" className='mb-3'>See Featured Jobs</a>
              </div>

              <div className="job-list d-flex justify-content-start">
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
              </div>
          </div>

          <div className="featured-jobs-container mt-4">
              <div className="recommended-heading-container d-flex justify-content-between align-items-center col-md-5">
                <p className='featured-jobs-heading'>Recommended Jobs</p> 
                <a href="#" className='mb-3'>See Recommended Jobs</a>
              </div>

              <div className="job-list d-flex justify-content-start">
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home