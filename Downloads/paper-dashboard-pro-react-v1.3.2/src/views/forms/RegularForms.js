/*!

=========================================================
* Paper Dashboard PRO React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";

function RegularForms() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Form Elements</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" className="form-horizontal" method="get">
                  <Row>
                    <Label sm="2">With help</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                        <FormText color="default" tag="span">
                          A block of help text that breaks onto a new line.
                        </FormText>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Password</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="password" autoComplete="off" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Placeholder</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input placeholder="placeholder" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Disabled</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input
                          defaultValue="Disabled input here.."
                          disabled
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Static control</Label>
                    <Col sm="10">
                      <FormGroup>
                        <p className="form-control-static">
                          hello@creative-tim.com
                        </p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Checkboxes and radios</Label>
                    <Col className="checkbox-radios" sm="10">
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />
                          First Checkbox
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />
                          Second Checkbox
                        </Label>
                      </FormGroup>
                      <div className="form-check-radio">
                        <Label check>
                          <Input
                            defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio"
                          />
                          First Radio <span className="form-check-sign" />
                        </Label>
                      </div>
                      <div className="form-check-radio">
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue="option2"
                            id="exampleRadios12"
                            name="exampleRadioz"
                            type="radio"
                          />
                          Second Radio <span className="form-check-sign" />
                        </Label>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Inline checkboxes</Label>
                    <Col sm="10">
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox" />
                          <span className="form-check-sign" />a
                        </Label>
                      </FormGroup>{" "}
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />b
                        </Label>
                      </FormGroup>{" "}
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />c
                        </Label>
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

export default RegularForms;
