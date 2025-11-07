import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -10 },
};

export default function AlbumSection({ photos, index, onPrev, onNext }) {
  const photo = photos[index % photos.length];
  return (
    <section className="relative py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Album</h2>
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl bg-white">
          <AnimatePresence mode="wait">
            <motion.img
              key={photo}
              src={photo}
              alt="Album"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={onPrev}
              className="rounded-full bg-white/80 hover:bg-white text-slate-700 px-3 py-2 shadow backdrop-blur transition"
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className="rounded-full bg-white/80 hover:bg-white text-slate-700 px-3 py-2 shadow backdrop-blur transition"
            >
              Next
            </button>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">15 curated memories with smooth transitions.</p>
      </div>
    </section>
  );
}
