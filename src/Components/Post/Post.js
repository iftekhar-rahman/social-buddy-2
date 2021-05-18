import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {

    const {id, title, body} = props.post;

    const history = useHistory();

    const showComments = (id) => {
        history.push(`/post/${id}`);
    }

    return (
        <div style={{border: '1px solid #333', padding: '30px', margin: '30px'}}>
            <h3>ID: {id}, Title: {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;