import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import lockImage from "./assets/6310507.jpg";
import "./OTPPage.css";

const OTPPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(59);
  const navigate = useNavigate();
  const location = useLocation();

  const mobileNumber = location.state?.mobileNumber || "999 999 9999";

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.some((digit) => digit === "")) {
      setError("Please complete the 6-digit OTP before submitting.");
    } else {
      setError("");
      alert(`Entered OTP: ${otp.join("")}`);
      navigate("/dashboard");
    }
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setTimer(59);
    alert("OTP Resent!");
  };

  return (
    <div className="otp-container">
      <div className="logo">1P</div>
      <h3>Enter OTP</h3>
      <div className="num">Enter the OTP sent to your mobile number {mobileNumber}</div>
      <img src={lockImage} alt="Lock Illustration" className="lock-image" />
      <p className="terms">
        By submitting the OTP, you agree to our <a href="#">Terms and Conditions</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </p>
      <div className="otp-inputs">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
      {error && <div className="error">{error}</div>}
      <p>
        0:{timer.toString().padStart(2, "0")} sec left
        <button disabled={timer !== 0} onClick={handleResend} className="resend-btn">
          Resend OTP
        </button>
      </p>
      <button onClick={handleSubmit} className="submit-btn">
        Submit OTP
      </button>
    </div>
  );
};

export default OTPPage;
