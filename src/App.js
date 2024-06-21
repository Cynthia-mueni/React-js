import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import LoginLink from "./LoginLink";

export function Introduction() {
  // const openModel=()=>{
  // setModelIsOpen(true)

  return (
    // <button className="login" onClick={openModel}>Login</button>

    <h1>{/* We are adalab */}</h1>
    // };
  );
}
function App() {
  return (
    <div>
      <LoginLink />
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Login /> */}
        {/* <Users/> */}
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  );
}
export default App;
