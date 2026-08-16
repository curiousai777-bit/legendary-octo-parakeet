import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortfolioAI — Build a portfolio that fits your career",
  description: "PortfolioAI helps students discover their niche, build projects, and create a portfolio that showcases real evidence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
