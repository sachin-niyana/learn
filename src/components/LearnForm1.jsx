import React, { useState } from "react";

const LearnForm1 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const formSubmission = (event) => {
    event.preventDefault();
    console.log(name, password);
    setName("");
    setPassword("");
  };
  function nameOnchange(e) {
    setName(e.target.value);
  }
  return (
    <form
      onSubmit={formSubmission}
      className="py-5 d-flex gap-3 container mt-5"
    >
      <input
        placeholder="Name"
        type="name"
        value={name}
        onChange={nameOnchange}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="Submit" />
    </form>
  );
};

export default LearnForm1;
