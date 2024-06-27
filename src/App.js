import { useAuthState } from "react-firebase-hooks/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ChatBox from "./components/Chat";
import NavBar from "./components/NavBar";
import SendMessage from "./components/SendMessage";
import Message from "./components/Message";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Welcome" element={<Welcome />}></Route>
          <Route path="/Chat" element={<ChatBox />}></Route>
          <Route path="/NavBar " element={<NavBar />}></Route>
          <Route path="/SendMessage" element={<SendMessage />}></Route>
          <Route path="/Chat" element={<ChatBox />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
