import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

const {currency } = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className="w-full h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-cover hover:scale-110 transition duration-300"
  />
</div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
