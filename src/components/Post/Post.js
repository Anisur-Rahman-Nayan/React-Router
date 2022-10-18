import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {

const [posts, setposts] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=> setposts(data))
},[])

    return (
        <div>
            <h2>Every posts Facebook ever had ! {posts.length}</h2>
            {
                posts.map(post=> <Link key={post.id} to={`/posts/${post.id}`}> {post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;