'use client';

import { useEffect, useState } from 'react';
import {
  FaUser,
  FaShieldAlt,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
  FaUserEdit,
  FaUserCheck,
  FaUserSlash,
  FaPlus,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const roleColors = {
  ADMIN: 'bg-indigo-100 text-indigo-800',
  USER: 'bg-gray-100 text-gray-700',
};

const statusColors = {
  active: 'text-green-600 bg-green-50',
  inactive: 'text-red-500 bg-red-50',
};

export default function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [editingRoleId, setEditingRoleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterRole, setFilterRole] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState({ name: '', email: '', password: '', role: 'USER' });

  const TOKEN = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  const fetchUsers = async () => {
    setLoading(true);
    const url = filterRole ? `/api/users/role/${filterRole}` : `/api/users`;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      const data = await res.json();
      setUsers(data);
    } catch {
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, [filterRole]);

  const handleUserAction = async (id, action) => {
    try {
      let method = 'PUT';
      let endpoint = `/api/users/${id}`;

      if (action === 'activate') endpoint += '/activate';
      else if (action === 'deactivate') endpoint += '/deactivate';
      else if (action === 'delete') method = 'DELETE';
      else return;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`, {
        method,
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      if (!res.ok) throw new Error('Action failed');

      toast.success(`User ${action}d`);
      fetchUsers();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${id}/role?role=${role}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      if (!res.ok) throw new Error('Role update failed');

      toast.success('Role updated');
      setEditingRoleId(null);
      fetchUsers();
    } catch {
      toast.error('Failed to update role');
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createForm),
      });

      if (!res.ok) throw new Error('User creation failed');

      toast.success('User created!');
      setShowCreate(false);
      setCreateForm({ name: '', email: '', password: '', role: 'USER' });
      fetchUsers();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <main className="min-h-screen px-2 md:px-0 py-10 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">Team Management</h1>
        <p className="text-gray-500 mb-6">View and manage all users. Add, deactivate and edit users at will.</p>

        <div className="flex items-center justify-between mb-6">
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="border text-sm border-blue-200 px-3 py-2 rounded shadow-sm bg-white"
          >
            <option value="">All Roles</option>
            <option value="ADMIN">Admins</option>
            <option value="USER">Users</option>
          </select>

          <button
            onClick={() => setShowCreate(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md font-semibold flex items-center gap-2"
          >
            <FaPlus /> Create User
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600 text-center">Loading...</p>
        ) : !users.length ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="grid gap-4">
            {users.map((u) => (
              <div
                key={u.id}
                className="flex flex-col md:flex-row md:items-center bg-white rounded-2xl shadow-sm border border-blue-100 px-6 py-4 gap-y-2 md:gap-y-0 md:gap-x-6"
              >
                <div className="flex-1 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full shadow">
                    <FaUser className="text-blue-400 text-2xl" />
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">{u.name}</div>
                    <div className="text-xs text-gray-400">{u.email}</div>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  {editingRoleId === u.id ? (
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      onBlur={() => setEditingRoleId(null)}
                      className="rounded-full border border-blue-200 px-2 py-1 bg-blue-50 text-blue-900 text-xs"
                    >
                      <option value="ADMIN">Admin</option>
                      <option value="USER">User</option>
                    </select>
                  ) : (
                    <button
                      onClick={() => setEditingRoleId(u.id)}
                      className={`px-3 py-1 rounded-full font-medium ${roleColors[u.role] || 'bg-gray-200 text-gray-600'} flex items-center gap-2 text-xs`}
                    >
                      <FaShieldAlt /> {u.role.charAt(0) + u.role.slice(1).toLowerCase()}
                      <FaUserEdit className="opacity-70" />
                    </button>
                  )}

                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${u.active ? statusColors.active : statusColors.inactive}`}>
                    {u.active ? <FaCheckCircle /> : <FaTimesCircle />} {u.active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div className="flex gap-2 mt-3 md:mt-0">
                  {u.active ? (
                    <button onClick={() => handleUserAction(u.id, 'deactivate')} title="Deactivate"
                      className="rounded-full bg-red-50 p-2 hover:bg-red-100">
                      <FaUserSlash className="text-red-500 text-lg" />
                    </button>
                  ) : (
                    <button onClick={() => handleUserAction(u.id, 'activate')} title="Activate"
                      className="rounded-full bg-green-50 p-2 hover:bg-green-100">
                      <FaUserCheck className="text-green-500 text-lg" />
                    </button>
                  )}
                  <button onClick={() => handleUserAction(u.id, 'delete')} title="Delete"
                    className="rounded-full bg-gray-50 p-2 hover:bg-gray-200">
                    <FaTrash className="text-gray-400 text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔽 Create User Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Create New User</h2>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border border-gray-200 px-3 py-2 rounded"
                onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-200 px-3 py-2 rounded"
                onChange={(e) => setCreateForm({ ...createForm, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full border border-gray-200 px-3 py-2 rounded"
                onChange={(e) => setCreateForm({ ...createForm, password: e.target.value })}
              />
              <select
                className="w-full border border-gray-200 px-3 py-2 rounded"
                onChange={(e) => setCreateForm({ ...createForm, role: e.target.value })}
                value={createForm.role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="text-gray-500 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
