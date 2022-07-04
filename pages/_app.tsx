import '../styles/globals.css'
import 'antd/dist/antd.less'
import type { AppProps } from 'next/app'
import DefaultLayout from '~/components/DefaultLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
