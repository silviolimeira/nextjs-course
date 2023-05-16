import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>MyApp</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
