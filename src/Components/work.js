import React from 'react'
import ResentWork from "../images/Recent Works.png"
import Frame4 from "../images/Frame 4.png"
import Frame5 from "../images/Frame 5.png"
import Frame6 from "../images/Frame 6.png"

 function Work() {
  return (
<section className="recent section">
    <div className="container">
        <div className="d-flex justify-content-start mb-5 pl-5">
<img src={ResentWork} alt="" className="ml-auto"/>
</div>
<div className="row">
            <div className="col-lg-4 col-12 "><img src={Frame4} alt="Frame 4"/></div>
            <div className="col-lg-4 col-12 "><img src={Frame5} alt="Frame 5"/></div>
            <div className="col-lg-4 col-12  "><img src={Frame6} alt="Frame 6"/></div>
        </div>
    </div>
</section>
)
}
export default Work;