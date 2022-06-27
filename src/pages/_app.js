import { SnipcartProvider } from "use-snipcart";
import "@styles/globals.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-31W943248F"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-31W943248F');
        `}
      </Script>
      <SnipcartProvider>
        <Component {...pageProps} />
      </SnipcartProvider>
    </>
  );
}

export default MyApp;
