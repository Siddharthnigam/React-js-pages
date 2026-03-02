import React, { useEffect, useState } from 'react'

function design1() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const storyIds = [
            '666d6b07b9c7611ba9986a43',
            '666d7e04b9c7611ba9986a4b',
            '666d7ebcb9c7611ba9986a53',
            '666d7fbfb9c7611ba9986a5b',
            '666d6b07b9c7611ba9986a49',
            '666d6b07b9c7611ba9986a49',
            '666d7e04b9c7611ba9986a50',
            '666d7e04b9c7611ba9986a50',
            '666d7e04b9c7611ba9986a50',
            '666d7e04b9c7611ba9986a50',
            '666d7e04b9c7611ba9986a50',

        ];

        Promise.all(
            storyIds.map(id =>
                fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
                    .then(res => res.json())
            )
        )
            .then(data => setStories(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div className='h-full w-full bg-[#181b31]'>
                <div className='sid h-[50vh] text-white  relative' style={{ borderRadius: '0 50% 100% 50%/0 0 300px 0px' }}>

                    <div className='h-20 flex flex-col md:flex-row justify-around items-center py-5 gap-4 md:gap-0'>
                        <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>BrainyLingo</h1>
                        <div className='flex items-center text-[0.9rem] md:text-[1rem] justify-between w-full md:w-1/4 px-4 md:px-0'>
                            <p className='cursor-pointer hover:text-blue-200 transition'>Home</p>
                            <p className='cursor-pointer hover:text-blue-200 transition'>Leaderboard</p>
                            <p className='cursor-pointer hover:text-blue-200 transition'>Daliy Quiz</p>
                        </div>
                        <button className='px-5 py-2 border-2 border-blue-400 rounded-4xl font-bold hover:bg-blue-300 transition'>Sign Out</button>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mt-20 mb-8 px-4">
                        <span className='text-blue-600'>The Lost City of </span> Future Earth</h1>
                    <div className='flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4'>
                        <button className='px-7 py-2 bg-blue-600 rounded-2xl font-bold'>Work Explorer</button>
                        <button className='px-7 py-2 bg-[#28282f] rounded-2xl font-bold '>Story Adventure</button>
                        <button className='px-7 py-2 bg-transparent border-2 rounded-4xl border-blue-400  font-bold '>Brain Quest</button>
                    </div>
                </div>
                <div className="p-5 max-w-full mx-auto">
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* Left Large Card */}
                        <div className="w-full lg:w-1/4 bg-transparent border-2 border-zinc-400 rounded-lg p-5 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                            <img src={`https://ik.imagekit.io/dev24/${stories[0]?.Image?.[0]}`} alt={stories[0]?.Title} className="w-full h-64 rounded-lg object-cover mb-4" />
                            <div className="flex justify-between mb-4">
                                <span className="font-bold text-white">#1</span>
                            </div>
                            <h2 className="text-white text-xl mb-2">{stories[0]?.Title}</h2>
                            <p className="text-white leading-relaxed mb-4">{stories[0]?.Storyadvenure?.Storytitle}</p>
                            <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition">{stories[0]?.Status}</button>
                        </div>

                        {/* Right Grid of Small Cards */}
                        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                            {stories.slice(1).map((story, index) => (
                                <div key={story._id} className="bg-gradient-to-l from-[#6b6ebc] to-[#2e1d6a] rounded-lg p-5 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                                    <img src={`https://ik.imagekit.io/dev24/${story.Image?.[0]}`} alt={story.Title} className="w-full h-32 rounded-lg object-cover mb-2" />
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-white">#{index + 2}</span>
                                    </div>
                                    <h2 className="text-white text-lg mb-1">{story.Title}</h2>
                                    <p className="text-white text-sm leading-relaxed mb-2">{story.Storyadvenure?.Storytitle}</p>
                                    <button className="w-full py-1 bg-blue-500 text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition">{story.Status}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default design1
