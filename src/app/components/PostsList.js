import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const PostsList = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/")

      .then(response => {
        setPosts(response.data);
      });
  }, []);

  if (!posts.length) {
    return null;
  }

  const postsForRender = posts.map((post, index) => {
    return <Post key={index} {...post} />;
  });

  return (
    <>
      <h1>Статьи</h1>
      {postsForRender}
    </>
  );
};

export default PostsList;
