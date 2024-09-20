"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <p className="text-[40px]">暗証番号を入力せよ</p>
      <div className="flex flex-row gap-[29px]">
        {[0, 1, 2, 3].map((idx) => (
          <input
            id={idx.toString()}
            maxLength={1}
            key={idx}
            autoFocus={idx === 0}
            className="w-[98px] h-[155px] bg-[#D9D9D9] text-[90px] text-center focus:outline-none focus:border-[5px] focus:border-black rounded-[20px]"
            onFocus={(e) => {
              e.target.select();
            }}
            // tabIndex={idx + 1}
            onKeyDown={(e) => {
              e.preventDefault();
              e.currentTarget.value = isNaN(parseInt(e.key)) ? "" : e.key;
              console.log(e.key);
              if (e.key === "Backspace" && idx !== 0) {
                const prev = document.getElementById(
                  (idx - 1).toString()
                ) as HTMLInputElement;
                // prev.value = "";
                prev.focus();
              } else if (e.key === "Backspace" && idx === 0) {
                return;
              } else if (
                ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                  .map((n) => n.toString())
                  .includes(e.key)
              ) {
                return false;
              } else if (idx === 3) {
                e.currentTarget.blur();
                const pass = [0, 1, 2, 3]
                  .map(
                    (idx) =>
                      (
                        document.getElementById(
                          idx.toString()
                        ) as HTMLInputElement
                      ).value
                  )
                  .join("");
                console.log(pass);
                router.push("/loading?pass=" + pass);
              } else {
                document.getElementById((idx + 1).toString())?.focus();
              }
            }}
          />
        ))}
      </div>
    </main>
  );
}
