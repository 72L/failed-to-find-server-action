'use client';
import React from 'react';
import { clickMe } from './actions';

export default function Home() {
  const [response, setResponse] = React.useState('');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        className="bg-[#f0f0f0] text-[#333] px-4 py-2 rounded-lg shadow-md"
        onClick={
          async () => {
            const res = await clickMe();
            setResponse(res);
          }
        }
      >
        Click me!
      </button>
      <div className="text-center">
        {response}
      </div>
    </div>
  );
}
