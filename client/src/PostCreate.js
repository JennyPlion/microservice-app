import React, { useState } from "react";
import axios from "axios";

function PostCreate() {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3002/posts", {
      title,
    });

    setTitle("");
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Create post</h1>
      <div className="form-group">
        <label>Title</label>
        <br></br>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
        <br></br>
        <br></br>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default PostCreate;
