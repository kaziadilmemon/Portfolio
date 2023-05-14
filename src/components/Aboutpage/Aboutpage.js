import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>A passionate and committed techie. I excel in various areas such as web development, mobile application development, digital marketing, and software engineering. I am a self-taught programmer who has a natural curiosity for learning and a talent for finding solutions. I am currently a student in Software Engineering at Mehran UET Jamshoro. My expertise lies in designing and building software solutions that cater to real-world and academic challenges, incorporating cutting-edge technologies. I possess a keen desire to expand my knowledge and incorporate it into my coding practices to create innovative, engaging, and adaptable applications. Thank you for your kind attention and consideration.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Nodejs</li>
                                    <li>Flutter </li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Firebase</li>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage