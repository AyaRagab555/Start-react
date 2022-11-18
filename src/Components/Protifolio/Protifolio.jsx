import React ,{useState} from 'react';
import ImgArray from "../img/ImgArraay.jsx";

export default function Protifolio() {


  return<>
  <div className="container text-center p-5">
    <div className="row g-5 m-5">
     <h2 className='head m-0 fw-bolder'>PORTFOLIO</h2>
        <div className="header m-0">
          <div className="inline bg-second"></div>
          <i className='fa-solid fa-star fs-2 h-line text-second mb-4'></i>
          <div className="inline bg-second"></div>
        </div>
      {ImgArray.map((img,index)=>
        <div key={index} className='col-md-4'>
          <div className='rounded-3 position-relative overflow-hidden'>
            <img className='w-100' src={img} />
            <div className="overlay"> <i className='fa fa-plus text-white fa-4x fw-bolder'></i></div>
          </div>
        </div>
      )}

    </div>
  </div>

  </>
}
