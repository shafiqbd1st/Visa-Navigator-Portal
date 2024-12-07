import React from 'react'
import SingleVisa from '../Page/SingleVisa'
import { Link } from 'react-router-dom'

const LatestVisas = ({ data }) => {
    // console.log(data)
    return (
        // <div className='w-11/12 mx-auto my-5'>
        //     <h1 className='text-3xl font-semibold'>LatestVisas: {data.length} </h1>
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        //         {
        //             data.map(visa => <SingleVisa key={visa._id} visa={visa}></SingleVisa>)
        //         }
        //     </div>
        //     <div>
        //         <Link to={"/all-visas"} className="w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">See all visas</Link>

        //     </div>
        // </div>
        <div className="w-11/12 mx-auto my-5">
            {/* Header */}
            <h1 className="text-3xl font-semibold mb-6">
                Latest Visas: {data.length}
            </h1>

            {/* Visa Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((visa) => (
                    <SingleVisa key={visa._id} visa={visa}></SingleVisa>
                ))}
            </div>

            {/* See All Visas Button */}
            <div className="flex justify-center mt-8">
                <Link
                    to="/all-visas"
                    className="px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                >
                    See All Visas
                </Link>
            </div>
        </div>

    )
}

export default LatestVisas
