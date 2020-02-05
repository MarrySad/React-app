import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UsersList = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users/")

      .then(response => {
        setUsers(response.data);
      });
  }, []);

  if (!users.length) {
    return null;
  }

  const usersForRender = users.map((user, index) => {
    return <User key={index} {...user} />;
  });

  return (
    <>
      <h1>Статьи</h1>
      {usersForRender}
    </>
  );
};

export default UsersList;
