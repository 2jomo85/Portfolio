import Link from "next/link";
import Animation from "@/components/home/animation";

export default function Hero() {
  const workStart = new Date("2011", "3", "4");
  const today = new Date();

  const workYearPeriod = Math.ceil(
    Math.abs(workStart - today) / (1000 * 60 * 60 * 24 * 365)
  );
  console.log(workStart, today, workYearPeriod);

  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. jomo 입니다.
        </h1>
        <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-gray-900">
          {workYearPeriod}년 차, 오늘도 빡!코딩 중인 개발자 입니다.
        </h2>
        <p className="mb-8 leading-relaxed">
          {workYearPeriod}년 차 개발자로 SI, 제조품질경영관리(QMS),
          제조공정관리(MES, POP), 통계적공정관리(SPC), 전사적자원관리(ERP) 분야
          컨설팅 및 시스템 개발 / 운영하였습니다.
          <br />
          <br />
          새로운 언어에 흥미를 가지고 배우는 것을 좋아하며,
          <br />
          어제보다 더 나은 개발자가 되고 싶은 마음가짐으로 학습하는 것을 생활화
          하고 있습니다.
          <br />
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">프로젝트 보러가기</button>
          </Link>
        </div>
      </div>
    </>
  );
}
