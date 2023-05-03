import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url ? data.properties.Github.url : "";
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col m-3 bg-slate-400 rounded-md">
      <Image
        className="w-full h-auto rounded-t-xl"
        src={imgSrc}
        alt="cover Image"
        objectFit="contain"
        fill
        quality={100}
      />
      <h1>{title}</h1>
      <h3>{description}</h3>
      {/* <Link href={github}>깃허브 바로가기</Link> */}
      <a href={github}>깃허브 바로가기</a>
    </div>
  );
}
