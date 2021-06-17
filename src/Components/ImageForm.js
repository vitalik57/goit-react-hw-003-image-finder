import React from "react";
import styles from "../styles.module.css";
import PropTypes from "prop-types";

const ImageForm = ({ handlSubmit, handlChange }) => {
  return (
    <form className={styles.SearchForm} onSubmit={handlSubmit}>
      <button type="submit" className={styles.form}>
        <span className={styles.label}>Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handlChange}
      />
    </form>
  );
};
ImageForm.propTypes = {
  handlSubmit: PropTypes.func.isRequired,
  handlChange: PropTypes.func.isRequired
};
export default ImageForm;
