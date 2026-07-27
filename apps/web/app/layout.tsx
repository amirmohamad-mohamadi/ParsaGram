import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const vazirFont = localFont({
  src: "./fonts/Vazirmatn-FD-Regular.woff2",
  display: "swap",
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "Parsagram",
  description: "مدیریت و ساخت محتوای پارسی",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body className={`${vazirFont.className} antialiased`}>{children}</body>
    </html>
  );
}
