import React from 'react'
import logo from '../images/Logo.png';
import sun from '../images/Sun.png';
function Nav() {
  return (
         <nav className="navbar navbar-expand-lg navbar-light  fixed-top blur">
        <div className="container border-bottom border-secondary">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link nav-link-or " href="#">Works <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-or" href="#">Contribution</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link-or" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-or" href="#">Get in Touch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-or" href="#"><i class="gg-sun"></i></a>
              </li>
          </ul>
      
        </div>
    </div>  
    </nav>
  )
}

export default Nav;
