import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={process.env.NEXT_PUBLIC_APPID}> */}
      <MoralisProvider serverUrl='https://s0pxbzmon9k2.usemoralis.com:2053/server' appId='a9vpG3VBxBerKxxCC2OPvcIkmFwIkTsbNRL3qgky'>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
