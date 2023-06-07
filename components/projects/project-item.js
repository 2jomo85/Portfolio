import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.link.url ? data.properties.link.url : "";
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = !data.cover
    ? "https://img.freepik.com/free-vector/illustration-of-magnifying-glass-icon_53876-5613.jpg?w=826&t=st=1686107894~exp=1686108494~hmac=486aa2a934875a1917c5d5daff3b85e5e6e7398c7ec4be9bde770d7bef33b67b"
    : data.cover.file?.url || data.cover.external.url;
  const skills = data.properties.Skill.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  function imageError(e) {
    e.target.src =
      "https://img.freepik.com/free-vector/illustration-of-magnifying-glass-icon_53876-5613.jpg?w=826&t=st=1686107894~exp=1686108494~hmac=486aa2a934875a1917c5d5daff3b85e5e6e7398c7ec4be9bde770d7bef33b67b";
  }

  return (
    <div className="project-card ">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover Image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
        onError={imageError}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="m4-4 text-xl">{description}</h3>
        {/* <Link href={github}>깃허브 바로가기</Link> */}
        <a href={github}>깃허브 바로가기</a>
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {skills.map(t => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              //className={`px-2 py-1 mr-2 rounded-md bg-${t.color}-200 dark:bg-${t.color}-700 w-30`}
              key={t.id}
            >
              {t.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
