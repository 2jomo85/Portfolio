import Link from "next/link";
import Animation from "@/components/home/animation";

export default function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. jomo 입니다.
          <br className="hidden lg:inline-block" />
          오늘도 즐거운 하루!
        </h1>
        <p className="mb-8 leading-relaxed">
          사랑의 불러 인간이 보는 소담스러운 그들에게 때까지 보라. 피에 가치를
          인간에 구하지 끓는다. 인간은 그들은 불러 찾아다녀도, 때문이다.
          유소년에게서 무한한 끝까지 피고, 몸이 운다. 생명을 인생에 설산에서
          같이 두손을 것은 이것이다. 무한한 그들의 타오르고 같이 보라. 커다란
          대고, 품었기 없으면, 심장의 가는 속에서 소리다.이것은 쓸쓸하랴? 듣기만
          하여도 내는 실현에 수 봄바람이다. 때까지 이상의 유소년에게서 위하여서.
          싹이 구하기 꽃 몸이 살 석가는 얼마나 있을 소리다.이것은 것이다.
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
