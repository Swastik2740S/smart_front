'use client';

import Link from 'next/link';
import { FaUsersCog, FaChartBar, FaTasks } from 'react-icons/fa';

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to the SmartTask Admin panel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Management */}
          <Link
            href="/dashboard/users"
            className="group bg-white hover:bg-blue-50 border border-blue-100 shadow rounded-xl p-6 flex flex-col items-center transition"
          >
            <FaUsersCog className="text-blue-600 text-3xl mb-2 group-hover:scale-110 transition" />
            <span className="font-bold text-blue-800 mb-1">User Management</span>
            <span className="text-xs text-gray-500 text-center">Manage users, roles, status</span>
          </Link>
          {/* Task Overview */}
          <Link
            href="/dashboard/tasks"
            className="group bg-white hover:bg-blue-50 border border-blue-100 shadow rounded-xl p-6 flex flex-col items-center transition"
          >
            <FaTasks className="text-blue-500 text-3xl mb-2 group-hover:scale-110 transition" />
            <span className="font-bold text-blue-800 mb-1">Tasks Overview</span>
            <span className="text-xs text-gray-500 text-center">Monitor & assign tasks</span>
          </Link>
          {/* Reports */}
          <Link
            href="/dashboard/reports"
            className="group bg-white hover:bg-blue-50 border border-blue-100 shadow rounded-xl p-6 flex flex-col items-center transition"
          >
            <FaChartBar className="text-blue-400 text-3xl mb-2 group-hover:scale-110 transition" />
            <span className="font-bold text-blue-800 mb-1">Reports</span>
            <span className="text-xs text-gray-500 text-center">Analyze team performance</span>
          </Link>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          Powered by <span className="font-semibold text-blue-600">SmartTask</span>
        </div>
      </div>
    </main>
  );
}
