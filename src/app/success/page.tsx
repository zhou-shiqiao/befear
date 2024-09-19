"use client";
import { AUTO_TOP } from "@/var/pass";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Success() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, AUTO_TOP);
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef]);

  return (
    <main className="flex flex-col items-center justify-center">
      <audio ref={audioRef} src="/success.wav"></audio>
      <p className="inline text-[70px] border-b-4 border-green-400">成功</p>
    </main>
  );
}
