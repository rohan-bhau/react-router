import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const {id, title} = post
    console.log(post);
    
    return (
        <div className='bg-amber-300 w-[500px] border border-amber-600  rounded-xl mb-4 p-4 mx-auto'>
            <h3 className='text-3xl'>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button className='bg-gray-700 p-3 rounded-md'>Show Details</button>
            </Link>
        </div>
    );
}

export default Post;
