import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInWithMobile from "./SignInWithMobile";
import OTPPage from "./OTPPage";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInWithMobile />} />
        <Route path="/verify-otp" element={<OTPPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
