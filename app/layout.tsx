import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'See-Innovation - Instagram Influencer Discovery Platform',
  description: 'Discover and connect with the perfect Instagram influencers for your brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">See-Innovation</a>
        <div className="space-x-4">
          <a href="/" className="text-sm font-medium hover:underline">Home</a>
          <a href="/pricing" className="text-sm font-medium hover:underline">Pricing</a>
          <a href="/login" className="text-sm font-medium hover:underline">Login</a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © 2024 See-Innovation. All rights reserved.
      </div>
    </footer>
  )
}