import React from "react";

const Buttons = (props) => {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ marginTop: "30px" }}>
        <button className="btn btn-success mx-2 my-3" onClick={props.login}>
          Login
        </button>
        <button className="btn btn-danger mx-2 my-3" onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Buttons;
