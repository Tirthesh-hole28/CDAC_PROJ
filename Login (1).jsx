import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2 style={{ padding: '30px', color: 'blue' }}>Login</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              style={{ marginTop: '3rem' }}
              className='position-relative bottom-0 start-50 translate-middle'
              variant="outline-primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div className="mt-3">
            <span>Don't have an account? </span>
            <Link to="/register">Register here</Link>
          </div>
        </Col>

        <Col md={5}>
          <img
            style={{ marginLeft: '5rem', height: '500px' }}
            src={process.env.PUBLIC_URL + '/login.png'}
            alt="Login"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
