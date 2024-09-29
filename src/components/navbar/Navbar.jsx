import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { FiSun } from 'react-icons/fi';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { Dialog, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';

function Navbar() {
    const [open, setOpen] = useState(false);
    const context = useContext(myContext);
    const { toggleMode, mode } = context;

    const user = JSON.parse(localStorage.getItem('user'));

    const Logout = () => {
        localStorage.clear('user');
        window.location.href = '/login';
    };

    const cartItems = useSelector((state) => state.cart);

    return (
        <div className='sticky top-0 z-50'>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl"
                                style={{
                                    backgroundColor: mode === 'dark' ? 'black' : 'white', // Black for dark mode, white otherwise
                                }}
                            >
                                <div className="flex px-4 pb-2 pt-28">
                                    <button
                                        type="button"
                                        className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <RxCross2 />
                                    </button>
                                </div>
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <Link to={'/allproducts'}
                                        className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300"
                                        style={{
                                            color: mode === 'dark' ? 'white' : 'black' // White text for dark mode, black otherwise
                                        }}
                                    >
                                        All Products
                                    </Link>

                                    {user ? <div className="flow-root">
                                        <Link to={'/order'}
                                            style={{
                                                color: mode === 'dark' ? 'white' : 'black' // White text for dark mode, black otherwise
                                            }}
                                            className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300"
                                        >
                                            Order
                                        </Link>
                                    </div> : ""}

                                    {user?.user?.email === 'as0652592@gmail.com' ? <div className="flow-root">
                                        <Link to={'/dashboard'}
                                            className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300"
                                            style={{
                                                color: mode === 'dark' ? 'white' : 'black' // White text for dark mode, black otherwise
                                            }}
                                        >
                                            Admin
                                        </Link>
                                    </div> : ""}

                                    {user?.user?.email === 'as0652592@gmail.com' ? <div className="flow-root">
                                        <a className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300"
                                            style={{
                                                color: mode === 'dark' ? 'white' : 'black' // White text for dark mode, black otherwise
                                            }}
                                        >
                                            Logout
                                        </a>
                                    </div> : ""}
                                    {/* <div className="flow-root">
                                        <Link to={'/'} className="-m-2 block p-2 font-medium cursor-pointer">
                                            <img
                                                className="inline-block w-10 h-10 rounded-full"
                                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                                alt="Dan_Abromov"
                                            />
                                        </Link>
                                    </div> */}
                                </div>

                                {/* <div className="border-t border-gray-200 px-4 py-6">
                                    <a href="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="img/indiaflag.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium"
                                            style={{
                                                color: mode === 'dark' ? 'white' : 'black' // White text for dark mode, black otherwise
                                            }}
                                        >
                                            INDIA
                                        </span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Desktop */}
            <header className="relative">
                <nav aria-label="Top" className={`px-4 sm:px-6 lg:px-8 shadow-xl backdrop-blur-xl ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <div className="">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className={`rounded-md p-2 lg:hidden ${mode === 'dark' ? 'text-gray-400 bg-gray-700' : 'text-gray-400'}`}
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to={'/'} className='flex'>
                                    <div className="flex ">
                                        {/* <h1 className=' text-2xl font-bold px-2 py-1 rounded'>{`Quantum Hub`}</h1> */}
                                        <img 
                                            src='/bannerlogo.png'
                                            alt='Quantum Hub logo'
                                            className='h-32 w-auto py-1'
                                        />
                                    </div>
                                </Link>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link to={'/allproducts'} className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300">
                                        <span>All Products</span>
                                    </Link>

                                    {user?.user?.email === 'as0652592@gmail.com' ?
                                        <Link to={'/order'} className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300">
                                            <span>Order</span>
                                        </Link> : ""}

                                    {user?.user?.email === 'as0652592@gmail.com' ?
                                        <Link to={'/dashboard'} className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300">
                                            <span>Admin</span>
                                        </Link> : ""}

                                    {user ? <a
                                        onClick={Logout}
                                        className="text-lg font-medium cursor-pointer hover:text-blue-500 transition-all duration-300">
                                        <span>Logout</span>
                                    </a> : ""}
                                </div>

                                {/* <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center">
                                        <img
                                            src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">INDIA</span>
                                    </a>
                                </div> */}
                                {/* <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center">
                                        <img
                                            className="inline-block w-10 h-10 rounded-full"
                                            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                            alt="Dan_Abromov"
                                        />
                                    </a>
                                </div> */}

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <button className='' onClick={toggleMode}>
                                        {mode === 'light' ?
                                            (<FiSun size={30} />
                                            ) : mode === 'dark' ? (
                                                <BsFillCloudSunFill size={30} />
                                            ) : ''}
                                    </button>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to={'/cart'} className="group -m-2 flex items-center p-2">
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="currentColor"
                                            height="40em"
                                            width="2em"                                            
                                        >
                                            <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                                        </svg>
                                        <span className="ml-2 text-sm font-medium">{cartItems?.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
