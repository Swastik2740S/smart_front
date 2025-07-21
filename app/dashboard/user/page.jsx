'use client';

import Link from 'next/link';
import { FaRegUserCircle, FaClipboardList, FaChartPie } from 'react-icons/fa';

export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Your Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to SmartTask, stay productive!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* My Tasks */}
          <Link
            href="/dashboard/tasks/my"
            className="group bg-white hover:bg-blue-50 border border-blue-100 shadow rounded-xl p-6 flex flex-col items-center transition"
          >
            <FaClipboardList className="text-blue-500 text-3xl mb-2 group-hover:scale-110 transition" />
            <span className="font-bold text-blue-800 mb-1">My Tasks</span>
            <span className="text-xs text-gray-500 text-center">View and manage your tasks</span>
          </Link>
          {/* Profile */}
          <Link
            href="/dashboard/profile"
            className="group bg-white hover:bg-blue-50 border border-blue-100 shadow rounded-xl p-6 flex flex-col items-center transition"
          >
            <FaRegUserCircle className="text-blue-600 text-3xl mb-2 group-hover:scale-110 transition" />
            <span className="font-bold text-blue-800 mb-1">My Profile</span>
            <span className="text-xs text-gray-500 text-center">Update info or change password</span>
          </Link>
          {/* Analytics (optional) */}
          <Link
            href="/dashboard/analytics"
            className="group bg-white hover:bg-blue-50 border border-blue-100 shadow rounded-xl p-6 flex flex-col items-center transition"
          >
            <FaChartPie className="text-blue-400 text-3xl mb-2 group-hover:scale-110 transition" />
            <span className="font-bold text-blue-800 mb-1">Productivity</span>
            <span className="text-xs text-gray-500 text-center">See your progress</span>
          </Link>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          Powered by <span className="font-semibold text-blue-600">SmartTask</span>
        </div>
      </div>
    </main>
  );
}
