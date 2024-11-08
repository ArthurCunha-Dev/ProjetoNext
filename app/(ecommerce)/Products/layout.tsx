import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce - Products List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="min-h-screen bg-blue-600 mx-w-md m-auto">
        <span>{">>>>>>>>"}</span>
        {children}
        </div>
        
  );
}
