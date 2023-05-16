import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book!</h3>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input className="input" value={title} onChange={titleHandler} />
        <button className="input">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
