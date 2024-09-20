"use client";

import { AUTO_TOP } from "@/var/pass";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, AUTO_TOP);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <main className="flex flex-col items-center justify-center">
      <audio playsInline autoPlay src="failure.wav"></audio>
      <p className="inline text-[70px] border-b-4 border-red-500">失敗</p>
    </main>
  );
}
