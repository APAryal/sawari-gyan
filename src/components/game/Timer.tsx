
import React from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  total: number;
}

export default function Timer({ timeLeft, total }: TimerProps) {
  const percentage = (timeLeft / total) * 100;

  return (
    <div className="relative w-40 h-40 flex items-center justify-center"> {/* Centered container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <TimerIcon className="w-3 h- 3text-black-500" /> {/* Centered icon */}
      </div>
      <svg className="transform -rotate-90 w-32 h-32 absolute"> {/* Centered SVG */}
        <circle
          cx="60" // Center x
          cy="60" // Center y
          r="55"  // Radius
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-gray-300"
        />
        <circle
          cx="60" // Center x
          cy="60" // Center y
          r="55"  // Radius
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 45}`} // Adjusted for radius
          strokeDashoffset={`${((100 - percentage) / 100) * (2 * Math.PI * 45)}`}
          className={`${
            timeLeft > 10 ? 'text-blue-900' : 'text-red-500'
          } transition-all duration-1000 ease-linear`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center"> {/* Centered text */}
        <span className="text-6xl font-semibold">{timeLeft}s</span> {/* Larger text */}
      </div>
    </div>
  );
}