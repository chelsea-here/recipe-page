import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});
const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-young-serif',
});

var challengeName: string = "Recipe Page";

export const metadata: Metadata = {
  title: `Frontend Mentor | ${challengeName}`,
  description: `My solution to Frontend Mentor'\s ${challengeName} challenge`,
  keywords: ['HTML, CSS, JavaScript, NextJS, Tailwindcss, React'],
  creator: 'Chelsea Anne Livingston Cruz',

  openGraph: {
    title: `Frontend Mentor | ${challengeName}`,
    description: `My solution to Frontend Mentor'\s `+{challengeName}+` challenge`,
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=
      {`${outfit.variable} ${youngSerif.variable}`}
      >{children}</body>
    </html>
  );
}
