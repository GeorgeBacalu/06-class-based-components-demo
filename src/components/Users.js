import { useState } from "react";
import classes from "./Users.module.css";
import User from "./User";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => setShowUsers(prevState => !prevState);

  const usersList = (
    <ul>
      {DUMMY_USERS.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>{showUsers ? "Hide" : "Show"} Users</button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
