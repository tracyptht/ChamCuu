import React from 'react';
import { LucideProps } from 'lucide-react';

export const YinYangIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5V2z" fill="currentColor" opacity="0.5"/>
    <path d="M12 12a5 5 0 0 0-5 5 5 5 0 0 0 5 5V12z" fill="currentColor" />
    <circle cx="12" cy="7" r="1" fill="#2d1b10" stroke="none" />
    <circle cx="12" cy="17" r="1" fill="#d4af37" stroke="none" />
  </svg>
);

// Standard icon components from lucide-react (simulated for simplicity in this prompt format, 
// usually we import them but to keep file count low I will rely on lucide-react imports in App/Components)
