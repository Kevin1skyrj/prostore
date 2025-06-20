
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | Prostore`
  },
  description: APP_DESCRIPTION,
  metadataBase:new URL(SERVER_URL)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more icons or meta tags here */}
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
           {children}
        </ThemeProvider>
       
      </body>
    </html>
  )
}