    import type { Metadata } from 'next';
// @ts-expect-error Next.js processes global CSS imports at runtime.
import './globals.css';
import { Header, Footer } from '../components/Shell';

export const metadata: Metadata = {
	title: { default: 'AURELLE | Fine Jewellery', template: '%s | AURELLE' },
	description: 'An interactive luxury jewellery showroom concept.',
	robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
