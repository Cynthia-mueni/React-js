import Login from "./Login";
import Users from "./Users"; 
import { useState } from "react";

export const Introduction = ({setModelIsOpen}) => {
  const openModel=()=>{
    setModelIsOpen(true)
  }
  return(
    <button className="login" onClick={openModel}>Login</button>
  )
//   return <h1>We are adalab</h1>;
// };
  }
const App = () => {
  return (
    <div>
      <Login />
      <Users/>
    </div>
  );
};
export default App;
