import Head from "next/head";
import Navbar from "./components/Navbar";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/vercel.svg" alt="Logo Vercel" width={300} height={200} />
      <h1>Ini halaman About</h1>
    </>
  );
};

export default about;
