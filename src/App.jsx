import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import BatikBackground from './components/BatikBackground';
import HomeSection from './components/HomeSection';
import AlbumSection from './components/AlbumSection';
import StudentsSection from './components/StudentsSection';
import OrganizationSection from './components/OrganizationSection';
import WorksSection from './components/WorksSection';

// Use a calm, elegant palette inspired by batik: indigo, rose, amber, and soft neutrals

const teacherPhoto = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop';

// Generate 15 album images (royalty-free placeholders)
const albumPhotos = [
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518349619113-03114f06ac3f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1476370648495-3533f64427a2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1600&auto=format&fit=crop',
];

// 9 students
const students = [
  { name: 'Aisha', hobby: 'Reading', quote: 'Knowledge is power.', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
  { name: 'Bima', hobby: 'Soccer', quote: 'Play with heart.', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
  { name: 'Citra', hobby: 'Drawing', quote: 'Art tells stories.', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Dimas', hobby: 'Gaming', quote: 'Teamwork wins.', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Eka', hobby: 'Music', quote: 'Feel the rhythm.', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
  { name: 'Fajar', hobby: 'Math', quote: 'Patterns everywhere.', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop' },
  { name: 'Gita', hobby: 'Photography', quote: 'Capture the moment.', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
  { name: 'Hadi', hobby: 'Science', quote: 'Ask why.', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Intan', hobby: 'Dance', quote: 'Move with grace.', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
];

const works = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1400&auto=format&fit=crop',
];

export default function App() {
  const [tab, setTab] = useState('home');
  const [albumIndex, setAlbumIndex] = useState(0);

  const teacher = useMemo(() => ({ name: 'Ibu Saras', photo: teacherPhoto }), []);

  const next = () => setAlbumIndex((i) => (i + 1) % albumPhotos.length);
  const prev = () => setAlbumIndex((i) => (i - 1 + albumPhotos.length) % albumPhotos.length);

  return (
    <div className="min-h-screen relative">
      <BatikBackground />

      {/* Content wrapper */}
      <div className="relative z-10">
        <Navigation current={tab} onChange={setTab} />

        <main className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {tab === 'home' && (
              <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <HomeSection teacherPhoto={teacher.photo} />
              </motion.div>
            )}
            {tab === 'album' && (
              <motion.div key="album" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AlbumSection photos={albumPhotos} index={albumIndex} onPrev={prev} onNext={next} />
              </motion.div>
            )}
            {tab === 'students' && (
              <motion.div key="students" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <StudentsSection students={students} />
              </motion.div>
            )}
            {tab === 'org' && (
              <motion.div key="org" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <OrganizationSection teacher={teacher} students={students} />
              </motion.div>
            )}
            {tab === 'works' && (
              <motion.div key="works" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <WorksSection works={works} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-10 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Kelas VI Yearbook • Crafted with elegance
        </footer>
      </div>

      {/* Subtle corner ornament */}
      <div className="pointer-events-none absolute top-0 left-0 w-40 sm:w-64 aspect-square opacity-20" aria-hidden>
        <div className="absolute inset-0 rounded-br-[48%] bg-gradient-to-br from-indigo-200 via-rose-200 to-amber-200" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-56 sm:w-80 aspect-square opacity-20" aria-hidden>
        <div className="absolute inset-0 rounded-tl-[48%] bg-gradient-to-tr from-amber-200 via-indigo-200 to-rose-200" />
      </div>
    </div>
  );
}
