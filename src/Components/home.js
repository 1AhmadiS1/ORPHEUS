import React from 'react'
import YetTheStoryOfOrphis from "../images/Yet the story of Orpheus.png"
import FULL from "../images/FULL.png"
 function Home() {
  return (
    <section className="Home section">
<div className="container">
<div className="items row">
<div className="col-md-6 col-12 item item1  ">
<img src={YetTheStoryOfOrphis} alt="orphis"/>
<p>Product & Graphic Designer, with experience in delivering End-to-End UX/UI design for software products.</p>
<button className="btn1 mr-4">WORKS</button>
<p className='btn-gold'>FREE STUFF</p>
</div>
<div className="col-lg-6 col-12 item item2">
<img src={FULL} alt="FULL"/>


</div>
</div>
</div>
</section>
  )
}
export default Home;