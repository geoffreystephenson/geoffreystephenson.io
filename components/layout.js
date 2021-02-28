import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = process.env.NEXT_PUBLIC_NAME;
export const siteTitle = process.env.NEXT_PUBLIC_NAME;

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={`About ${name}`} />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src="/images/profile.jpg"
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<img
									src="/images/profile.jpg"
									className={`${styles.headerImage} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>
									{name}
								</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main id="main">{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
