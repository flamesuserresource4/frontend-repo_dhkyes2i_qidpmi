import React from 'react';
import { User } from 'lucide-react';

export default function OrganizationSection({ teacher, students }) {
  return (
    <section className="relative py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Class Organization</h2>
        <div className="bg-white/80 backdrop-blur rounded-xl border border-black/5 p-6 shadow-sm">
          {/* Teacher */}
          <div className="flex flex-col items-center">
            <img src={teacher.photo} alt={teacher.name} className="w-20 h-20 rounded-full object-cover ring-2 ring-white shadow" />
            <div className="mt-2 font-semibold text-slate-800">{teacher.name}</div>
            <div className="text-xs text-slate-500">Homeroom Teacher</div>
          </div>

          {/* Lines */}
          <div className="h-12 w-px bg-gradient-to-b from-indigo-300 to-rose-300 mx-auto my-4" />

          {/* Students grid under */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            {students.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                {s.photo ? (
                  <img src={s.photo} alt={s.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow" />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center ring-2 ring-white shadow">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                )}
                <div className="mt-1 text-sm font-medium text-slate-800 text-center">{s.name}</div>
                <div className="text-[11px] text-slate-500">Student</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
