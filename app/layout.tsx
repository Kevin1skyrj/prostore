import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prostore",
  description: "A modern e-commerce platform uisng Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more icons or meta tags here */}
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}