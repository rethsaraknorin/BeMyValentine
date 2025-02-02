import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Be my valentine",
  description: "I love you, from Ji Cheng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
