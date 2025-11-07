import React from 'react';

// Subtle, elegant batik background using layered SVG patterns
export default function BatikBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft gradient base with Indonesian-inspired palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-rose-50 to-amber-50" />

      {/* Gold batik motifs */}
      <svg
        className="absolute -right-20 -top-20 opacity-[0.12]"
        width="560"
        height="560"
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="batik1" x="0" y="0" width="1" height="1" patternUnits="objectBoundingBox">
            <g transform="scale(0.8)">
              <path d="M80 40C80 62.091 62.091 80 40 80C17.909 80 0 62.091 0 40C0 17.909 17.909 0 40 0C62.091 0 80 17.909 80 40Z" stroke="#b08900" strokeWidth="4" fill="none"/>
              <circle cx="40" cy="40" r="6" fill="#b08900"/>
              <path d="M40 0L40 12M40 68L40 80M0 40L12 40M68 40L80 40" stroke="#b08900" strokeWidth="3"/>
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="560" height="560" fill="url(#batik1)" />
      </svg>

      {/* Indigo batik waves */}
      <svg
        className="absolute left-0 bottom-0 opacity-[0.08]"
        width="900"
        height="500"
        viewBox="0 0 900 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 420C120 360 240 480 360 420C480 360 600 480 720 420C800 380 860 400 900 410V500H0V420Z" fill="#4338CA"/>
      </svg>
    </div>
  );
}
