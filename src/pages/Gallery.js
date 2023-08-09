import React, { useCallback } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default function Gallery({ stories, onStoryClick }) {
    const handleOnStoryClick = useCallback((story) => {
        onStoryClick(story)
    }, [onStoryClick]);

    return (
        stories.map((story) => (
            <Card hoverable
                key={story.title}
                className='w-[20rem] h-[30rem]'
                cover={<img src={`${process.env.PUBLIC_URL}/${story.coverImage}`} alt={story.title} />}
                onClick={(e) => handleOnStoryClick(story)}>
                <Meta title={story.title} description={story.description} />
            </Card>
        ))
    );
}