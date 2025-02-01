
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

 const Footer=()=> {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
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
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/freelancers" className="hover:text-white transition-colors">
                  Find Freelancers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and opportunities.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="w-full bg-white hover:bg-gray-300 text-black">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="pt-3 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Tasco. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;