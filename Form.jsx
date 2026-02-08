import { useState } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  countryCode: "+91",
  phone: "",
  country: "",
  city: "",
  pan: "",
  aadhaar: ""
};

export default function Form() {
  const [data, setData] = useState(init);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const errors = {
    firstName: data.firstName && !data.firstName,
    lastName: data.lastName && !data.lastName,
    username: data.username && !data.username,
    email: data.email && !/^\S+@\S+\.\S+$/.test(data.email),
    password:
      data.password &&
      !/^(?=.*[0-9])(?=.*[@$!%*#?&]).{6,}$/.test(data.password),
    phone: data.phone && data.phone.length !== 10,
    pan: data.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(data.pan),
    aadhaar: data.aadhaar && data.aadhaar.length !== 12
  };

  const valid =
    data.firstName &&
    data.lastName &&
    data.username &&
    /^\S+@\S+\.\S+$/.test(data.email) &&
    /^(?=.*[0-9])(?=.*[@$!%*#?&]).{6,}$/.test(data.password) &&
    data.phone.length === 10 &&
    /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(data.pan) &&
    data.aadhaar.length === 12;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (valid) navigate("/success", { state: data });
  };

  return (
    <form className="form-container" onSubmit={submit}>
      <h2> Registration Form</h2>
      <p className="form-subtitle">Fill all details carefully</p>

      <div className="grid">
        <div className="input-group">
          <label>First Name</label>
          <input name="firstName" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input name="lastName" onChange={handleChange} />
        </div>
      </div>

      <div className="input-group">
        <label>Username</label>
        <input name="username" onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
          className={errors.email ? "soft-error" : ""}
        />
      </div>

      <div className="input-group password-wrapper">
        <label>Password</label>
        <input
          type={show ? "text" : "password"}
          name="password"
          onChange={handleChange}
          className={errors.password ? "soft-error" : ""}
        />
        <span className="toggle" onClick={() => setShow(!show)}>
          {show ? "🐵" : "👁️"}
        </span>

        {errors.password && (
          <p className="password-error">
            Password must contain at least 1 number & 1 special character
            (@ # $ %)
          </p>
        )}
      </div>

      <div className="phone-row">
        <select name="countryCode" onChange={handleChange}>
          <option>+91</option>
          <option>+1</option>
          <option>+44</option>
        </select>
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className={errors.phone ? "soft-error" : ""}
        />
      </div>

      <div className="grid">
        <div className="input-group">
          <label>Country</label>
          <input name="country" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>City</label>
          <input name="city" onChange={handleChange} />
        </div>
      </div>

      <div className="grid">
        <div className="input-group">
          <label>PAN</label>
          <input
            name="pan"
            onChange={handleChange}
            className={errors.pan ? "soft-error" : ""}
          />
        </div>

        <div className="input-group">
          <label>Aadhaar</label>
          <input
            name="aadhaar"
            onChange={handleChange}
            className={errors.aadhaar ? "soft-error" : ""}
          />
        </div>
      </div>

      <button disabled={!valid}>Submit</button>
    </form>
  );
}
