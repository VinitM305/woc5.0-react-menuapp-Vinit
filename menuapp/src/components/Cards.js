import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'
// import img1 from 'Maggi'
export default function Cards(props) {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col mt-5 ml-5 mr-5">
    <div className="card h-95">
         <img src="./Maggi.png" height="200px" className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5">
    <div className="card h-95">
       <img src="./Vadapav.png"height="200p" className="card-img-top" alt="..."/> 
      <div className="card-body">
        <h5 className="card-title">Vadapav</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
       <img src="./dabeli.png"height="200px" className="card-img-top" alt="..."/> 
      <div className="card-body">
        <h5 className="card-title">Dabeli</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
         <img src="pizza.png" height="200px"className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Pizza</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
         <img src="chole.png" height="200px" className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Chole</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
         <img src="thali.png" height="200px" className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Guj-Thali</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
         <img src="sweets.png" height="200px"className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Sweets</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
         <img src="samosa.png" height="200px" className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Samosa</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  <div className="col mt-5 ml-5">
    <div className="card h-95">
         <img src="biryani.png"  height="200px" className="card-img-top" alt="not available" /> 
       {/* <img src="maggi.png" className="card-img-top" alt="..."/>  */}
      <div className="card-body">
        <h5 className="card-title">Biryani</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div>
  {/* <div className="col mt-5 ml-5">
    <div className="card h-95">
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div> */}
  {/* <div className="col mt-5 ml-5">
    <div className="card h-95">
        
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div> */}
  {/* <div className="col mt-5 ml-5">
    <div className="card h-95">
       
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
      <button type="button" class="btn btn-outline-primary">Order Now</button>
      </div>
    </div>
  </div> */}
  {/* <div className="col mt-5 ml-5">
    <div className="card h-95">
        
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div> */}
  {/* <div className="col mt-5 ml-5">
    <div className="card h-95">
        
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div> */}
  {/* <div className="col mt-5 ml-5">
    <div className="card h-95">
        
      <div className="card-body">
        <h5 className="card-title">Maggi</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div> */}
</div>
    </div>
  )
}
