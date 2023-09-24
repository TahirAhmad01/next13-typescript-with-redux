import ReduxProvider from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux test with Next13",
  description: "This is then test project for next js 13 client side handling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div>{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
