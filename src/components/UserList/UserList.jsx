import React from "react";
import styles from "./UserList.module.css";
function UserList({ users }) {
  return (
    <div className={styles.mainBody}>
      <div className={styles.users}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{`${user.username}(${user.age} years old)`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
