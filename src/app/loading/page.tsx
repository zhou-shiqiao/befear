"use client";

import { useEffect } from "react";
import styles from "./loading.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { PASS } from "@/var/pass";

export default function Loading() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const pass = searchParam.get("pass");
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pass === PASS) {
        router.push("/success");
      } else {
        router.push("/failed");
      }
    }, 5100);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <main className="flex flex-col items-center justify-center gap-10">
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
      </div>
    </main>
  );
}
