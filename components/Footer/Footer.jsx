import React from 'react'
import "./Footer.css"
import socialMediaIcons from "../../assets/youtube_icon.png"
import socialMediaIcons1 from "../../assets/facebook_icon.png"
import socialMediaIcons2 from "../../assets/twitter_icon.png"
import socialMediaIcons3 from "../../assets/instagram_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <img src={socialMediaIcons} alt="" />
        <img src={socialMediaIcons1} alt="" />
        <img src={socialMediaIcons2} alt="" />
        <img src={socialMediaIcons3} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyrightText'>©	1997-2023 Netflix,Inc.</p>
    </div>
  )
}

export default Footer
