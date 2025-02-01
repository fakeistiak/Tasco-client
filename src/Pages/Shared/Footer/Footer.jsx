import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Tasco</h2>
            <p className="text-sm mb-4">Empowering Freelancers, Elevating Businesses</p>
            <p className="text-xs">
              Connect with top talent or find your next opportunity—securely, efficiently, and seamlessly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/freelancers" className="hover:text-white transition-colors">
                  Find Freelancers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and opportunities.</p>
            <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white w-full" />
              <Button type="submit" className="bg-white hover:bg-gray-300 text-black w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-sm">&copy; 2025 Tasco. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;