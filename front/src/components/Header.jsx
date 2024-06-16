import Button from "./Button";
import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <header className="flex place-content-between bg-gray-300 p-4">
      <img src={viteLogo} alt="Vite logo" />
      <nav>
        <ul className="flex gap-2">
          <li>
            <Button text="Login" />
          </li>
          <li>
            <Button text="Register" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
