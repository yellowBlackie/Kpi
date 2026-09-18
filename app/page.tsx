'use client';

import { useState } from 'react';
import { Info, HelpCircle } from 'lucide-react';

export default function UIControlsLab() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">UI Controls: Description and Examples</h1>
          <p className="text-slate-500">Next.js & Tailwind CSS Implementation</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. Radiobutton */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">1. Radiobutton</h2>
            <p className="text-sm text-slate-500 italic mb-4">Mutually exclusive choices. Only one can be selected.</p>
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-medium mb-2">Gender:</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" /> Male
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" /> Female
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Checkbox */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">2. Checkbox</h2>
            <p className="text-sm text-slate-500 italic mb-4">Independent multiple selections.</p>
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-medium mb-2">Interests:</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /> Sports
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /> Music
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Text input */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">3. Text input</h2>
            <p className="text-sm text-slate-500 italic mb-4">Allow users to enter and edit text data.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Comment:</label>
                <textarea rows={2} placeholder="Write a comment..." className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"></textarea>
              </div>
            </div>
          </section>

          {/* 4. Tabs */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">4. Tabs</h2>
            <p className="text-sm text-slate-500 italic mb-4">Organize content into separate views.</p>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-slate-200 bg-slate-50">
                {['profile', 'settings', 'security'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-4 text-sm text-slate-600 bg-white">
                {activeTab === 'profile' && <p>Profile content here. Edit your public information.</p>}
                {activeTab === 'settings' && <p>Settings content here. Manage your preferences.</p>}
                {activeTab === 'security' && <p>Security content here. Update your password.</p>}
              </div>
            </div>
          </section>

          {/* 5. Button */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">5. Button</h2>
            <p className="text-sm text-slate-500 italic mb-4">Trigger actions when clicked.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Submit</button>
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition-colors border border-slate-200">Secondary</button>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors">Delete</button>
            </div>
          </section>

          {/* 6. Text label */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">6. Text label</h2>
            <p className="text-sm text-slate-500 italic mb-4">Provide information or describe elements.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Email address:</span>
                <span className="text-xs text-slate-400">(Required)</span>
              </div>
              <div className="px-3 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-md border border-green-200">
                Success! Your data was saved.
              </div>
            </div>
          </section>

          {/* 7. Link */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">7. Link</h2>
            <p className="text-sm text-slate-500 italic mb-4">Navigate users to other pages.</p>
            <div className="flex gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">Google</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">Wikipedia</a>
            </div>
          </section>

          {/* 8. Tooltip */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-visible">
            <h2 className="text-xl font-semibold mb-2">8. Tooltip</h2>
            <p className="text-sm text-slate-500 italic mb-6">Display additional information on hover.</p>
            <div className="flex items-center gap-8">
              <div className="group relative inline-block">
                <span className="cursor-help border-b border-dashed border-slate-400 font-medium">Hover me</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-2 py-1 bg-slate-800 text-white text-xs rounded shadow-lg">
                  Extra details here
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>

              <div className="group relative inline-flex">
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <HelpCircle className="w-5 h-5" />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-2 py-1 bg-slate-800 text-white text-xs rounded shadow-lg z-10">
                  Help Information
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Dropdown list */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">9. Dropdown list</h2>
            <p className="text-sm text-slate-500 italic mb-4">Select one option from a collapsible list.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Country:</label>
                <select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer">
                  <option>Ukraine</option>
                  <option>Poland</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
          </section>

          {/* 10. Data grid */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">10. Data grid</h2>
            <p className="text-sm text-slate-500 italic mb-4">Display tabular data with clear structure.</p>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-slate-900 font-medium">Anna</td>
                    <td className="px-4 py-3 text-slate-600">Developer</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-slate-900 font-medium">Ivan</td>
                    <td className="px-4 py-3 text-slate-600">Designer</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">Offline</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}