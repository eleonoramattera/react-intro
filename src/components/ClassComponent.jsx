import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <p style={{ margin: "0" }}> {this.props.content}</p>;
  }
}
export default ClassComponent;
