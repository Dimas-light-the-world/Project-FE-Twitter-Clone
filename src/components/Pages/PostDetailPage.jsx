import React from 'react';
import { Link } from 'react-router-dom';
const PostDetailPage = ({ post, setPage }) => {
    return (
        <div className="post-detail-container">
            <h2>Post Detail</h2>
            {post ? (
                <>
                    <h3>{post.user}</h3>
                    <p>{post.content}</p>
                    <Link to={'/timeline'}>Back to Timeline</Link>
                </>
            ) : (
                <p>No post selected.</p>
            )}
        </div>
    );
};
export default PostDetailPage;