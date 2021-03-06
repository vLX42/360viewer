import type { NextPage } from "next";
import Head from "next/head";
import { Viewer } from "../components/viewer";
import styles from "../styles/Home.module.css";
import { FPSStats } from "fps-react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>360 Viewer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>360 Viewer</h1>

        <div className={styles.grid}>
          <Viewer />
        </div>
        <FPSStats />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
