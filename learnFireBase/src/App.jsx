import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { app } from "./firebase/FireBaseConfig";
const fireStore = getFirestore(app);
const App = () => {
  // create a function for writeData
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
    const data = await addDoc(
      collection(fireStore, "cites/H83js7LDvBhcFUvrOQWJ/places"),
      {
        name: "Place 2",
        disc: "Awsome Place 2",
        date: Date.now(),
      }
    );
    console.log("Data", data);
  };
  // create a function for getData
  const getData = async () => {
    const ref = doc(fireStore, "cites", "H83js7LDvBhcFUvrOQWJ");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };
  // create a function for query
  const getDoucments = async () => {
    const collectionRef = collection(fireStore, "user");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };
  // create a function for update documents
  const updataData = async () => {
    const docRef = doc(fireStore, "cites", "H83js7LDvBhcFUvrOQWJ");
    await updateDoc(docRef, {
      name: "New Lohore",
    });
  };
  return (
    <>
      <h1>FireStore</h1>
      <button onClick={writedata}>Put data</button>
      <button onClick={makeSubCollection}>Put Subdata</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={getDoucments}>Get Query Document</button>
      <button onClick={updataData}>Update</button>
    </>
  );
};

export default App;
