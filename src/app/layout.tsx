import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🎉 Sorteo Único - Maxillaris | Gana un Bono de S/ 3,500',
  description: 'Participa en nuestro sorteo y gana uno de los 3 bonos de S/ 3,500 para tu tratamiento dental. Transforma tu sonrisa con Maxillaris.',
  keywords: 'sorteo dental, bono dental, tratamiento dental, maxillaris, odontología, sonrisa',
  authors: [{ name: 'Maxillaris' }],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://maxillaris.com/sorteo',
    title: '🎉 Sorteo Único - Maxillaris',
    description: 'Gana un bono de S/ 3,500 para tu tratamiento dental. ¡Participa ahora!',
    siteName: 'Maxillaris',
    images: [
      {
        url: 'https://maxillaris.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sorteo Único - Maxillaris',
      },
    ],
  },
      twitter: {
      card: 'summary_large_image',
      site: '@maxillaris',
      creator: '@maxillaris',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
