import "./LatestArtical.scss"


const LatestArticals = () => {


  return (
    <section className="artical_section">
      <div className="artical_cards_container">
      
        <h2>Latest Articles</h2>

        <ul>
          <li className="artical_card">
            <img className="artical_image" src={"../images/image-currency.jpg"} alt="" />
            <span className="artical_author"> By Claire Robinson </span>
            <h5 className="artical_title"> Receive money in any currency with no fees </h5>
            <p className="artical_paragraph"> The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single … </p>
          </li>
          
          <li className="artical_card">
            <img className="artical_image" src={"../images/image-restaurant.jpg"} alt="" />
            <span className="artical_author"> By Wilson Hutton </span>
            <h5 className="artical_title"> Treat yourself without worrying about money </h5>
            <p className="artical_paragraph"> Our simple budgeting feature allows you to separate out your spending and set 
               realistic limits each month. That means you … </p>
          </li>
          
          <li className="artical_card">
            <img className="artical_image" src={"../images/image-plane.jpg"} alt="" />
            <span className="artical_author"> By Wilson Hutton </span>
            <h5 className="artical_title"> Take your Easybank card wherever you go </h5>
            <p className="artical_paragraph">  We want you to enjoy your travels. This is why we don’t charge any fees on purchases  
              while you’re abroad. We’ll even show you … </p>
          </li>
          
          <li className="artical_card">
            <img className="artical_image" src={"../images/image-confetti.jpg"} alt="" />
            <span className="artical_author"> By Claire Robinson </span>
            <h5 className="artical_title"> Our invite-only Beta accounts are now live! </h5>
            <p className="artical_paragraph"> After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
              It’s easy to request an invite through the site ... </p>
          </li>
    
          
        </ul>

      </div>
    </section>
  )
}

export default LatestArticals