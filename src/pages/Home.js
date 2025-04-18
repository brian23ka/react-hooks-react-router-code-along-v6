import React from "react";
import UserCard from "../UserCard";

function Home() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  return (
    <div>
      <h1>Home</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Home;
