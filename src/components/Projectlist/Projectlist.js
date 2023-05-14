import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import project1 from '../../Assets/Pixel True Mockup medium.png'
import project2 from '../../Assets/Pixel True Mockup (1).png'
import project3 from '../../Assets/Pixel True Mockup.png'
import project4 from '../../Assets/3-devices-black.png'
import project5 from '../../Assets/3-devices-black (1).png'
import project6 from '../../Assets/netflix app.png'

function Projectlist() {
  return (

    // yahan pr projets list hogi 
    <div className="projectbackground">
      <Container fluid className="project-section">

        
        <Container>
          
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                // first project
                title="Nutrition Analysis"
                description=""
                ghLink="https://github.com/kaziadilmemon/Nutrition_Analysis"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                title="flutter calculator"
                description="Calculator app"
                ghLink="https://github.com/kaziadilmemon/Flutter-Calculator-App"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project3}
                isBlog={false}
                title="Cookmate-Recipe-Searching-App"
                description="Cookmate is recipe seraching flutter app "
                ghLink="https://github.com/kaziadilmemon/Cookmate-Recipe-Searching-App"
              />
            </Col>
             
             
            <Col md={4} className="project-card">
              
              <ProjectCard
              // first web project
                imgPath={project4}
                isBlog={false}
                title="Github user searching Card"
                description="This is Github user Searching Card web application."
                ghLink="https://github.com/kaziadilmemon/Github-Profile-Card"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project5}
                isBlog={false}
                title="Reheillahi website"
                description="This is Raheillahi foundation website."
                ghLink="https://raheillahi.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project6}
                isBlog={false}
                title="Netflix clone"
                description=" This is netflix clone website ."
                ghLink="https://github.com/kaziadilmemon/Netflix-clone"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist