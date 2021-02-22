import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const CityInput = ({ city, setCity, fetchWheatherData }) => {
  let [err, setErr] = useState("");
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    if (!city) {
      setErr("City field is empty");
    } else {
      setErr("");
      fetchWheatherData();
    }
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter City"
            onChange={handleInputChange}
          />
          <p className="text-danger">{err}</p>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityInput;
