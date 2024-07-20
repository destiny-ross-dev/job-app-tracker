import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NotificationsTray from "../components/NotificationsTray";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <main className="flex-1 bg-dark">
        <Outlet />
      </main>
      <NotificationsTray />
    </div>
  );
};

export default DashboardLayout;
