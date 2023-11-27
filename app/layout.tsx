import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Example Landing Page with Next',
  description: 'Example Landing Page with Next Js and Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
