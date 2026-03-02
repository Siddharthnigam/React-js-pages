import React, { useEffect, useState } from 'react'

function design1() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("https://mxpertztestapi.onrender.com/api/sciencefiction")
            .then(res => res.json())
            .then(data => setStories(data.slice(0, 8)))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
        <div className='h-full w-full bg-[#0d041d]'>
            <div className='sid h-[50vh] text-white  relative bg-cover bg-center' style={{borderRadius: '0 50% 100% 50%/0 0 300px 0px', backgroundImage: 'url(https://ik.imagekit.io/dev24/Unruffled_8d7KCZQ8L_kEd5rBnpv.webp)', backgroundBlendMode: 'overlay'}}>

                <div className='h-20 flex flex-col md:flex-row justify-around items-center py-5 gap-4 md:gap-0'>
                    <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>BrainyLingo</h1>
                    <div className='flex items-center text-[0.9rem] md:text-[1rem] justify-between w-full md:w-1/4 px-4 md:px-0'>
                        <p className='cursor-pointer hover:text-blue-200 transition'>Home</p>
                        <p className='cursor-pointer hover:text-blue-200 transition'>Leaderboard</p>
                        <p className='cursor-pointer hover:text-blue-200 transition'>Daliy Quiz</p>
                    </div>
                    <button className='px-5 py-2 bg-blue-400 rounded-2xl font-bold hover:bg-blue-300 transition'>Sign Out</button>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-center mt-20 mb-8 px-4">Science Fiction Stories</h1>
                <div className='flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4'>
                    <button className='px-5 py-2 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 transition'>New</button>
                    <button className='px-5 py-2 bg-green-400 rounded-2xl font-bold hover:bg-green-500 transition'>In Progress</button>
                    <button className='px-5 py-2 bg-yellow-400 rounded-2xl font-bold hover:bg-yellow-500 transition'>Completed</button>
                    <button className='px-5 py-2 bg-blue-400 rounded-2xl font-bold hover:bg-blue-500 transition'>Clear all</button>
                </div>
            </div>
            <div className="p-5 max-w-7xl   mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {stories.map((story, index) => (
                        <div key={story._id} className="bg-gradient-to-l from-[#50abc5] to-[#5137b0] rounded-lg p-5 gap-2 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                            <img src={`https://ik.imagekit.io/dev24/${story.Image?.[0]}`} alt={story.Title} className="w-full h-40 rounded-lg object-cover" />
                            <div className="flex justify-between ">
                                <span className="font-bold text-white">#{index + 1}</span>
                            </div>
                            <h2 className="text-white  text-xl">{story.Title}</h2>
                            <p className="text-white leading-relaxed ">{story.Storyadvenure?.Storytitle}</p>
                            <button className={`w-full py-2 bg-white rounded-lg font-bold transition ${
                                story.Status === 'New' ? 'text-blue-600 hover:bg-gray-100' :
                                story.Status === 'In Progress' ? 'text-green-500 hover:bg-gray-100' :
                                story.Status === 'Completed' ? 'text-yellow-500 hover:bg-gray-100' :
                                'text-gray-700 hover:bg-gray-100'
                            }`}>{story.Status}</button>
                        </div>
                    ))}
                </div>
            </div>

            </div>
        </>
    )
}

export default design1
