import React from "react";
import styles from "./Modal.module.css";
function Modal({ setError, error }) {
  const modalHandler = () => {
    setError();
  };
  return (
    <div>
      <div className={styles.backdrop} onClick={modalHandler} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{error.message}</p>
        </div>
        <footer className={styles.actions}>
          <button className={styles.button} onClick={modalHandler}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
