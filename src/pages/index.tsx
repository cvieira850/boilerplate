import Head from 'next/head'

type Props = {
  title: string 
}

export default function Home({title = 'Caio'} : Props) {
  return (
    <div >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Hello Caio</h1>
    </div>
  )
}
