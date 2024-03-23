import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/FireBaseConfig";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  // create a function for creating signin user.
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Success"))
      .catch((err) => console.log(err, "failed"));
  };
  return (
    <>
      <h1>Signin</h1>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={signInUser}>Sign In User</button>
    </>
  );
};

export default Signin;
