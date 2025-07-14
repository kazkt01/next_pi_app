'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Student = {
  id: number;
  name: string;
  average: number;
  age: number;
};

export default function Home() {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data: Student) => setStudent(data))
      .catch((err) => console.error('API Error:', err));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-xl font-bold">🎓 学生データ</h1>

        {student ? (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md w-full max-w-md">
            <p>🆔 ID: {student.id}</p>
            <p>👤 名前: {student.name}</p>
            <p>📊 平均点: {student.average.toFixed(2)}点</p>
            <p>🎂 年齢: {student.age}歳</p>
          </div>
        ) : (
          <p className="text-gray-500">読み込み中...</p>
        )}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} My Next/FastAPI App</p>
      </footer>
    </div>
  );
}
