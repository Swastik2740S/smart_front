'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setSuccess(false);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Registration failed');
    }

    setSuccess(true);
    setTimeout(() => router.push('/login'), 1500);
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl border border-blue-100">
        <div className="flex flex-col items-center mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-md mb-2">
            <span className="text-2xl font-bold text-white tracking-tight">ST</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Create your account</h1>
          <p className="text-sm text-gray-500 mt-1">Sign up to get started with SmartTask.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input id="username" name="username" type="text" autoComplete="username" required value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" autoComplete="new-password" required value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">Registration successful! Redirecting...</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-xs text-gray-400">
          <span>
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline font-medium transition">
              Sign in
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
