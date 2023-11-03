import { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import axios from "axios";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="user-list">
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>
              <SingleUser user={user} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
