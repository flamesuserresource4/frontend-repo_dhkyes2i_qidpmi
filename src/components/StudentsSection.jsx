import React from 'react';

export default function StudentsSection({ students }) {
  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Student Data</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((s) => (
            <div key={s.name} className="group rounded-xl bg-white/80 backdrop-blur border border-black/5 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <img src={s.photo} alt={s.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow" />
                <div>
                  <div className="font-semibold text-slate-800">{s.name}</div>
                  <div className="text-sm text-slate-600">Hobby: {s.hobby}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600 italic">“{s.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
