import { Link } from "react-router-dom"
import { FaHome, FaUtensils, FaInfoCircle, FaEnvelope, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <FaUtensils className="mr-2" />
            Ratatuy
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-200 transition duration-300">
                <FaHome className="mr-1" /> Bosh sahifa
              </Link>
            </li>
            <li>
              <Link to="/menu" className="flex items-center hover:text-blue-200 transition duration-300">
                <FaUtensils className="mr-1" /> Menyu
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center hover:text-blue-200 transition duration-300">
                <FaInfoCircle className="mr-1" /> Biz haqimizda
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center hover:text-blue-200 transition duration-300">
                <FaEnvelope className="mr-1" /> Aloqa
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link to="/cart" className="flex items-center hover:text-blue-200 transition duration-300">
              <FaShoppingCart className="mr-1" />
              <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">0</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header