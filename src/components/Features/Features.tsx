import "./Features.scss"


const Features = () => {
  return (
    <section className="feature_section">

      <div className="feature_content">

        <div className="feature_title">
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. <br/>
              Control your finances like never before.
            </p>
        </div>

        <ul>
          <li className="feature_item">
            <img src={"../images/icon-online.svg"} alt="" />
            <h4>Online Banking</h4>
            <p>Our modern web and mobile applications allow you to keep track 
              of your finances wherever you are in the world.</p>
          </li>
          
          <li className="feature_item">
            <img src={"../images/icon-online.svg"} alt="" />
            <h4>Simple Budgeting</h4>
            <p>See exactly where your money goes each month. Receive notifications 
              when you’re close to hitting your limits.</p>
          </li>

          <li className="feature_item">
            <img src={"../images/icon-online.svg"} alt="" />
            <h4>Fast Onboarding</h4>
            <p>We don’t do branches. Open your account in minutes 
              online and start taking control of your finances right away.</p>
          </li>
          
          <li className="feature_item">
            <img src={"../images/icon-online.svg"} alt="" />
            <h4>Open API</h4>
            <p>Manage your savings, investments, pension, and much more from one account.
              Tracking your money has never been easier.</p>
          </li>

        </ul>

      </div>
    
    </section>
  )
}

export default Features