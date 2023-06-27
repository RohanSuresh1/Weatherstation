import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function ExtendedTables() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://weatherapp-api.azurewebsites.net/api/User/GetAllUsers?weatherStationId=1")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Email</th>
                      <th className="text-right">Role</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.userId}>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.contactNumber}</td>
                        <td>{user.emailId}</td>
                        <td className="text-right">{user.roleName}</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="info"
                            id={`tooltipLike${user.userId}`}
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target={`tooltipLike${user.userId}`}
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="success"
                            id={`tooltipEdit${user.userId}`}
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target={`tooltipEdit${user.userId}`}
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id={`tooltipDelete${user.userId}`}
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target={`tooltipDelete${user.userId}`}
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ExtendedTables;
