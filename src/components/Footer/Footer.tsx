import "./Footer.scss"

const Footer = () => {
  return (
    <section className="footer_section">
      
      <div className="footer_container">
        
        <div className="footer_content">

          <div className="footer_social">
            <img src={"../images/logo_white.svg"} alt="" />
            <ul>
              <li> <img src={"../images/icon-facebook.svg"} alt="" /> </li>
              <li> <img src={"../images/icon-youtube.svg"} alt="" /> </li>
              <li> <img src={"../images/icon-twitter.svg"} alt="" /> </li>
              <li> <img src={"../images/icon-pinterest.svg"} alt="" /> </li>
              <li> <img src={"../images/icon-instagram.svg"} alt="" /> </li>
            </ul>
          </div>


          <div className="footer_short_links">
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>


        <div className="footer_contact_us">
          <button className="main_btn">Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer