import Head from "next/head";
import Navbar from "./components/Navbar";

const Profil = () => {
  return (
    <>
      <Head>
        <title>Profil | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <h1>Ini halaman Profil</h1>
    </>
  );
};

export default Profil;
