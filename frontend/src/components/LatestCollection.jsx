import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([])
  const { products } = useContext(ShopContext)

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10))
    }
  }, [products])

  return (
    <div className='max-w-7xl mx-auto my-12 px-4 md:px-8'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-gradient mb-4'>
          <Title text1="LATEST" text2="COLLECTIONS" />
        </h2>
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-600 px-4'>
          Discover our latest collections featuring unique styles and eco-friendly designs. Shop now for fresh arrivals that blend fashion with sustainability!
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300'
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestCollection