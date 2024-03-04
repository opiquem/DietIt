import { Locale, i18n } from '@/i18n.config';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DietIt',
  description: 'DietIt',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <Providers>
      <html lang={params.lang}>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
