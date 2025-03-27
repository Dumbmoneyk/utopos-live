import Head from "next/head";
import UtoposLanding from "../components/UtoposLanding";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>UTOPOS | Unlock the Codex</title>
      </Head>
      <UtoposLanding />
    </>
  );
}
