import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitCoin Hub",
  description: "KoinX assignment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.className}`}>
        <NavBar/>
      {children}
      </body>
    </html>
  );
}
