import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-yellow-400/30">
      <div className="flex justify-between items-center px-24 py-4">

        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold">
          Sasindu <span className="text-yellow-400">Banuka</span>
        </NavLink>

        {/* LINKS */}
        <div className="flex items-center gap-8">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300 hover:text-yellow-400"
              }
            >
              {["Home", "About", "Projects", "Contact"][i]}
            </NavLink>
          ))}

          <a
            href="/Sasindu_Banuka_CV.pdf"
            download
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
