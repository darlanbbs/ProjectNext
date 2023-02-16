import Head from 'next/head'
import Footer from './NavFoo/Footer'
import Navbar from './NavFoo/Navbar'
import * as S from '../styles/pages/cardpokemon.styles'

export default function Layout({ children }: any) {
  return (
    <S.Container>
      <Head>
        <title>PokeNext</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </S.Container>
  )
}
