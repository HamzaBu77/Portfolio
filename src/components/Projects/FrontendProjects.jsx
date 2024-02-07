import Project3 from "../../assets/Project3.png"
import Project4 from "../../assets/Project4.png"
import Project5 from "../../assets/project5.png"
let Web = () => {

    return(<>
     <div className="projects-container">
        

     <div className="project">
     <div className="project__img">
  <img className="image2" src={Project3} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>Porfolio Website</h3>
  <p>
    Profolio Website Build with ReactJS
    <br />
    <span>React</span> <span>Redux</span> <span>NodeJS</span> <span>MongoDB</span> <span>Bootstrap</span>
  </p>
  <a href="https://pixel-ant-studio.vercel.app/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>

<div className="project">
  <div className="project__description">
  <h3>Trek Buddy</h3>
  <p>
    Trip Planning Website Build With MERN
    <br />
    <span>React</span> <span>Redux</span> <span>NodeJS</span> <span>MongoDB</span> <span>Bootstrap</span>
  </p>
  <a href="https://trek-buddy.vercel.app/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
  <div className="project__img">
  <img className="image2" src={Project4} alt="Project Preview" />
  </div>
</div>

<div className="project">
<div className="project__img">
  <img className="image3" src={Project5} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>PetVet</h3>
  <p>
    PetVet is a MERN based Web application
    <br />
    <span>React</span> <span>Redux</span> <span>Chakra UI</span> <span>NodeJS</span>
  </p>
  <a href="https://petvet.ai/login" className="button" target="_blank" rel="noreferrer">
    View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>



</div>
    </>)
}

export default Web