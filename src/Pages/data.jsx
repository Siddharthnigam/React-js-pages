import React, { useEffect, useState } from 'react'

function data() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("https://mxpertztestapi.onrender.com/api/sciencefiction")
            .then(res => res.json())
            .then(data => setStories(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {stories.map((story, index) => (
                <div key={index}>
                    <h3>{story.Title}</h3>
                    <p>{story.Content}</p>
                </div>
            ))}
        </div>
    )
}

export default data
