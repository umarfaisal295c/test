import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase/FireBaseConfig";
const fireStore = getFirestore(app);
const App = () => {
  const writedata = async () => {
    const result = await addDoc(collection(fireStore, "cites"), {
      name: "Lahore",
      pinCode: 42,
      lat: 1234,
      lang: 1212,
    });
    console.log("Result", result);
  };
  // create a function for subCollection
  const makeSubCollection = async () => {
   const data= await addDoc(collection(fireStore, "cites/H83js7LDvBhcFUvrOQWJ/places"), {
      name: "Place 1",
      disc: "Awsome Place 1",
      date: Date.now(),
    });
    console.log("Data",data);
  };
  return (
    <>
      <h1>FireStore</h1>
      <button onClick={writedata}>Put data</button>
      <button onClick={makeSubCollection}>Put Subdata</button>
    </>
  );
};

export default App;
