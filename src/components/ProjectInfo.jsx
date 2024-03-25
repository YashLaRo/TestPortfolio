import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Form } from 'react-bootstrap';
import MLpic from '../components/MLpic.jpg';

export function ProjectInfo() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <section id='projects' className='mt-10 mx-20 px-5'>  
           <div>
            <h2 className='text-center '>Projects</h2>
          </div>
          <div className='mx-5 mt-5'>
            <div className="row">
              <Slider {...settings}>
                <div className="col-md-3">
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={MLpic} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>

                  </Card>

                </div>
                <div className="col-md-3">
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={MLpic} />
                    <Card.Body>
                      <Card.Title className='text-center'>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button className='mx-5 ' variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={MLpic} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-3">
                  <div className="card" style={{ width: '17rem' }}>
                    <img src={MLpic} className="card-img-top" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div> 
        </section>

    );
}