import "./App.css";
import Google from "./components/Google";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <h1>FireBase</h1>
      <Signup />
      <br />
      <Signin />
      <Google />
    </>
  );
}

export default App;
