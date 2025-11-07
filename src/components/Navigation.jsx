import React from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { key: 'home', label: 'Home' },
  { key: 'album', label: 'Album' },
  { key: 'students', label: 'Student Data' },
  { key: 'org', label: 'Organization' },
  { key: 'works', label: 'Student Work' },
];

export default function Navigation({ current, onChange }) {
  return (
    <div className="w-full sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <ul className="flex items-center gap-2 sm:gap-3 py-3">
          {tabs.map((t) => (
            <li key={t.key}>
              <button
                onClick={() => onChange(t.key)}
                className={`relative px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                  current === t.key
                    ? 'text-white'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {current === t.key && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-rose-500 shadow-md"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
