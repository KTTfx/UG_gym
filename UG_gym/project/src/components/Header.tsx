import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#002147] text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <Dumbbell className="h-8 w-8 text-[#FFD700]" />
          <h1 className="text-2xl font-bold tracking-tight">UG Gym</h1>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-[#FFD700] transition-colors">
            Home
          </Link>
          <Link to="/login" className="hover:text-[#FFD700] transition-colors">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[#FFD700] text-[#002147] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}