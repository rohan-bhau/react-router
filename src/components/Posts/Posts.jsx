import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const postData = useLoaderData()
    console.log(postData);
    
    return (
        <div className="bg-gray-600 text-center text-white">
            <h2>These are my posts : { [postData.length]}</h2>
            {/* <Post></Post> */}
        {/* <h3>{postData.title}</h3> */}
        {postData.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    );
}

export default Posts;
