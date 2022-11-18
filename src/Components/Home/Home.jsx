import React from 'react';
import avatar from "../img/avataaars.svg"

export default function Home() {

  return<>
   <div className="bg-main">
   <div className="container vh-100 d-flex align-items-center justify-content-center">
    <div className=" text-center text-white">
        <img className='w-50 mb-4' src={avatar} alt="" />
        <h1 className="main-head fw-bolder">START REACT</h1>
        <div className="header">
          <div className="inline bg-white"></div>
          <i className='fa-solid fa-star fs-2 h-line mb-4'></i>
          <div className="inline bg-white"></div>
        </div>
        <p className="fs-4 mb-4">Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
   </div>
  </>
};
