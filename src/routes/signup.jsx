import { Link } from "react-router-dom";
import AnabasisLogo from "../assets/anabasis.svg";
import FormInput from "../components/FormInput";
import { useState } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignupPage = () => {
  const [formState, setFormState] = useState(initialFormState);
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };
  return (
    <main className="flex justify-center items-center bg-dark w-screen h-screen">
      <form
        className="bg-white h-2/3 w-1/3 text-center flex flex-col items-center rounded-lg shadow-lg"
        onSubmit={handleSignup}
      >
        <header className="mt-8 mb-4">
          <img
            className="m-auto"
            src={AnabasisLogo}
            alt="Anabasis logo"
            height="60"
            width="60"
          />
          <h1 className="text-2xl font-bold m-2">Signup</h1>
          <p>Signup now to organize your job search</p>
        </header>
        <FormInput
          type="text"
          label="First Name"
          placeholder=""
          onChange={handleFormChange}
          name="firstName"
          value={formState.firstName}
          autoComplete="given-name"
        />
        <FormInput
          type="text"
          label="Last Name"
          placeholder=""
          onChange={handleFormChange}
          name="lastName"
          value={formState.lastName}
          autoComplete="family-name"
        />

        <FormInput
          type="email"
          label="Email"
          placeholder=""
          onChange={handleFormChange}
          name="email"
          value={formState.email}
          autoComplete="email"
        />
        <FormInput
          type="password"
          label="Password"
          placeholder=""
          onChange={handleFormChange}
          name="password"
          value={formState.password}
          autoComplete="new-password"
        />
        <button className="bg-primary text-white w-3/4 m-1">Signup</button>
        <span className="border-t w-full mt-auto p-4 font-semibold">
          {`Already have an account? `}
          <Link to={"/signin"}>Signin instead</Link>
        </span>
      </form>
    </main>
  );
};
export default SignupPage;
