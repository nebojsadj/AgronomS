import React, { useState, useRef } from "react";
import {
  Form,
  Col,
  Button,
  Overlay,
  Popover,
  Container,
  Row,
} from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import emailjs from "emailjs-com";

function Contact() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [success, setSuccess] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_jiuu8zf",
          "template_cp09lds",
          event.target,
          "user_C6R6NBvn6aXViZOCdS2ms"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      event.target.reset();
      setValidated(false);
      timeOut();
    }
  };

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const timeOut = () => {
    setTimeout(function () {
      setSuccess(
        "Poruka je uspešno poslata! Uskoro će Vas kontaktirati neko iz našeg tima!"
      );
    }, 800);

    setTimeout(function () {
      setSuccess("");
    }, 8000);
  };

  return (
    <Container>
      <Row>
        <Col
          md={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="mt-5 contactWrap border"
        >
          <div className="text-center mt-4">
            <FaPhoneAlt className="text-light call" size="2em" />
            <br />
            <div ref={ref}>
              <Button
                variant="light"
                className="mt-4 contBtn"
                onClick={handleClick}
              >
                Kontak telefon!
              </Button>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
              >
                <Popover
                  id="popover-contained"
                  style={{
                    border: "1px solid black",
                    boxShadow: "0 0 9px black",
                  }}
                >
                  <Popover.Title
                    as="h1"
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    +381 65 6922333 <hr /> +381 65 6922335
                  </Popover.Title>
                  <Popover.Content
                    as="h3"
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                  >
                    Pozvati od 9h do 17h
                  </Popover.Content>
                </Popover>
              </Overlay>
            </div>
          </div>
          <p
            style={{ fontSize: "18px", color: "white" }}
            className="mt-4 mb-4 mConsult"
          >
            <b className="ml-4">Zainteresovani ste za naše usluge</b> i cene
            naših usluga? Budite slobodni da nam pošaljete informativni email sa
            opisom, vašeg zasada ili zasada koji planirate da podignete, a jedan
            od naših inženjera će Vas kontaktirati u najkraćem mogućem roku.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 6, offset: 3 }}
          xs={{ span: 12 }}
          className="text-center mt-4 iconBorder"
        >
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="blanc"
          >
            <AiOutlineMail size="3em" className="iconColor mt-2 mb-2 icon1" />
          </a>

          <a
            href="https://www.facebook.com/Agronom-S-102574891795506"
            target="blanc"
          >
            <AiFillFacebook size="2.8em" className="ml-2 iconColor icon2" />
          </a>
          <a
            href="https://www.facebook.com/Agronom-S-102574891795506"
            target="blanc"
          >
            <GrInstagram size="2.4em" className="ml-2 iconColor icon3" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="mt-4 mb-5 contactWrap border"
        >
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-4 mb-4 formFont"
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="text-light">Ime</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vaše ime"
                  autoComplete="off"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="text-light">Prezime</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vaše prezime"
                  autoComplete="off"
                  name="lastName"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label className="text-light">Telefon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vaš telefon"
                  autoComplete="off"
                  name="phone"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="text-light">Poruka</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Vaša poruka"
                  autoComplete="off"
                  name="message"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Vaš email"
                  autoComplete="off"
                  name="email"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Button variant="light" type="submit" className="mb-3 posaljiBtn">
              Pošalji
            </Button>
          </Form>
          <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
            <h4 className="text-light text-center mb-3 mSucMsg">{success}</h4>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
