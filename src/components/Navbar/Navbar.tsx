import { useEffect, useState } from "react";
import "./Navbar.scss"


const Navbar = () => {

  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const addShadowBox = () => {
    const nav:HTMLElement  = document.getElementById("navbar")!;
    if(window.scrollY >= 250) {
      nav.classList.add("shadow")
    } else {
      nav.classList.remove("shadow")
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', addShadowBox);
    return () =>
    window.removeEventListener('scroll', addShadowBox);
  }, [])

  return (
    <header>
      <div className="navbar_container shadow" id="navbar">

        <div className="navbar_items">

          <div className="navbar_logo"> <img src={"../images/logo.svg"} alt="logo-easy-bank" /></div>
          
            <ul className={hamburgerClicked ? "mav_items_mobile" : "mav_items_desktop"}>
              <li>Home<span className="line to_left"></span></li>
              <li>About <span className="line to_left"></span></li>
              <li>Contact <span className="line"></span></li>
              <li>Blog <span className="line to_left"></span></li>
              <li>Careers <span className="line"></span></li>
            </ul>
              <button className="main_btn">Request Invite</button>

              <div className={`${hamburgerClicked ? "three-dashs-menu-mobile" : ""}`} 
                onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                <div className="hamburger">
                    <a className={`${hamburgerClicked ? "main-nav-toggle active" : "main-nav-toggle"}`}>
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    
    </header>
  )
}

export default Navbar