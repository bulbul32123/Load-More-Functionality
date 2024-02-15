import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import LoadingSkleton from './LoadingSkleton';

export default function Products() {
    const [loadMore, setLoadMore] = useState(5);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getDataFromApi = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://dummyjson.com/products?limit=0')
            const data = await res.json()
            setData(data?.products)
        } catch (error) {
            console.log(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromApi()
    }, [])

    const handleLoadMoreItems = async () => {
        setLoading(true)
        setLoadMore((prev) => prev + 5)
        setLoading(false)
    }
    const handleLoading = () => {
        return (
            [...Array(20)].map((_, index) => (
                <LoadingSkleton key={index} />
            ))
        )
    }
    return (
        <div className='h-full w-full'>
            <h1 className='font-extrabold text-3xl text-white'>Products</h1>
            <>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 mt-5 xl:mt-20 gap-4 text-white">
                    {loading ? (handleLoading()) :
                        <>
                            {data?.slice(0, loadMore)?.map((item) => (
                                <ProductCard item={item} key={item?.id} />
                            ))
                            }
                        </>
                    }
                </div>
                <div>
                    {loadMore < data?.length ?
                        <center className='mt-5'>
                            <button onClick={handleLoadMoreItems} className='py-2 px-4 mb-5 bg-green-500 rounded-sm text-sm'>Load More </button>
                        </center> : <h1 className='mt-5 pb-5 text-xl sm:text-2xl text-white font-bold text-center'>Sorry We Don't Have More Products Available!</h1>
                    }
                </div>
            </>
        </div>
    )
}
