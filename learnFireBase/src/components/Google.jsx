import React from "react";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {app} from "../firebase/FireBaseConfig"
const auth =getAuth(app)
const provider=new GoogleAuthProvider()
const Google = () => {
    const googleUser=()=>{
        signInWithPopup(auth,provider)
    }
  return (
    <>
      <div>Google</div>
      <button onClick={googleUser}> SignIn with Google</button>
    </>
  );
};

export default Google;
