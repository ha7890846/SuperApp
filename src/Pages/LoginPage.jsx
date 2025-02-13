import { useState } from "react";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    checkbox: false,
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    username: false,
    mobile: false,
    checkbox: false,
  });

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      username: "",
      mobile: "",
      checkbox: false,
    });
  }
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError({
    name: false,
    email: false,
    username: false,
    mobile: false,
    checkbox: false,
    })
    if(formData.name.trim().length === 0){
      setError((error) => {return{...error, name:true}});
      return;
    }
    if(formData.email.trim().length === 0){
      setError((error) => {return{...error, email:true}});
      return;
    }
    if(formData.username.trim().length === 0){
      setError((error) => {return{...error, username:true};});
      return;
    }
    if(formData.mobile.trim().length === 0){
      setError((error) => {return{...error, mobile:true}});
      return;
    }

    if(formData.checkbox == false){
      setError((error) => {return{...error, checkbox:true}});
      return;
    }
    clearForm();
    localStorage.setItem("user", JSON.stringify(formData));
    toast.success("User Registered Successfully");
    navigate("/genre");
  };

  
  return (
    // Main Container
    <div
      style={{
        display: "flex",
        alignContent: "center",
        maxHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Left side of the page */}
      <div className="login-poster" style={{ width: "50%", position: "relative" }}>
        <img src="./movie.jpg" alt="side image" />
        <h1
          style={{
            position: "absolute",
            bottom: "5vh",
            left: "3vw",
            background: "transparent",
            fontSize: "3rem",
          }}
        >
          Discover New Things with <br /> Super App
        </h1>
      </div>

      {/* Right side of the page */}
      <div className="login-form">
        <h1
          style={{
            fontFamily: "Single Day",
            color: "green",
            fontSize: "2.5rem",
            fontWeight: "bolder",
          }}
        >
          Super App
        </h1>
        <h2>Create Your New Account</h2>
        <form 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input type="text" placeholder="*Enter Your Name"  value={formData.name}  onChange={(e)=>setFormData({...formData, name: e.target.value})}/>
          {error.name && <p style={{color: "red"}}>Name is required</p>}
          <input type="text" placeholder="*Enter UserName"  value={formData.username} onChange={(e)=>setFormData({...formData, username: e.target.value})}/>
          {error.username && <p style={{color: "red"}}>Username is required</p>}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="*Enter Your Email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
          />
          {error.email && <p style={{color: "red"}}>Email is required</p>}
          <input type="text" placeholder="*Enter Mobile Number" value={formData.mobile} onChange={(e)=>setFormData({...formData, mobile: e.target.value})}/>
          {error.mobile && <p style={{color: "red"}}>Mobile Number is required</p>}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              marginTop: "1vh",
            }}
          >
            <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={(e)=>setFormData({...formData, checkbox: e.target.checked})}/>
            <label htmlFor="checkbox">
              I agree to the{" "}
              <span style={{ color: "blue" }}>term of services</span> and{" "}
              <span style={{ color: "blue" }}>privacy policy</span>
            </label>
            <br />
            {error.checkbox && <p style={{color: "red"}}>Please agree to the terms and conditions</p>}
          </div>

          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "1rem",
              fontSize: "1.2rem",
              borderRadius: "30px",
              border: "none",
              width: "50%",
              marginTop: "2vh",
            }}
            onClick={handleFormSubmit}
          >
            Sign Up
          </button>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "1vh",
              color: "gray",
              width: "50%",
            }}
          >
            By clicking the Sign Up button, you agree to our{" "}
            <span style={{ color: "blue" }}>Terms & Conditions</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "1vh",
              color: "gray",
              width: "50%",
            }}
          >
            To learn more about how we collect, use, share and protect your
            personal data please read our{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
