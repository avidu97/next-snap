import { SnipcartProvider } from "use-snipcart";
import "@styles/globals.scss";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <SnipcartProvider>
        <Component {...pageProps} />
      </SnipcartProvider>
    </>
  );
}

export default MyApp;
