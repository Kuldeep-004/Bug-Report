import { Link, useLocation } from "react-router-dom";

function Navbar({ onLogout }) {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <Link
            to="/"
            className={`text-white cursor-pointer px-4 py-2 rounded-lg transition duration-200 ${
              location.pathname === "/" ? "bg-green-600" : "hover:bg-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white cursor-pointer px-4 py-2 rounded-lg transition duration-200 ${
              location.pathname === "/about"
                ? "bg-green-600"
                : "hover:bg-gray-700"
            }`}
          >
            About Us
          </Link>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-200"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
