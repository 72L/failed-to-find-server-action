'use client';
import { useState, useEffect } from "react";
import { clickMe } from './actions';

export default function Home() {
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const updateDeals = async () => {
        const response = await clickMe(query);
        setResponse(response);
      };
      updateDeals();
    }, 500); // 1 second debounce delay
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="text-center">
        {response}
      </div>
    </div>
  );
}
