import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junior Devs Hawaii</title>
        <meta
          name="description"
          content="A small webapp that contains info for upcoming junior developers in Hawaii."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Junior Devs Hawaii</h1>

        <p className={styles.description}>
          A small web app containing information about opportunities for junior
          developers in Hawaii
        </p>

        <div className={styles.grid}>
          <a href="/getting-started" className={styles.card}>
            <h2>Getting Started &rarr;</h2>
            <p>
              You just graduated, or you're looking for a career change. Now
              what?
            </p>
          </a>

          <a href="/whos-hiring" className={styles.card}>
            <h2>Who's Hiring? &rarr;</h2>
            <p>Find employer information and see who's hiring.</p>
          </a>

          <a href="/contribute" className={styles.card}>
            <h2>Contribute &rarr;</h2>
            <p>
              Submit an employer that is hiring and include some relevant
              information.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>
              Contact information in case you'd like to speak to the
              maintainer/developer{' '}
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Created by Ryota Seki
        </a>
      </footer>
    </div>
  )
}
