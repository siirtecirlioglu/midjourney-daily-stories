import React, { useCallback, useState } from 'react';
import SelectedStory from './SelectedStory';
import Gallery from './Gallery';

export default function Stories( {stories} ) {
    const [selectedStory, setSelectedStory] = useState();

    const handleOnStoryClick = useCallback((story) => {
        console.log('he', story)
        setSelectedStory(story)
    }, []);

    return selectedStory ? <SelectedStory story={selectedStory} /> : <Gallery stories={stories} onStoryClick={handleOnStoryClick} />
}