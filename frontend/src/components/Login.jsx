import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => e.target.select()}
            required
            inputMode="none"
            autoComplete="username"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => e.target.select()}
            required
            inputMode="none"
            autoComplete="current-password"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mt-6 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-500 cursor-pointer hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
