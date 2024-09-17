"use client";

import { useEffect, useRef } from "react";

export default function Success() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef]);

  return (
    <main className="flex flex-col items-center justify-center">
      <audio ref={audioRef} src="/failure.mp3"></audio>
      <p className="inline text-[70px] border-b-4 border-red-500">失敗</p>
    </main>
  );
}
