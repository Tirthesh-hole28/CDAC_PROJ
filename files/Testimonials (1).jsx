import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../TestiMonials.css'

const Testimonials = () => {
  return (
    <Container className="mt-5">
      <h2>Testimonials</h2>
      <Row>
        <Col md={4}>
          <Fade left>
            <Card style={{height:'30vh'}}>
              <Card.Body>
              <img className='parent-img' src={process.env.PUBLIC_URL + 'parent.jpeg'} alt='parent1'  />
                <Card.Text>
                  "DayCare has been a blessing for our family. Our child loves it here and the staff are amazing."
                </Card.Text>
                <Card.Footer className='card-footer'>
                  <small className="text-muted">- Parent 1</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade bottom>
            <Card>
              <Card.Body>
              <img className='parent-img' src={process.env.PUBLIC_URL + 'parent.jpeg'} alt='parent1'  />
                <Card.Text>
                  "The best daycare we have ever experienced. Highly recommend to all parents."
                </Card.Text>
                <Card.Footer className='card-footer'>
                  <small className="text-muted">- Parent 2</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade right>
            <Card>
              <Card.Body>
              <img className='parent-img' src={process.env.PUBLIC_URL + 'parent.jpeg'} alt='parent1'  />
                <Card.Text>
                  "A wonderful place for children to grow and learn. We are very happy with DayCare."
                </Card.Text>
                <Card.Footer className='card-footer'>
                  <small className="text-muted">- Parent 3</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
