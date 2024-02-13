import { AppProps } from 'next/app';
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
});

import { GlobalStyle } from '@/components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <GlobalStyle />
      <Component {...pageProps} />

      <div id="portal" />
    </main>
  );
}

export default MyApp;
