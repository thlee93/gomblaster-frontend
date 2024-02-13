import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { blastSepolia } from 'wagmi/chains';

import { GlobalStyle } from '@/components/GlobalStyle';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
});

const config = getDefaultConfig({
  appName: 'Gomblaster',
  projectId: 'gomblaster-frontend',
  chains: [blastSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <GlobalStyle />
            <Component {...pageProps} />

            <div id="portal" />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}

export default MyApp;
