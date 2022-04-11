import {FiUser} from "react-icons/fi";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {RiLockPasswordLine} from "react-icons/ri";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup />} />
         <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
