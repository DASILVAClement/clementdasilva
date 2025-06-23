import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold text-blue-600">Clément Da Silva</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
