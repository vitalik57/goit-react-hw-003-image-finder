import PropTypes from "prop-types";
import React from "react";
import styles from "../styles.module.css";

const Button = ({ getMore }) => (
  <>
    <button type="button" className={styles.Button} onClick={getMore}>
      Load more
    </button>
  </>
);
Button.propTypes = {
  getMore: PropTypes.func.isRequired
};
export default Button;
