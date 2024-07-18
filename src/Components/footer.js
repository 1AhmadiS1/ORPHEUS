import React from 'react'
import letsconnect from "../images/Let’s Connect (1).png"
import linked from "../images/Medium New.png"
import idk from "../images/Medium New (1).png"
import instgram from "../images/Medium New (2).png"
import M from "../images/Medium New (3).png"
import gmail from "../images/Medium New (4).png"



export default function Footer() {
  return (
    <section className='section footer'>
<div className='container'>
<div className='row'>
<div className='col-12'>
<img src={letsconnect} alt=''/>
</div>
<div className='col-12'>
<p>Get in touch for opportunities or just to say hi! 👋</p>
</div>
<div className='col-12 row'>
    <div className='col-md-2 col-2'>
    <a href=''><img src={linked} alt=''/>
</a>

</div>

<div className='col-md-2 col-2'>
<a><img src={idk} alt=''/>
</a>

</div>

<div className='col-md-2 col-2'>
<a><img src={instgram} alt=''/>
</a>

</div>

<div className='col-md-2 col-2'>

<a><img src={M} alt=''/>
</a>

</div>

<div className='col-md-2 col-2'>
<a><img src={gmail} alt=''/>
</a>
 </div>


</div>


</div>





</div>



    </section>
  )
}
