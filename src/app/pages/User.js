import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "../components/User";

const User = props => {
  const [user, setUser] = useState({});

  useEffect(() => {axios.get("http://jsonplaceholder.typicode.com/users/" + props.match.params.userId)
      .then(response => {
        setUser(response.data);
      });
  }, []);

  return <div>{user && <UserProfile {...user} />}</div>;
};

export default User;
