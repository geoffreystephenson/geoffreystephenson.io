import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About</title>
			</Head>
			<h1>About {process.env.NEXT_PUBLIC_NAME}</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
}
