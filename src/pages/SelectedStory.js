import React from 'react';

export default function SelectedStory({ story }) {
    return (
        <div className='h-full flex flex-col gap-2 font-story'>
            <div className='text-4xl text-violet-800 font-bold'>{story.title.toUpperCase()}</div>
            <div className='h-full flex flex-col gap-2'>
                {story.events.map((event, index) => (
                    <div key={index} className={`h-2/3 flex gap-2 ${index % 2 ? 'flex-row-reverse' : ''}`}>
                        <img src={`${process.env.PUBLIC_URL}/${event.image}`} alt={index} />
                        <div className='bg-gray-200 rounded flex-grow p-2 text-2xl overflow-auto'>{event.description}</div>
                    </div>
                ))}
            </div>
        </div>

    );
}