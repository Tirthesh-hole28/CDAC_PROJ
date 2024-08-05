import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [registerAs, setRegisterAs] = useState('Parent'); // Set initial state to 'Parent'

  const handleSelectChange = (event) => {
    setRegisterAs(event.target.value);
    formik.setFieldValue('name', ''); // Clear the name field when changing the dropdown
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      contactNo: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Required'),
      contactNo: Yup.string()
        .matches(/^\d{10}$/, 'Must be exactly 10 digits')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
          <h2 style={{ padding: '30px', color: 'blue' }}>Register</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicDropdown">
              <Form.Label style={{ color: 'blue', textDecoration: 'underline' }}>Register As</Form.Label>
              <Form.Control
                style={{ color: 'blue', border: '2px solid blue' }}
                as="select"
                onChange={handleSelectChange}
                value={registerAs}
              >
                <option value="Parent">Parent</option>
                <option value="Daycare">Daycare</option>
              </Form.Control>
            </Form.Group>

            {registerAs === 'Daycare' ? (
              <Form.Group controlId="formBasicText">
                <Form.Label>Daycare Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Daycare Name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            ) : (
              <Form.Group controlId="formBasicText">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            )}

            <Form.Group controlId="formBasicText">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                name="contactNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNo}
                isInvalid={formik.touched.contactNo && formik.errors.contactNo}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.contactNo}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
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

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              style={{ marginTop: '3rem' }}
              className='position-relative bottom-0 start-50 translate-middle'
              variant="primary"
              type="submit"
            >
              {registerAs === 'Daycare' ? 'Register ₹499' : 'Register'}
            </Button>
          </Form>
        </Col>
        <Col md={5}>
          <img
            style={{ marginTop: '7rem', height: '400px' }}
            src={process.env.PUBLIC_URL + '/registration.jpg'}
            alt="Registration"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
