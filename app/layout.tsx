import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Um Chá de Lingerie ou uma Despedida de Solteira diferente de tudo o que você já viu",
  description:
    "Que tal um Chá de Lingerie ou Despedida de solteira com a sua cara, pensado para combinar o seu estilo com a energia de suas amigas?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
