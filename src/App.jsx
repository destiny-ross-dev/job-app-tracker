import NavBar from "./components/NavBar";
import NotificationsTray from "./components/NotificationsTray";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <main className="flex-1 bg-dark">Page</main>
      <NotificationsTray />
    </div>
  );
}

export default App;
