import Layout from "@/components/layout";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Project() {
  return (
    <Layout>
      <Head>
        <title>Jomo Portfolio</title>
        <meta name="description" content="jomo portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>경력사항</h2>
    </Layout>
  );
}
