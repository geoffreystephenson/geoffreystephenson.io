import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About {process.env.NEXT_PUBLIC_NAME}</title>
				<meta
					name="description"
					content={process.env.NEXT_PUBLIC_NAME}
				></meta>
			</Head>
			<h1>About {process.env.NEXT_PUBLIC_NAME}</h1>
			<p>Senior Software Engineer &middot; Full Stack Developer</p>
			<p>Atlanta, GA</p>
			<h2>
				<Link href="/">
					<a>Back to homepage</a>
				</Link>
			</h2>
		</Layout>
	);
}
