import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IlluminAI',
  description: 'Official IlluminAI Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
