/* Code Snippet */

import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/bg/damir-bosnjak.jpg")}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Rohan</h5>
                  </a>
                  <p className="description">@Rohan</p>
                </div>
                <p className="description text-center" style={{ color: "black" }}>
                  "In the middle of every difficulty lies opportunity." <br />
                </p>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>First Name</strong>
                        </label>
                        <Input
                          defaultValue="Rohan"
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>Last Name</strong>
                        </label>
                        <Input
                          defaultValue="S"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          <strong style={{ color: "black" }}>Email Address</strong>
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>Address</strong>
                        </label>
                        <Input
                          defaultValue="Bengaluru, Karnataka"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>City</strong>
                        </label>
                        <Input
                          defaultValue="Bengaluru"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>Country</strong>
                        </label>
                        <Input
                          defaultValue="India"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>Postal Code</strong>
                        </label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>
                          <strong style={{ color: "black" }}>About Me</strong>
                        </label>
                        <Input
                          className="textarea"
                          type="textarea"
                          cols="80"
                          rows="4"
                          defaultValue="Why don't skeletons fight each other? They don't have the guts!"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
