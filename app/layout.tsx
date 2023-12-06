import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Full Screen Menu",
	description: "Full Screen Menu",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
