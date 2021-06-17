import React from "react";
import styles from "../styles.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, getImage }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {images.map(({ id, previewURL, largeImageURL }) => (
          <li key={id} className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItemimage} onClick={() => getImage(largeImageURL)} src={previewURL} alt="rg" />
            {/* <a href={pageURL}>{id}</a> */}
          </li>
        ))}
      </ul>
    </>
    //         <ul className="ImageGallery">
    //   <!-- Набор <li> с изображениями -->
    // </ul>
  );
};
ImageGallery.propTypes = {
  getImage: PropTypes.func.isRequired,
  images: PropTypes.string.isRequired
};
export default ImageGallery;
