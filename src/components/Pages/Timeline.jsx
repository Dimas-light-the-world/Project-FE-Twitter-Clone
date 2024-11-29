import React from 'react';
import { Link } from 'react-router-dom';

const TimelinePage = ({ setPage, setSelectedPost }) => {
    const posts = Array.from({ length: 15 }).map((_, index) => ({
        id: index,
        user: `User  ${index + 1}`,
        content: `This is a sample post content for user ${index + 1}.`,
        time: '2 hours ago'
    }));

    return (
        <div className="w-full max-w-full mx-auto">
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
                <img src="https://placehold.co/50x50" alt="Logo" className="w-12 h-12" />
                <h1 className="text-xl font-bold">Timeline</h1>
                <Link className="bg-blue-500 text-white p-2 rounded" to={'/post'}>New Post</Link>
            </div>
            <div className="mt-4">
                {posts.map(post => (
                    <Link key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer" to={`/post-detail/${post.id}`} >
                        <div className="flex items-center mb-2">
                            <img src="https://placehold.co/50x50" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                            <div>
                                <h2 className="font-bold">{post.user}</h2>
                                <p className="text-gray-600 text-sm">{post.time}</p>
                            </div>
                        </div>
                        <p className="text-gray-800">{post.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default TimelinePage;