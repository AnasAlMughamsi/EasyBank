import { useEffect, useState } from "react"
import "./Hero.scss"


const Hero = () => {

  const [zIndex, setZindex] = useState(0)
  const [trasition, setTrasition] = useState("")
  
  const desktopImage = "../images/bg-intro-desktop.svg"
  const mobileImage = "../images/bg-intro-mobile.svg"
  


  function changeBackground() {
    if(window.scrollY > 150) {
      setZindex(-1);
      setTrasition("all ease-in-out 100ms")
    } else {
      setZindex(0);
      setTrasition("")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () =>
      window.removeEventListener('scroll', changeBackground);
  }, [])


  return (
    <section className="hero_container">

      <div className="hero_title">
        <h2>Next generation digital banking</h2>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className="main_btn hover_animation">Request Invite</button>
      </div>

      <div className="hero_landing_image">
        <img className="hero_image_1" id="img1" src={desktopImage} alt="background_phones" />
        <img className="hero_image_1" id="img2" src={mobileImage} alt="background_phones" />
        <img className={`hero_image_2`} style={{zIndex: zIndex, transition: trasition}} src={"../images/image-mockups.png"} alt="background_phones" />
      </div>

    </section>
  )
}

export default Hero