import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const roboto_Mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto_Mono.className}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
