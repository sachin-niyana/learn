import React, { useState } from "react";

const Learnform2 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, password);
  return (
    <div>
      <form className="mt-2 d-flex gap-3 container">
        <input
          placeholder="email"
          type="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Learnform2;
