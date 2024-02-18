import React from 'react';
import './toparticles.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col,Image, Container } from 'react-bootstrap';
import pic from "../../assets/pic.jpg";


const Toparticles = () => {
  return (
    <div className='Toparticles-container'>
    <section className='block  about-block'>
        <Container >
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam minima eius itaque sint nostrum adipisci expedita corporis, tempore similique. Corrupti blanditiis aliquam maxime dolor aspernatur sed ullam voluptates aliquid quae.</div>
        <Row>
            <Col sm={4}>
               <Image src={pic} alt="" />
            </Col>
            <Col sm={8}>
            <h1>This is a temporary page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget lorem tempus commodo. </p>
            <Row>
                <Col className="Col-6">
                    author
                </Col>
                <Col className="Col-6">
                    DATE
                </Col>
            </Row>
            </Col>
        </Row>
        
        </Container>
    </section>
    </div>
 )
}

export default Toparticles