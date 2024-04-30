import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const { search } = props;
  if (search !== "" && search === note.tag) {
    return (
      <div className="col-md-3 ">
        <div className="card my-2" style={{ border: "2px solid black" }}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between ">
              <h2 className="card-title">{note.title}</h2>
              <div className="icons d-flex ">
                <i
                  className="fa-solid fa-trash-can mx-2"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "danger");
                  }}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square mx-2"
                  onClick={() => {
                    updateNote(note);
                  }}
                ></i>
              </div>
            </div>
            <p className="card-text"> {note.description}</p>
            <p className="card-text ">{note.tag}</p>
            <p>{note.timestamp}</p>
          </div>
        </div>
      </div>
    );
  } else if (search === "all" || search === "") {
    return (
      <div className="col-md-3 ">
        <div className="card my-2" style={{ border: "2px solid black" }}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between ">
              <h2 className="card-title">{note.title}</h2>
              <div className="icons d-flex ">
                <i
                  className="fa-solid fa-trash-can mx-2"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "danger");
                  }}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square mx-2"
                  onClick={() => {
                    updateNote(note);
                  }}
                ></i>
              </div>
            </div>
            <p className="card-text"> {note.description}</p>
            <p className="card-text ">
              {note.tag === "All" ? "General" : note.tag}
            </p>
            <p>{note.timestamp}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Noteitem;
