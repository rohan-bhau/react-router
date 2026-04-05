import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    return (
        <div className='bg-gray-600 p-4 m-4 text-center text-white'>
            <h3 className='text-3xl mb-4'>{post.title}</h3>
            <p className='text-xl'>{ post.body}</p>
        </div>
    );
}

export default PostDetail;
