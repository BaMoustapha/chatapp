import { useAuthState } from "react-firebase-hooks/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ChatBox from "./components/Chat";
import NavBar from "./components/NavBar";
import SendMessage from "./components/SendMessage";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
      <Router>
        <Routes>
          <Route path="/" element={<ChatBox />} />
          <Route path="/Welcome" element={<Welcome />}></Route>
          <Route path="/Chat" element={<ChatBox />}></Route>
          <Route path="/NavBar " element={<NavBar />}></Route>
          <Route path="/SendMessage" element={<SendMessage />}></Route>
          <Route path="/Message" element={<Message />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
