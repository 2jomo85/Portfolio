import Layout from "@/components/layout";
import Head from "next/head";
import { Inter } from "next/font/google";
import { TOKEN, DB_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

const inter = Inter({ subsets: ["latin"] });

export default function Project({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Jomo Portfolio</title>
        <meta name="description" content="jomo portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>총 프로젝트: {projects.results.length}</h2>

      {projects.results.map((prj, index) => (
        <ProjectItem key={prj.id} data={prj} />
      ))}
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps(context) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DB_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
