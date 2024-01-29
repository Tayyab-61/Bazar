import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ChakraProvider>
     
      <body className={inter.className}>
      <Navbar/>
        {children}</body>
      </ChakraProvider>
    </html>
  );
}
