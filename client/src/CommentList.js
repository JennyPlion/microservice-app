import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentList({ postId }) {
  const [comments, setComments] = useState("");
  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:3001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return Object.values(comments).map((c) => (
    <ul>
      <li key={c.id}>{c.content}</li>
    </ul>
  ));
}

export default CommentList;
