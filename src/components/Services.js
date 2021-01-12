import React from "react";
import { Accordion, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import img1 from "./Data/imgs/img1.jpg";
import img2 from "./Data/imgs/img2.jpg";
import img3 from "./Data/imgs/img3.jpg";
import img5 from "./Data/imgs/img5.jpg";
import img6 from "./Data/imgs/img6.jpg";
// import img7 from "./Data/imgs/img7.jpg";
import img8 from "./Data/imgs/img8.jpg";
// import img9 from "./Data/imgs/img9.jpg";
import img10 from "./Data/imgs/img10.jpg";
// import img11 from "./Data/imgs/img11.jpg";
import img12 from "./Data/imgs/img12.jpg";
import img13 from "./Data/imgs/img13.jpg";
// import img14 from "./Data/imgs/img14.jpg";
import img15 from "./Data/imgs/img15.jpg";
import img16 from "./Data/imgs/img16.jpg";
import img17 from "./Data/imgs/img17.jpg";
import img18 from "./Data/imgs/img18.jpg";
import img20 from "./Data/imgs/img20.jpg";
import img21 from "./Data/imgs/img21.jpg";
import img22 from "./Data/imgs/img22.jpg";

function Services() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-10 offset-1 contactWrap border">
          <Accordion className="mt-3 mb-3">
            <Card className="text-center accordionCard">
              <Card.Header className="border">
                <Accordion.Toggle
                  className="btnServices"
                  as={Button}
                  variant="outline-light"
                  size="lg"
                  block
                  eventKey="0"
                  style={{ backgroundColor: "rgb(105, 175, 105)" }}
                >
                  Podizanje novih zasada i održavanje postojećih
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="accFont btnServices">
                    Kompletna usluga u vidu odabira parcele, uzimanje uzoraka
                    zemljišta, odabira sortimenta, rasporeda sadnje, održavanja
                    postojećih zasada, pravljenje plana prehrane i zaštite
                    izabranog voća, rezidba voća i obilazak samih voćnjaka.
                  </p>
                  <p className="accFont btnServices text-danger">
                    Kod podizanja novih zasada vršimo usluge:
                  </p>
                  <p className="accFont btnServices">
                    <span className="text-danger">A.</span> Izrada Projekta (2D
                    prikaz i Biznis plan) u koje spada:
                  </p>
                  <ul className="list-group-flush list-unstyled accFont btnServices">
                    <li className="list-group-item">
                      <span className="text-danger">1.</span> Posmatranje i
                      odabir željene parcele (ekspozicija i nagib).
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">2.</span> Određivanje tipa
                      zemljišta (mehaničko i hemijskog sastava).
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">3.</span> Geometarski premer
                      parcele i pozicioniranje sadnih mesta (uknjižba parcele u
                      katastar nepokretnosti).
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">4.</span> Postavljanje
                      sistema za navodnjavanje.
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">5.</span> Preporuka izbora
                      gajenja željene vrste (sertifikovane i zdrastveno ispravne
                      sadnice).
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">6.</span> Prisustvo u toku
                      sadnje.
                    </li>
                  </ul>
                  <p className="accFont btnServices">
                    <span className="text-danger">B.</span> Redovno održavanje
                    zasada (rezidba, izrada plana prihrane i zaštite date
                    vrste). Kod održavanja već postojećih zasada vršimo usluge:
                  </p>
                  <ul className="list-group-flush list-unstyled accFont btnServices">
                    <li className="list-group-item">
                      <span className="text-danger">1.</span> Izrade plana
                      prihrane i zaštite.
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">2.</span> Rezidbe voća.
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">3.</span> Redovne kontrole i
                      obilaska zasada.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="text-center accordionCard">
              <Card.Header className="border">
                <Accordion.Toggle
                  className="btnServices"
                  as={Button}
                  variant="outline-light"
                  size="lg"
                  block
                  eventKey="1"
                  style={{ backgroundColor: "rgb(105, 175, 105)" }}
                >
                  Online savetovanje
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="accFont btnServices">
                    Komunikacija putem Viber-a, Skype-a, Zoom-a, Microsoft
                    times-a, u sistemu jedan na jedan ili organizovanje
                    radionica sa više učesnika.
                  </p>
                  <p className="accFont btnServices">
                    Kako biste se posavetovali sa nama potrebno je popuniti
                    kratku anketu na nasoj stranici za{" "}
                    <Link to="/consultation">konsultacije</Link>.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 contactWrap border mt-4">
          <Carousel
            className="mt-3 mb-3"
            prevIcon={
              <span
                aria-hidden="true"
                className="carousel-control-prev-icon carouselControl"
              />
            }
            nextIcon={
              <span
                aria-hidden="true"
                className="carousel-control-next-icon carouselControl"
              />
            }
          >
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img1} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img2} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img3} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img6} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img5} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img8} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img10} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img12} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img13} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img15} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img16} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img17} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img18} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img20} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img21} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img22} alt="vocnjak" />
              <Carousel.Caption>
                <h5>Agronom S</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row mt-4">
        <About />
      </div>
    </div>
  );
}

export default Services;
