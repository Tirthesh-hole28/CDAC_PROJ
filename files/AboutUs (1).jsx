import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Zoom>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              DayCare is committed to providing the best care for your children. Our team of
              dedicated professionals ensures a safe and nurturing environment where your children
              can learn and grow.
            </p>
          </Col>
        </Row>
        </Zoom>
    </Container>
  );
}

export default AboutUs;
