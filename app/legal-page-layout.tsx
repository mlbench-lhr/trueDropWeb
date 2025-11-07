import type React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  backLink?: string;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
  backLink = "/",
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-[#3C886B] sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 lg:px-8">
        <div className="prose prose-sm max-w-none text-foreground dark:prose-invert">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 sm:py-8">
        <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © 2025 TrueDrop by Brand Comms Africa (Pty) Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
