import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return <h1>Accueil</h1>;
}

function Services() {
  return <h1>Services</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
