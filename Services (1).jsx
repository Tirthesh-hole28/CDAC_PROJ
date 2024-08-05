import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <Container className="mt-5">
      <h2>Our Services</h2>
      <Row>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>Full Day Care</Card.Title>
                <Card.Text>
                  Comprehensive care from morning till evening with a variety of activities to keep your child engaged.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>Half Day Care</Card.Title>
                <Card.Text>
                  Flexible half-day options for parents who need shorter care periods.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>After School Care</Card.Title>
                <Card.Text>
                  Safe and fun after school care for your children until you can pick them up.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
