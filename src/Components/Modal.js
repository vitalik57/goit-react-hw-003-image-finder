import React, { Component } from "react";

import styles from "../styles.module.css";
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.closeModal);
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.props.closeModal}>
        <div className={styles.Modal}>
          <img src={this.props.largeImage} alt="sac" width="480px" height="320px" />
        </div>
      </div>
    );
  }
}

export default Modal;
