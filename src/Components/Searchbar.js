import React, { Component } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import ImageForm from "./ImageForm";
import Button from "./Button";
import Modal from "./Modal";
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// 21154603-c9a2e40d899ce118beef17ceb
class Searchbar extends Component {
  state = {
    inputValue: "",
    images: [],
    pages: 1,
    showModal: false,
    isModalOpen: false,

    largeImage: ""
  };

  closeModal = e => {
    if (e.target.nodeName !== "IMG" || e.key === "Escape") {
      this.setState({ showModal: false });
    }
  };
  toogleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  handlChange = e => {
    this.setState({
      inputValue: e.currentTarget.value
    });
  };
  handlSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.inputValue}&page=1
        &key=21154603-c9a2e40d899ce118beef17ceb&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState({
          images: response.data.hits
        });
      });
    // handlChange();
    // this.props.onSubmit(this.state.inputValue);
    // this.setState({ inputValue: "" });
  };
  getMore = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.pages +
          1}&key=21154603-c9a2e40d899ce118beef17ceb&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          pages: prevState.pages + 1
        }));
      });
  };
  getImage = largeImage => {
    this.setState({
      largeImage: largeImage
    });
    this.toogleModal();
  };
  render() {
    const { images, showModal } = this.state;
    return (
      <header className="Searchbar">
        <ImageForm handlChange={this.handlChange} handlSubmit={this.handlSubmit} />
        <ImageGallery images={images} getImage={this.getImage} />
        <Button getMore={this.getMore} />
        {showModal && (
          <Modal closeModal={this.closeModal} largeImage={this.state.largeImage}>
            image
          </Modal>
        )}
      </header>
    );
  }
}

export default Searchbar;
