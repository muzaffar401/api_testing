"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductProps {
    id: number,
    name: string,
    category: string,
    description: string,
    colors: string,
    price: string,
    image: string
}

interface Props {
    data: ProductProps[];
}

const Product = ({ data }: Props) => {

    return (
        <div className="bg-white min-h-screen p-4">
            <div className="container mx-auto flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">New (500)</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-700 font-medium">Shoes</li>
                        <li className="text-gray-700 font-medium">Sports Bras</li>
                        <li className="text-gray-700 font-medium">Tops &amp; T-Shirts</li>
                        <li className="text-gray-700 font-medium">Hoodies &amp; Sweatshirts</li>
                        <li className="text-gray-700 font-medium">Jackets</li>
                        <li className="text-gray-700 font-medium">Trousers &amp; Tights</li>
                        <li className="text-gray-700 font-medium">Shorts</li>
                        <li className="text-gray-700 font-medium">Tracksuits</li>
                        <li className="text-gray-700 font-medium">Jumpsuits &amp; Rompers</li>
                        <li className="text-gray-700 font-medium">Socks</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6">Gender</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-700">Men</li>
                        <li className="text-gray-700">Women</li>
                        <li className="text-gray-700">Unisex</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6">Kids</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-700">Boys</li>
                        <li className="text-gray-700">Girls</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6">Shop by Price</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-700">Under ₹ 2,500.00</li>
                        <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li>
                    </ul>
                </div>

                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((product) => (
                            <Link href={{pathname:"/detail",query:{_id:product.id}}} key={product.id}>
                                <div className="border rounded-lg p-4 bg-white shadow-md">
                                    <div className="w-full h-40 relative mb-4">
                                        <img
                                            alt={product.name}
                                            className="rounded-lg"
                                            src={product.image} // Use the correct path for the product image
                                            style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="text-sm text-red-500 font-semibold mb-1">Just In</div>
                                    <div className="font-medium text-gray-800">{product.name}</div>
                                    <div className="text-sm text-gray-500">{product.category}</div>
                                    <div className="text-sm text-gray-500">{product.colors}</div>
                                    <div className="font-semibold text-gray-800 mt-2">MRP: {product.price}</div>

                                   
                                    {/* <a href={'/'} className="mt-4 text-blue-600 hover:underline">
                                        View Details
                                    </a> */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product