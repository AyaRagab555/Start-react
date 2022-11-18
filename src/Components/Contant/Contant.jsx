import React from 'react'

export default function Contant() {



  return <>
    <div className="container text-center p-5">
    <div className="row g-5 m-5">
        <h2 className='head m-0 fw-bolder'>CONTANT</h2>
        <div className="header m-0">
          <div className="inline bg-second"></div>
          <i className='fa-solid fa-star fs-2 h-line text-second mb-4'></i>
          <div className="inline bg-second"></div>
        </div>
        <div class="col-lg-8 mx-auto">
        <form className='text-start'>
          <div class="mb-0 pb-2">
              <label>Name</label>
              <input class="bg-transparent w-100" id="name" type="text" placeholder="Name"/>
              <p class="text-danger"></p>
              <div className="hrz-line"></div>
          </div>
          <div class="mb-0 pb-2">
              <label>Email Address</label>
              <input class="bg-transparent w-100" id="email" type="email" placeholder="Email Address"/>
              <p class="text-danger"></p>
              <div className="hrz-line"></div>
          </div>
          <div class="mb-0 pb-2">
              <label>Phone Number</label>
              <input class="bg-transparent w-100" id="phone" type="tel" placeholder="Phone Number"/>
              <p class="text-danger"></p>
              <div className="hrz-line"></div>
          </div>
          <div class="mb-0 pb-2">
              <label>Message</label>
              <textarea class="bg-transparent w-100" id="message" rows="5" placeholder="Message"></textarea>
              <p class="text-danger"></p>
              <div className="hrz-line"></div>
          </div>
          <br/>
          <div id="success"></div>
          <div class="form-group"><button class="btn btn-main py-3 px-4 fw-semibold" id="sendMessage" type="submit">Send</button></div>
        </form>
    </div>

    </div>
  </div>
  </>
}
