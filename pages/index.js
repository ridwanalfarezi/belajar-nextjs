import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/next.svg" alt="Logo Next JS" width={300} height={200} />
      <h1>Ini halaman Home</h1>
    </>
  );
}
