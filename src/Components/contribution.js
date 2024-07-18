import React from 'react'
import Mask from "../images/Mask group.png"
import contribution1 from "../images/contribution.png"
import GreekStatue from "../images/3D Greek Statue Pack.png"
import icons from "../images/Icons.png"
 function Contribution() {
  return (
    <section className='section contribution'>
        <div className='container'>
        <div className="flex justify-content-start mb-5 pl-5">
<img src={contribution1} alt="" className="ml-auto"/>
</div>
    <div className='row contribution-items'>
     <div className='col-lg-6'>
        <img src={Mask} alt='Mask' className='img1'/>
     </div>
     <div className='col-lg-6 contribution-desc'>
     <img src={GreekStatue} alt='Mask' className='img2'/>
<p className='par mx-auto'>O&nbsp;V&nbsp;E&nbsp;R &nbsp;&nbsp;2&nbsp;0&nbsp;0&nbsp;&nbsp; G&nbsp;R&nbsp;E&nbsp;E&nbsp;K&nbsp;&nbsp; S&nbsp;T&nbsp;Y&nbsp;L&nbsp;E</p>
<p className='par'> &nbsp;S&nbsp;C&nbsp;U&nbsp;L&nbsp;P&nbsp;T&nbsp;U&nbsp;R&nbsp;E</p>
   <p className='btn-gold'><img src={icons} alt='download' />DOWNLOAD</p>

     </div>
      
    </div>
    </div>
    </section>
  )
}
export default Contribution;