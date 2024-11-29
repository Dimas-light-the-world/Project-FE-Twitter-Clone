import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ setPage }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <Link className="w-full bg-blue-500 text-white p-2 rounded block text-center" to={'/timeline'}>Login</Link>
                </form>
                <Link className="mt-4 text-blue-500" to={'/register'}>Don't have an account? Register</Link>
            </div>
        </div>
    );
};

export default LoginPage;