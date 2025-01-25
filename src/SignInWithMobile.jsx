import { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "./assets/2869279.jpg";
import "./SignInWithMobile.css";

const countryCodes = [
  { code: "+1", country: "USA", flagUrl: "https://flagcdn.com/us.svg" },
  { code: "+91", country: "India", flagUrl: "https://flagcdn.com/in.svg" },
  { code: "+44", country: "UK", flagUrl: "https://flagcdn.com/gb.svg" },
  { code: "+61", country: "Australia", flagUrl: "https://flagcdn.com/au.svg" },
  { code: "+81", country: "Japan", flagUrl: "https://flagcdn.com/jp.svg" },
  { code: "+86", country: "China", flagUrl: "https://flagcdn.com/cn.svg" },
  { code: "+49", country: "Germany", flagUrl: "https://flagcdn.com/de.svg" },
  { code: "+33", country: "France", flagUrl: "https://flagcdn.com/fr.svg" },
  { code: "+7", country: "Russia", flagUrl: "https://flagcdn.com/ru.svg" },
  { code: "+55", country: "Brazil", flagUrl: "https://flagcdn.com/br.svg" },
  { code: "+39", country: "Italy", flagUrl: "https://flagcdn.com/it.svg" },
  { code: "+34", country: "Spain", flagUrl: "https://flagcdn.com/es.svg" },
  { code: "+27", country: "South Africa", flagUrl: "https://flagcdn.com/za.svg" },
  { code: "+52", country: "Mexico", flagUrl: "https://flagcdn.com/mx.svg" },
  { code: "+62", country: "Indonesia", flagUrl: "https://flagcdn.com/id.svg" },
  { code: "+82", country: "South Korea", flagUrl: "https://flagcdn.com/kr.svg" },
  { code: "+34", country: "Argentina", flagUrl: "https://flagcdn.com/ar.svg" },
  { code: "+60", country: "Malaysia", flagUrl: "https://flagcdn.com/my.svg" },
  { code: "+234", country: "Nigeria", flagUrl: "https://flagcdn.com/ng.svg" },
  { code: "+31", country: "Netherlands", flagUrl: "https://flagcdn.com/nl.svg" }
];

const SignInWithMobile = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[1]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setError("");
    } else {
      setError("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleSendOtp = () => {
    if (mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
    } else {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000);
      alert(`OTP sent to ${selectedCountry.code} ${mobileNumber}: ${generatedOtp}`);
      setError("");

      navigate("/verify-otp", {
        state: {
          mobileNumber: `${selectedCountry.code} ${mobileNumber}`,
        },
      });
    }
  };

  return (
    <div className="container">
      <div className="logo">1P</div>
      <h2 className="title">Sign in with mobile number</h2>
      <p className="description">
        1/Pass ensures only authenticated and verified hosts are able to invite visitors.
      </p>
      <img src={illustration} alt="Illustration" className="illustration" />
      <div className="form">
        <div className="inputGroup">
          <div className="dropdownWrapper">
            <div className="countryDisplay">
              <img
                src={selectedCountry.flagUrl}
                alt={`${selectedCountry.country} Flag`}
                className="flagIcon"
              />
              <select
                className="countryDropdown"
                value={selectedCountry.code}
                onChange={(e) => {
                  const selectedCode = e.target.value;
                  const country = countryCodes.find((item) => item.code === selectedCode);
                  setSelectedCountry(country);
                }}
              >
                {countryCodes.map((item, index) => (
                  <option key={index} value={item.code}>
                    {item.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input
            type="text"
            placeholder="1234567890"
            value={mobileNumber}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={handleSendOtp} className="button">
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default SignInWithMobile;
