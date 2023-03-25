import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./User.module.css";
function User({ setUsers }) {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.username.length > 0 && user.age.length > 0) {
      setUsers((prev) => {
        return [...prev, user];
      });
    }
    if (user.username === "") {
      setError({
        title: "Missing username",
        message: "Please enter a username(non-empty values)",
      });
      return;
    }
    if (user.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(age>0)",
      });
      return;
    }
    setUser({
      username: "",
      age: "",
    });
  };
  return (
    <div className={styles.mainBody}>
      {error && <Modal setError={setError} error={error} />}
      <div className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={user.username}
            onChange={(e) =>
              setUser({
                ...user,
                username: e.target.value,
                id: Math.random().toString(),
              })
            }
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
          />
          <button
            className={styles.button}
            type="submit"
            // disabled={user.username === "" || user.age === ""}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default User;
