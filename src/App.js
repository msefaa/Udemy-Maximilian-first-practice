import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Header />
      <User setUsers={setUsers} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
