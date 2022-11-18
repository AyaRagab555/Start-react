import React from 'react'

export default function Footer() {
  return <>
  <div className='bg-second text-white text-center'>
    <div className="container py-4">
      <div className="row my-4">
        <div className="col-md-4  mb-5">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">2215 John Daniel Drive<br/>Clark, MO 65243</p>
        </div>
        <div className="col-lg-4 mb-5">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <div className="icon-contain d-flex justify-content-center">
              <div className="icon-box rounded-circle mx-2 d-flex justify-content-center align-items-center">
                <i className='fa-brands fa-facebook-f fs-5'></i>
              </div>
              <div className="icon-box rounded-circle mx-2 d-flex justify-content-center align-items-center">
                <i className='fa-brands fa-twitter fs-5'></i>
              </div>
              <div className="icon-box rounded-circle mx-2 d-flex justify-content-center align-items-center">
                <i className='fa-brands fa-linkedin-in fs-5'></i>
              </div>
              <div className="icon-box rounded-circle mx-2 d-flex justify-content-center align-items-center">
                <i className='fa-brands fa-dribbble fs-5'></i>
              </div>
           
            </div>
        </div>
        <div class="col-lg-4 ">
            <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead px-4">
                Freelance is a free to use, MIT licensed Bootstrap theme created by Route
            </p>
        </div>
      </div>
    </div>
  
      <div className='bg-dark'>
          <p className='footer mb-0 p-4'>Copyright © Your Website 2021</p>
      </div>
    </div>
  </>
}
