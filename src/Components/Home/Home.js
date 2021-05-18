import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setPosts] = useState([]);
    // console.log(posts);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

    return (
        <div>
            <h4>There are {posts.length} posts</h4>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;