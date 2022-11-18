import React, { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  
  return (
    <div>
      <h1>Posts</h1>
      {Object.values(posts).map((p) => {
        return (
          <div className="card" key={p.id}>
            <div className="card-body">
              <h3>{p.title}</h3>
              <CommentList postId={p.id} />
              <CommentCreate postId={p.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
