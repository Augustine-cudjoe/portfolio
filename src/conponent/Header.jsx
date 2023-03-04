import React from 'react';
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">

        <div className="main-info">
        <h1> Web development and website promotion</h1>
        <Typed 
        className="typed-text"
        strings={ ["Web Design", "Web Development" ,"Facebook Ads SMM" , "Google Ads" ]}
        typedSpeed={40}
        backSpeed={40}
        loop

/> 
      <a href="#" className='btn-main-offer'>contact me </a>
        </div>
    </div>
  )
}

export default Header;
