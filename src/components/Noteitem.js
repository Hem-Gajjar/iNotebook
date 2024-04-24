import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 ">
      <div class="card my-2">
        <div class="card-body">
          <h2 class="card-title">{note.title}</h2>
          <p class="card-text">
            {" "}
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis optio eaque officiis ad aliquid. Non
            repellendus hic quia veritatis cumque.
          </p>
          <a href="#" class="btn btn-primary mx-1">
            Edit
          </a>
          <a href="#" class="btn btn-danger mx-1">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
