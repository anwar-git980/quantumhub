import React, { useCallback, useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';


function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    // Add to cart
    const addCart = useCallback((product) => {
        const dispatch = useDispatch();
    
        dispatch(addToCart(product));
    
        toast.success('Added to cart', {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce, 
        });
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Filter products
    const filteredProducts = product
        .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
        .filter((obj) => !filterType || obj.category.toLowerCase() === filterType.toLowerCase())
        .filter((obj) => !filterPrice || obj.price <= filterPrice);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Our Latest Collection
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice)).slice(0,8).map((item, index) => {
                            const { title, price, description, imageUrl, id } = item;
                            return (
                                <div onClick={() => window.location.href = `/productinfo/${id}`}
                                    key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" >
                                    <div className="h-full flex flex-col justify-between border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden drop-shadow-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : 'black' }}>
                                        <div className="flex justify-center cursor-pointer">
                                            <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out" src={imageUrl} alt="product" />
                                        </div>
                                        <div className="p-5 flex-grow">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                Quantum Hub
                                            </h2>

                                            <div className="flex flex-col justify-between h-full">
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                                    {title}
                                                </h1>
                                                <p className="leading-relaxed font-bold text-2xl" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                                    ₹ {price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
