import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
function UserList() {
    const [listUser, setListUser] = useState([{}]);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setListUser(res.data))
        .catch((err) => err);
    }, []);
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {listUser.map((el) => (
          <UserCard user={el} />
        ))}{" "}
      </div>
    );
  }
  
  export default UserList;