import "./globals.css"

import { Gothic_A1, Inter } from "next/font/google"

import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Azul Marino",
  description: "Como las olas del mar, estamos dando forma a algo grandioso.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gothic.className}>{children}</body>
    </html>
  )
}
