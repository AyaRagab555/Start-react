import React from 'react'

export default function About() {
  return <>
  <div className="bg-main">
    <div className="container text-center text-white p-5">
    <div className="row g-4 m-5">
      <h2 className='head m-0 fw-bolder'>ABOUT</h2>
      <div className="header m-0">
        <div className="inline bg-white"></div>
        <i className='fa-solid fa-star fs-2 h-line text-white mb-4'></i>
        <div className="inline bg-white"></div>
      </div>
      <div className="col-md-6 text-start ps-5">
        <p className=' fs-5 w-75 ms-auto'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-md-6 text-start pe-5">
        <p className=' fs-5 w-75 me-auto'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>

    </div>
  </div>
  </div>
  
  
  </>
}
