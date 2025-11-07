import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "TrueDrop",
  description:
    "A comprehensive educational platform for students, teachers, and administrators",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Toaster richColors position="top-right" />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
