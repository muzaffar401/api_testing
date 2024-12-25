import { detail } from '@/helper';
import React from 'react'
type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const Detail = async ({ searchParams }: Props) => {
    const idString = searchParams._id;
    const id = Number(idString);
    const product = await detail(id);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white space-y-6 md:space-y-0">
            <div className="flex-1">
                <img
                    src={product.image} // Static image path for the product
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="flex-1 md:ml-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">{product.name}</h2>
                <p className="text-sm sm:text-lg text-gray-600 mb-6">{product.category}</p>
                <p className="text-sm sm:text-lg text-gray-600 mb-6">{product.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <span className="text-xl sm:text-2xl font-bold text-gray-800">{product.price}</span>
                    <button className="bg-black text-white py-2 px-4 rounded-lg font-semibold text-sm sm:text-base tracking-wide hover:bg-gray-800 transition duration-200">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Detail