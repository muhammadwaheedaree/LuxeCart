import './globals.css'
import { Inter } from 'next/font/google'
import Header from '././components/Header'
import Footer from '././components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LuxeCart - Premium E-commerce Experience',
  description: 'Discover a world of luxury and innovation with LuxeCart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-text-primary`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

