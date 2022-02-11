import Head from 'next/head'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'
import Card from '../components/card'

export default function Home() {
  const [loopTime, setLoopTime] = useState(0)
  const [loopTimer, setLoopTimer] = useState(null)

  useEffect(() => {
    const timer: any = setInterval(() => {
      setLoopTime((t) => ++t % 16)
    }, 500)
    setLoopTimer(timer)
  }, [])

  const setAnimation = () => {
    if (loopTimer) {
      clearInterval(loopTimer)
      setLoopTimer(null)
    } else {
      const timer: any = setInterval(() => {
        setLoopTime((t) => ++t % 16)
      }, 500)
      setLoopTimer(timer)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IconContext.Provider
        value={{ color: '#6231EC', className: 'global-class-name' }}
      >
        <main className="overflow-none flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <div className="mr-24">
            <p>Loop Animation</p>
            <div className="h-52 w-72 overflow-hidden rounded-2xl border border-purple px-4 py-2">
              <div className="mb-2 px-4 text-center text-sm font-bold text-grey">
                <p>
                  Which of the below statements about electricity is not true?
                </p>
              </div>
              <div className="selectors translate-y-0.5">
                <Card
                  index={0}
                  time={loopTime}
                  title="Electricity is measured in units called watts"
                  active={false}
                />
                <Card
                  index={1}
                  time={loopTime}
                  title="Electricity flows at the speed of light"
                  active={true}
                />
                <Card
                  index={2}
                  time={loopTime}
                  title="Electricity is a primary energy source"
                  active={false}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setAnimation()}
              className="h-8 w-24 rounded-md border border-purple"
            >
              {loopTimer ? 'Stop' : 'Start'}
            </button>
          </div>
        </main>
      </IconContext.Provider>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
