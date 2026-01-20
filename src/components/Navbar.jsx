import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-yellow-400/30">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-24 py-4">

        {/* LOGO */}
        <NavLink to="/" className="text-lg sm:text-xl font-bold" onClick={() => setIsOpen(false)}>
          Sasindu <span className="text-yellow-400">Banuka</span>
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300 hover:text-yellow-400 transition"
              }
            >
              {["Home", "About", "Projects", "Contact"][i]}
            </NavLink>
          ))}

          <a
            href="/Sasindu_Banuka_CV.pdf"
            download
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Download CV
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-400/30 px-4 py-4 space-y-3">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-400 font-semibold py-2"
                  : "block text-gray-300 hover:text-yellow-400 py-2 transition"
              }
              onClick={() => setIsOpen(false)}
            >
              {["Home", "About", "Projects", "Contact"][i]}
            </NavLink>
          ))}
          <a
            href="/Sasindu_Banuka_CV.pdf"
            download
            className="block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold text-center hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
