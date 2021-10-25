import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");

    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      console.log("Escape button pressed, closing Modal Window");

      this.props.onClose();
    }
  };

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");

    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleBackdropClick = (event) => {
    console.log("Кликнули в бэкдроп");

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
