import Head from "next/head";
import "../styles/globals.css";
import UtoposLanding from "../components/UtoposLanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>UTOPOS | Unlock the Codex</title>
        <meta property="og:title" content="UTOPOS | Unlock the Codex" />
        <meta property="og:description" content="Are you a Seeker? Take the Codex challenge." />
        <meta property="og:image" content="/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <UtoposLanding />
    </>
  );
}
