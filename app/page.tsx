import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <Avatar className="h-[103px] w-[103px] rounded-3xl">
          <AvatarImage src="/lofo_avatar.jpeg"/>
          <AvatarFallback>LOFO</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          말씀 보는 개발자 | LOFO
        </h1>
        <p className="max-w-[700px] text-base text-muted-foreground">
          로포는 미디어를 통한<br/>
          하나님의 나라 완성을 꿈꿉니다.
        </p>
        <p className="text-xs">Jesus Loves You💚</p>
      </div>
      <div className="flex gap-4 flex-col">
        <Link
          href="https://forms.gle/WWRP22e2GpcSVYSq7"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({variant: "outline"}), "w-full")}
        >
          🙏청년사역컨퍼런스 등록하기
        </Link>
        <Link
          href="https://forms.gle/F2m8ov1LxNcZfH94A"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({variant: "outline"}), "w-full")}
        >
          🙏1분 만에 오프라인 예배 신청하기
        </Link>
        <Link
          href="https://forms.gle/2zaJAK1HkM8gC5zZ7"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({variant: "outline"}), "w-full")}
        >
          🙏1분 만에 온라인 예배 신청하기
        </Link>
        <Link
          href="https://www.youtube.com/@jvmusic5778"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({variant: "outline"}), "w-full")}
        >
          🎧JV Worship가기
        </Link>
        <Link
          href="https://www.youtube.com/@JVTV22200"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({variant: "outline"}), "w-full")}
        >
          📺JVTV 바로가기
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg">후원 계좌 (Donation) 💚</h2>
        <div className="h-[16px]"/>
        <div className="text-base font-bold text-center">
          <p>카카오뱅크 3333-06-1906749</p>
          <p>이주영</p>
        </div>
        <div className="h-[8px]"/>
        <div>모든 후원금은 로포가 컨텐츠 제작 및</div>
        <div>미디어 사역에 필요한 제작비로 쓰입니다.</div>
      </div>
    </section>
  );

}
