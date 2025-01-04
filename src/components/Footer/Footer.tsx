import { FaFacebookF, FaInstagram, FaTelegramPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Ratatuy</h3>
          <p className="text-gray-400 mb-4">Mazali taomlar yetkazib berish xizmati</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Aloqa</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-500" />
              <span>+998 90 123 45 67</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" />
              <span>info@ratatuy.uz</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-500" />
              <span>Toshkent sh., Chilonzor tumani, 1-mavze</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Tez havolalar</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Bosh sahifa</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Menyu</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Buyurtma berish</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Aloqa</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ratatuy. Barcha huquqlar himoyalangan.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer