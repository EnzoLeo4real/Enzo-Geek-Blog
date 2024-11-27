import Link from "next/link"
import { Search, User } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-white">Enzo Geek Space</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/ai"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              AI
            </Link>
            <Link
              href="/robotics"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Robotics
            </Link>
            <Link
              href="/space"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Space
            </Link>
            <Link
              href="/neurotech"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Neurotech
            </Link>
            <Link
              href="/energy"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Energy
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Search className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

