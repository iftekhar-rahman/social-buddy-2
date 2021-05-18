import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    
    

    
    return (
        <div>
           <h3>This is post detail: {post.id}</h3>
           <h3>Title: {post.title}</h3>
           <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;