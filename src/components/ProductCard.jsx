import React from 'react';
import { FaStar } from "react-icons/fa6";

export default function ProductCard({ item }) {
    const fallBackImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUE1_OaNKHtgeGB_7NpkVMW4osv8C_aOniUnxz49awh2ZACTfYzkoUqWifv2YxHeFGo8&usqp=CAU'
    return (
        <>
            <div className="h-full w-full relative border-2 border-gray-800 text-green-500 rounded-lg overflow-hidden">
                <a> <img className="pointer-events-none select-none md:h-56  w-full object-cover object-center" src={item?.thumbnail || fallBackImage} alt={item?.title} /> </a>
                <div className="p-3">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 capitalize mb-1">{item?.category}</h2>
                    <h1 className="title-font text-xl tracking-wider text-white font-light mb-1">{item?.title}</h1>
                    <h2 className="leading-relaxed text-base capitalize text-green-500">Brand: <span className='text-white '>{item?.brand}</span></h2>
                    <p className='text-sm my-1 text-gray-300'>{item?.description}</p>
                    <div className="flex" >
                        <p className="leading-relaxed text-base mb-3 mr-3">Price: <span className='text-white '>{item?.price}</span></p>
                        <p className="leading-relaxed text-base">Stocks: <span className='text-white '>{item?.stock}</span></p>
                    </div>
                    <div className="flex">
                        <span className="text-gray-300 inline-flex items-center leading-none text-sm">
                            <span className='mr-1 text-green-500'><FaStar size={20} /></span>
                            {item?.rating}  <span className='pl-4'>{item?.discountPercentage}% Discounts </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
