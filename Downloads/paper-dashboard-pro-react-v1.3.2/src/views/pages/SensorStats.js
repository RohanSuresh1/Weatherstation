import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("https://weatherapp-api.azurewebsites.net/api/User/GetAllUsers?weatherStationId=1")
      .then((response) => {
        const { data } = response;
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.emailId}</td>
              <td>{user.contactNumber}</td>
              <td>{user.roleName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
