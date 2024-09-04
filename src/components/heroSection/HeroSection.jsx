import React from 'react';
import banner from '../../assets/banner.png';

function HeroSection() {
    return (
        <div>
            {/* <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" /> */}
            <img src={banner} alt='img not found' className="responsive-banner w-full h-auto"/>
        </div>
    )
}

export default HeroSection