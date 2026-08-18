import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Carlos Henrique — Senior Front-end Developer",
    description:
      "Senior Front-end Developer e Tech Lead com mais de 8 anos de experiência em React, TypeScript, micro-frontends e sistemas corporativos.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title: "Carlos Henrique — Senior Front-end Developer",
      description: "Interfaces que escalam. Sistemas que sustentam.",
      url: "/",
      siteName: "Carlos Henrique",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Carlos Henrique — Senior Front-end Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Carlos Henrique — Senior Front-end Developer",
      description: "Interfaces que escalam. Sistemas que sustentam.",
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
