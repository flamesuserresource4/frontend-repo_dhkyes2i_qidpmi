import React from 'react';

export default function WorksSection({ works }) {
  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Student Work</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <div key={i} className="group overflow-hidden rounded-xl bg-white border border-black/5 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w} alt={`Work ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-sm text-slate-600">Work {i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
