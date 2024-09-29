import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../firebase/FirebaseConfig';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading, mode } = context;  // Access mode from context

    const [products, setProducts] = useState('')
    const params = useParams()

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            setProducts(productTemp.data());
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    //add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('Added to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-32 mx-auto">
                    {products &&
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={products.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                    Quantum Hub
                                </h2>

                                {/* Conditional text color based on mode */}
                                <h1 className="text-3xl title-font font-medium mb-1"
                                    style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                    {products.title}
                                </h1>

                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        {/* Star ratings - Keeping yellow stars */}
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-yellow-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-yellow-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-yellow-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-yellow-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        {/* Additional stars */}
                                        <span className={`ml-3 ${mode === 'dark' ? 'text-white' : 'text-gray-600'}`}>
                                            4 stars
                                        </span>
                                    </span>
                                </div>

                                <p className="leading-relaxed border-b-2 mb-5 pb-5"
                                    style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                    {products.description}
                                </p>

                                <div className="flex">
                                    <span className="title-font font-medium text-2xl"
                                        style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                        ₹{products.price}
                                    </span>

                                    <button onClick={() => addCart(products)} className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </Layout>
    )
}

export default ProductInfo;
