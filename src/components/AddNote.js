import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3 ">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={note.title}
            onChange={onChange}
            style={{ border: "2px solid black" }}
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            value={note.description}
            onChange={onChange}
            style={{ border: "2px solid black" }}
            type="text"
            className="form-control"
            id="description"
            name="description"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          {/* <input
            value={note.tag}
            onChange={onChange}
            style={{ border: "2px solid black" }}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            minLength={5}
            required
          /> */}
          <select
            className="form-select"
            aria-label="Default select example"
            value={note.tag}
            onChange={onChange}
            style={{ border: "2px solid black" }}
            type="text"
            id="tag"
            name="tag"
            minLength={5}
            required
          >
            <option>Select tag</option>
            <option value="All">All</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
          </select>
        </div>

        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn btn-dark cursor-pointer "
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
