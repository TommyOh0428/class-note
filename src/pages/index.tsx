import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import getCurrentSem from '../functions/getDate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const currentSem = getCurrentSem();
  const currentYear = new Date().getFullYear();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">
          Some notes are incomplete and not all notes are available.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.sfu.ca/students/calendar/2022/fall/programs/software-systems/major/bachelor-of-science.html">
            Software Systems Requirement Fall 2022
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={`https://www.sfu.ca/students/calendar/${currentYear}/${currentSem}/programs/software-systems/major/bachelor-of-science.html`}>
            Software Systems Requirement {currentSem} {currentYear}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Tommy's Class Notes`}
      description={"Class notes for courses at SFU"}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
