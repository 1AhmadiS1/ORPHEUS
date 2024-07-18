import React from 'react'
import GreekStatue from "../images/Greek Statue Pack (1).png"
import icons from "../images/Icons.png"
import MaskGroup from "../images/Mask group (1).png"

function Cont2() {
  return (
    <section className='section cont2'>
<div className='container'>
<div className='row'>
<div className='col-lg-6 contribution-desc'>
     <img src={GreekStatue} alt='Mask' className='img2'/>
<p className='par mx-auto'>+&nbsp;5&nbsp;0&nbsp;0&nbsp;&nbsp;&nbsp;G&nbsp;R&nbsp;E&nbsp;E&nbsp;K&nbsp;&nbsp;&nbsp;S&nbsp;T&nbsp;Y&nbsp;L&nbsp;E&nbsp;</p>
<p className='par'>U&nbsp;S&nbsp;E&nbsp;R&nbsp;&nbsp;&nbsp;A&nbsp;V&nbsp;A&nbsp;T&nbsp;A&nbsp;R</p>
   <p className='btn-gold'><img src={icons} alt='download' />DOWNLOAD</p>

     </div>
    <div className='col-lg-6 col-12 cont-desc'>
    <img src={MaskGroup} alt='Mask' className='img1'/>

    </div>




    </div>
</div>
    </section>
  )
}
export default Cont2;