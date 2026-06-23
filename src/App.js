import "./style.css";
import Home from "./components/Home";
import Policy from "./components/Policy";
import Terms from "./components/Terms";
import DeleteAccount from "./components/DeleteAccount";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home page set as default for the root path */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
