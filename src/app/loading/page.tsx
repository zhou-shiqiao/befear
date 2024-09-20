"use client";

import { Suspense, useEffect, useRef } from "react";
import styles from "./loading.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { PASS } from "@/var/pass";

const Control = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const pass = searchParam.get("pass");
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!pass) {
        router.push("/failed");
        return;
      }
      if (PASS.includes(pass)) {
        router.push("/success");
      } else {
        router.push("/failed");
      }
    }, 5100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <></>;
};

export default function Loading() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef]);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <audio ref={audioRef} src="/loading.mp3"></audio>
      <p className="text-[40px]">認証中</p>
      <div
        className={["w-[60vw] h-[40px] bg-[#D9D9D9] rounded-[5px] p-1"].join(
          " "
        )}
      >
        <div
          id="bar"
          className={[
            "h-full w-0 bg-black rounded-[4px] transition-[width] ease-linear",
            styles.bar,
          ].join(" ")}
        ></div>
        <Suspense>
          <Control />
        </Suspense>
      </div>
    </main>
  );
}
