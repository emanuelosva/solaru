import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Lib
import { cn } from "@/lib/utils"
// Styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solaru",
  description: "Discover the solar potention for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className,
      )}
      >
        {children}
      </body>
    </html>
  );
}
