import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DashboardLayout from "./routes/dashboard.jsx";
import SignupPage from "./routes/signup.jsx";
import SigninPage from "./routes/signin.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <h1>Index</h1>,
  },
  { path: "signin", element: <SigninPage /> },
  { path: "signup", element: <SignupPage /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <h1>Dashboard Main</h1>,
      },
      { path: "applications", element: <h1>Applications Page</h1> },
      { path: "companies", element: <h1>Companies Page</h1> },
      { path: "contacts", element: <h1>Contacts Page</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
