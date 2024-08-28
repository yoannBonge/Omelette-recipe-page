import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-text" });
const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  description: "Recipe page (integration with Next, Tailwind)",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${youngSerif.variable} `}>
        {children}
        {/*RESPONSIVE HELPER*/}
        {/*<div className="fixed bottom-4 left-4 z-50 text-[3rem] text-green-500">
          <span className="sm:hidden">XS</span>
          <span className="hidden sm:block md:hidden">SM</span>
          <span className="hidden md:block lg:hidden">MD</span>
          <span className="hidden lg:block xl:hidden">LG</span>
          <span className="hidden xl:block 2xl:hidden">XL</span>
          <span className="hidden 2xl:block">2XL</span>
        </div> */}
      </body>
    </html>
  );
}
