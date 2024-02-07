import Fiverr from "../../assets/fiverr.png"
import Upwork from "../../assets/upwork.png"
import Linkedin from "../../assets/linkedin.png"
import "./Contact.css"

let Contact = () => {
    return (
        <section className="Contact__data" id="contact">
        <div className="contact__container">
          <h1 id="section_title">Let’s work together</h1>
          <p id="section__description">Whether you prefer collaborating through project platforms like Upwork, professional networks like LinkedIn, or individual task marketplaces like Fiverr, I'm available to fit your workflow and preferences.</p>
          <div className="Contact_icons">
          <div>
            <a href="https://www.fiverr.com/hamzabutt04"  className="home__social-icon" target ="_blank">
          <img src={Fiverr} alt="Fiverr"/> </a>
          </div>
          <div>
          <a href="https://www.upwork.com/freelancers/~019c48b9b26babc50c" className="home__social-icon" target ="_blank">
          <img src={Upwork} alt="Upwork"/></a>
          </div><div>
          <a href="https://www.linkedin.com/in/hamza-asghar-butt/" className="home__social-icon" target ="_blank">
          <img src={Linkedin} alt="Linkedin"/></a>
          </div>
          </div>
          <p id="social"><span>Based In:</span> Lahore, Punjab, Pakistan.</p>
          <p id="social"><span>Email:</span> humzabutt1190@gmail.com</p>
        </div>
      </section>
      
        )
}

export default Contact