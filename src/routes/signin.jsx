import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import AnabasisLogo from "../assets/anabasis.svg";

const initialFormState = {
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
        <header className="my-8">
          <img
            className="m-auto"
            src={AnabasisLogo}
            alt="Anabasis logo"
            height="60"
            width="60"
          />
          <h1 className="text-2xl font-bold m-2">Signin</h1>
          <p>Signin now to organize your job search</p>
        </header>
        <FormInput
          placeholder=""
          type="email"
          label="Email"
          onChange={handleFormChange}
          name="email"
          value={formState.email}
          autoComplete="email"
        />
        <FormInput
          placeholder=""
          type="password"
          label="Password"
          onChange={handleFormChange}
          name="password"
          value={formState.password}
          autoComplete="current-password"
        />
        <button className="bg-primary text-white w-3/4 m-1">Signin</button>
        <span className="border-t w-full mt-auto font-semibold p-4">
          {`Don't have an account yet? `}
          <Link to={"/signup"}>Signup instead</Link>
        </span>
      </form>
    </main>
  );
};
export default SignupPage;
