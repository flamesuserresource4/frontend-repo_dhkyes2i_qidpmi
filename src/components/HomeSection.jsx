import React from 'react';
import { motion } from 'framer-motion';

export default function HomeSection({ teacherPhoto }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800"
        >
          Kelas VI Yearbook
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-600 leading-relaxed"
        >
          Sebuah kenangan elegan dengan sentuhan motif batik Indonesia — hangat, rapi, dan menenangkan.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mt-10 flex items-center justify-center"
        >
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full ring-4 ring-white shadow-2xl overflow-hidden bg-white">
            <img
              src={teacherPhoto}
              alt="Homeroom Teacher"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-black/5 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-sm text-slate-500"
        >
          Wali Kelas • 2024/2025
        </motion.div>
      </div>
    </section>
  );
}
