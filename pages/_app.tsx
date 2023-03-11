import type { AppProps } from 'next/app';
import Head from 'next/head';

import '~/styles/app.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>RC Builds</title>
        <meta name="description" content="Keep track of your RC builds" />

        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
