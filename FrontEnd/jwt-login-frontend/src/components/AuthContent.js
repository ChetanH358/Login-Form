// >>>>>>>>>>>> It is the protected content which needs authentication

import React, { Component } from "react";
import { request } from "./axios_helper";

export default class AuthContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["first", "second "],
    };
  }

  componentDidMount() {
    request("GET", "/messages", {}).then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="card my-3" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title">Backend Response</h5>
            <p className="card-text">Content : </p>
            {this.state.data &&
              this.state.data.map((line, index) => <p key={index}>{line}</p>)}
          </div>
        </div>
      </div>
    );
  }
}
