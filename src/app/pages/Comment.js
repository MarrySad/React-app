import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentProfile from "../components/Comment";

const Comment = props => {
    const [comment, setComment] = useState({});

  useEffect(() => {axios.get("http://jsonplaceholder.typicode.com/comments/" +
        props.match.params.commentId
    )
    .then(response => {
      setComment(response.data);
    });
  }, []);

  return (
    <div>
      {comment && <CommentProfile {...comment} />}
    </div>
  );
}

export default Comment;
