import "./App.css";
import LoginPage from "./Pages/LoginPage";
import Genre from "./Pages/Genre";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/genre" element={<Genre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
