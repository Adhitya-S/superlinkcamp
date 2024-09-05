import type { Metadata } from "next";

import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Superlink",
  description: "A Massive Link For Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    )
  }
