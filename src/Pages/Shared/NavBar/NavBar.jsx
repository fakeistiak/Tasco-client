import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar=()=> {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRouteClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 backdrop-blur-md bg-black/30' 
        : 'py-4 bg-black'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <a 
          href="/" 
          className="text-2xl font-bold text-white tracking-wider hover:scale-105 transition-all duration-300
            relative after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0
            after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left
            after:transition-transform after:duration-300"
        >
          Tasco
        </a>
        
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="text-white hover:text-gray-300 transition-colors p-2
              hover:bg-white/10 rounded-full"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <ul className={`absolute md:static left-0 right-0 md:flex md:space-x-8
          ${open ? 'top-full' : '-top-[400px]'}
          transition-all duration-500 ease-in-out
          md:opacity-100 md:translate-y-0
          p-6 md:p-0 space-y-6 md:space-y-0
          ${scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-black'} md:bg-transparent
          border-t border-white/10 md:border-t-0
          `}>
          {routes.map((route) => (
            <li key={route.id} className="text-center md:text-left">
              <a
                href={route.path}
                onClick={handleRouteClick}
                className="text-white/90 hover:text-white block md:inline-block text-sm font-medium
                  relative overflow-hidden group transition-colors duration-300
                  hover:bg-white/10 md:hover:bg-transparent rounded-full md:rounded-none
                  px-4 py-2 md:px-2 md:py-1"
              >
                <span className="relative z-10">{route.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;