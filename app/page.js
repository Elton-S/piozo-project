import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <>
    <Head>
      <title>CREATE PIOZO</title>
      <link rel='icon' href='/favicon.ico'/>git push -u origin main
       
  </Head>
  <main className='bg-gray-100 min-h-screen'>
    <Header/>
  </main>
 </>
    );
}
