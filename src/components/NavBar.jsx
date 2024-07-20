import { Link } from "react-router-dom";
import AnabasisLogo from "../assets/anabasis.svg";

const NavBar = () => {
  return (
    <div className="flex flex-col bg-primary">
      <header className="h-[--header-h] w-[--header-h] flex items-center justify-center bg-darkBlue">
        <img src={AnabasisLogo} alt="Anabasis logo" height="35" width="35" />
      </header>
      <nav className="flex flex-col text-white">
        <Link to="">
          <i className="fa-solid fa-house fa-lg mt-4 mb-6" title="Home" />
        </Link>
        <Link to="applications">
          <i className="fa-solid fa-file fa-lg mb-6" title="Applications" />
        </Link>
        <Link to="companies">
          <i className="fa-solid fa-building fa-lg mb-6" title="Companies" />
        </Link>
        <Link to="contacts">
          <i className="fa-solid fa-address-book fa-lg mb-6" title="Contacts" />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
