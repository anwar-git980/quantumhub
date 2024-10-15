import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const user = localStorage.getItem('user');
  const userid = user ? JSON.parse(user).user.uid : null;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <div className="h-full pt-10">
          {order
            .filter((obj) => obj.userid === userid)
            .map((order) => (
              <div
                key={order.id}
                className="mx-auto max-w-5xl justify-center px-4 md:px-6"
              >
                {/* Use grid layout for better alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {order.cartItems.map((item) => (
                    <div key={item.id} className="w-full p-4">
                      {/* Product card with fixed size */}
                      <div
                        className="rounded-lg bg-white p-6 shadow-md flex flex-col items-center sm:items-start"
                        style={{
                          backgroundColor: mode === 'dark' ? '#282c34' : '',
                          color: mode === 'dark' ? 'white' : '',
                          height: '300px', // fixed height
                          width: '250px', // fixed width
                        }}
                      >
                        {/* Image */}
                        <img
                          src={item.imageUrl}
                          alt="product-image"
                          className="w-32 h-32 rounded-lg object-contain"
                        />
                        {/* Product Details */}
                        <div className="mt-4 sm:ml-4 w-full">
                          <h2
                            className="text-lg font-bold text-gray-900 truncate"
                            style={{ color: mode === 'dark' ? 'white' : '' }}
                          >
                            {item.title}
                          </h2>
                          <p
                            className="mt-2 text-sm text-gray-700 line-clamp-3"
                            style={{ color: mode === 'dark' ? 'white' : '' }}
                          >
                            {item.description}
                          </p>
                          <p
                            className="mt-1 text-md font-semibold text-gray-800"
                            style={{ color: mode === 'dark' ? 'white' : '' }}
                          >
                            ₹{item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-black">No Order</h2>
      )}
    </Layout>
  );
}

export default Order;
