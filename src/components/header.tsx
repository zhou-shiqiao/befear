import { Mulish } from "next/font/google";
import Link from "next/link";
import logo from "@/befear-logo.png";
import Image from "next/image";

const mulish = Mulish({ weight: "600", subsets: ["latin"] });

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-[12px]">
      <div
        className={[
          "h-[100px] bg-black text-white flex items-center justify-center text-[50px]",
          mulish.className,
        ].join(" ")}
      >
        <Link href={"/"} className="relative">
          <Image alt="" src={logo} width={200} />
        </Link>
      </div>
      <div className="h-[12px] bg-black"></div>
    </header>
  );
};
