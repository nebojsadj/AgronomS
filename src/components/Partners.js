import React, { useState, useRef } from "react";
import { Card, Button, Overlay, Popover } from "react-bootstrap";
import img1 from "./Data/imgs/bramS.jpg";
import img2 from "./Data/imgs/rasadnikDj.png";
// import img3 from "./Data/imgs/primerPeraPeric.jpg";
import wwwIcon from "./Data/imgs/iconwww.png";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";

function Partners() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);
  const [target1, setTarget1] = useState(null);
  const [target2, setTarget2] = useState(null);
  // const [target3, setTarget3] = useState(null);
  const ref = useRef(null);

  const handleClick1 = (event) => {
    setShow1(!show1);
    setTarget1(event.target);
  };
  const handleClick2 = (event) => {
    setShow2(!show2);
    setTarget2(event.target);
  };
  // const handleClick3 = (event) => {
  //   setShow3(!show3);
  //   setTarget3(event.target);
  // };

  return (
    <div className="container mt-5 mb-5">
      <div className="row contactWrap border">
        <div className="col mt-3 cardFlex mb-3">
          <Card style={{ width: "18rem", boxShadow: "0 0 9px black" }}>
            <Card.Img variant="top" src={img1} className="cardsImgs" />
            <Card.Body>
              <Card.Title className="text-center">Bram Saška</Card.Title>
              <Card.Text className="partnersText">
                Poljoprivredna apoteka „Bram Saška“ sa sedištem u
                Kragujevcu,bavi se prodajom proizvoda neophodnih poljoprivrednim
                gazdinstvima.
              </Card.Text>
              <div ref={ref}>
                <Button
                  variant="success"
                  className="mt-2 mx-auto d-block btn-sm"
                  onClick={handleClick1}
                >
                  Više o nama...
                </Button>
                <Overlay
                  show={show1}
                  target={target1}
                  placement="top"
                  container={ref.current}
                  containerPadding={20}
                >
                  <Popover
                    id="popover-contained"
                    style={{
                      border: "1px solid black",
                      boxShadow: "0 0 6px black",
                    }}
                  >
                    <Popover.Title
                      as="h1"
                      style={{
                        textAlign: "center",
                        fontSize: "21px",
                        color: "red",
                      }}
                    >
                      Kontaktirajte nas!
                    </Popover.Title>
                    <Popover.Content
                      as="h3"
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                      }}
                    >
                      <div className="partnersIcons">
                        <ul className="list-group list-unstyled">
                          <li className="list-group-item">
                            <FaPhoneAlt className="mt-1" size="1.1em" />{" "}
                            034/332-278
                          </li>
                          <li className="list-group-item">
                            <AiOutlineMail size="1.8em" />{" "}
                            radicablagojevic@rocketmail.com
                          </li>
                          <li className="list-group-item">
                            <AiFillFacebook size="1.6em" /> Radica Blagojevic
                          </li>
                        </ul>
                      </div>
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col mt-3 cardFlex mb-3">
          <Card style={{ width: "18rem", boxShadow: "0 0 6px black" }}>
            <Card.Img variant="top" src={img2} className="cardsImgs" />
            <Card.Body>
              <Card.Title className="text-center">Kalem Đorđević</Card.Title>
              <Card.Text className="partnersText">
                Rasadnik „Kalem Đorđević“ iz Milutovca bavi se proizvodnjom
                sadnica voća i loznih kalema preko 50 godina.
              </Card.Text>
              <div ref={ref}>
                <Button
                  variant="success"
                  className="mt-2 mx-auto d-block btn-sm"
                  onClick={handleClick2}
                >
                  Više o nama...
                </Button>
                <Overlay
                  show={show2}
                  target={target2}
                  placement="top"
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
                        fontSize: "21px",
                        color: "red",
                      }}
                    >
                      Kontaktirajte nas!
                    </Popover.Title>
                    <Popover.Content
                      as="h3"
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                      }}
                    >
                      <div className="partnersIcons">
                        <ul className="list-group list-unstyled">
                          <li className="list-group-item">
                            <a
                              href="https://www.kalemdjordjevic.ml"
                              target="blank"
                            >
                              <img
                                src={wwwIcon}
                                style={{ width: "33px", height: "33px" }}
                                alt="wwwIcon"
                              />{" "}
                              www.kalemdjordjevic.ml
                            </a>
                          </li>
                          <li className="list-group-item">
                            <FaPhoneAlt className="mt-1" size="1.1em" />{" "}
                            064/580-44-66
                          </li>
                          <li className="list-group-item">
                            <AiOutlineMail size="1.8em" />{" "}
                            office@kalemdjordjevic.ml
                          </li>
                          <li className="list-group-item">
                            <a
                              href="https://www.facebook.com/kalemdjordjevic"
                              target="blank"
                            >
                              <AiFillFacebook size="1.6em" /> Kalem Djordjevic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <div className="col mt-3 cardFlex mb-3">
          <Card style={{ width: "18rem", boxShadow: "0 0 6px black" }}>
            <Card.Img variant="top" src={img3} className="cardsImgs" />
            <Card.Body>
              <Card.Title className="text-center">Gazdinstvo Perić</Card.Title>
              <Card.Text className="partnersText">
                Poljoprivredna apoteka „Pera Peric“ iz Milutovca bavi se
                proizvodnjom sadnica voća i loznih kalema preko 50 godina.
              </Card.Text>
              <div ref={ref}>
                <Button
                  variant="warning"
                  className="mt-2 mx-auto d-block btn-sm"
                  onClick={handleClick3}
                >
                  Više o nama...
                </Button>
                <Overlay
                  show={show3}
                  target={target3}
                  placement="top"
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
                        fontSize: "21px",
                        color: "red",
                      }}
                    >
                      Kontaktirajte nas!
                    </Popover.Title>
                    <Popover.Content
                      as="h3"
                      style={{
                        textAlign: "center",
                        fontSize: "16px",
                      }}
                    >
                      <div className="partnersIcons">
                        <ul className="list-group list-unstyled">
                          <li className="list-group-item">
                            <a href="https://www.bramsaska.rs" target="blank">
                              <img
                                src={wwwIcon}
                                style={{ width: "33px", height: "33px" }}
                                alt="wwwIcon"
                              />{" "}
                              www.perinsajt.rs
                            </a>
                          </li>
                          <li className="list-group-item">
                            <FaPhoneAlt className="mt-1" size="1.1em" />{" "}
                            034/332-278
                          </li>
                          <li className="list-group-item">
                            <AiOutlineMail size="1.8em" /> peraperic@gmail.com
                          </li>
                          <li className="list-group-item">
                            <AiFillFacebook size="1.6em" /> Pera Peric
                          </li>
                        </ul>
                      </div>
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

export default Partners;
