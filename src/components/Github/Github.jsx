import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/rohan-bhau")
    //         .then(res => res.json())
    //         .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
    return (
      <div className="bg-gray-600 text-white m-4 p-4 text-3xl text-center">
        <h2> Github Followers: {data.followers}</h2>
        <img className='w-[300px]' src={data.avatar_url} alt="" />
      </div>
    );
}

export default Github;

export const githubInfo = async() => {
    const response = await fetch("https://api.github.com/users/rohan-bhau")
    return response.json()
}
