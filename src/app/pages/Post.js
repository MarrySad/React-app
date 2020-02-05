import React, { useState, useEffect } from "react";
import axios from "axios";
import PostProfile from "../components/Post";

const Post = props => {
  const [post, setPost] = useState({});

  useEffect(() => {axios
    .get(
      "http://jsonplaceholder.typicode.com/posts/" + props.match.params.postId
    )
    .then(response => {
      setPost(response.data);
    })
  }, []);

  return <div>{post && <PostProfile {...post} />}</div>;
}

export default Post;
