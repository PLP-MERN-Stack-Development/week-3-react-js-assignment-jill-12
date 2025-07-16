import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-200 dark:bg-gray-900">
      <div className="font-bold text-lg">
        <Link to="/">React Demo</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api-demo" className="hover:underline">API Demo</Link>
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </nav>
  );
}