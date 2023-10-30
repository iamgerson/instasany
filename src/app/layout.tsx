import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const epilogue = Epilogue({ 
  subsets: ['latin'],
  weight: ['500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Instasany',
  description: 'Created by gerson.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
