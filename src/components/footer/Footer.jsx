import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function Footer() {
  const { toggleMode, mode } = useContext(myContext);

  return (
    <footer className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">Categories</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-blue-400">Order</Link>
              </li>
              <li>
                <Link to="/localforvocal" className="hover:text-blue-400">Local For Vocal</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blue-400">Cart</Link>
              </li>
            </nav>
          </div>
          {/* Customer Service Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">Customer Service</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/returnpolicy" className="hover:text-blue-400">Return Policy</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
              </li>
            </nav>
          </div>
          {/* Services Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">Services</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/privacypolicy" className="hover:text-blue-400">Privacy</Link>
              </li>
            </nav>
          </div>
          {/* Payment Methods */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="Payment Methods" />
          </div>
        </div>
      </div>

      <div className={`bg-gray-200 ${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} text-sm`}>
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/" className="flex title-font font-medium items-center">
            <h1 className="text-2xl font-bold">Quantum Hub</h1>
          </Link>
          <p className="text-sm sm:ml-6 sm:mt-0 mt-4">© 2023 Quantum Hub — by Shaikh Anwar
            <a href="https://www.quantumhub.com" className="text-gray-600 ml-1 hover:text-blue-400" rel="noopener noreferrer" target="_blank">www.quantumhub.com</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com" className="text-gray-500 hover:text-blue-700" aria-label="Facebook">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" className="ml-3 text-gray-500 hover:text-blue-600" aria-label="Twitter">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" className="ml-3 text-gray-500 hover:text-red-500" aria-label="Instagram">
              <svg fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="https://www.linkedin.com" className="ml-3 text-gray-500 hover:text-blue-800" aria-label="LinkedIn">
              <svg fill="currentColor" stroke="currentColor" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer