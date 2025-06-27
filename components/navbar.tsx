import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img
            src="/images/SVG_Vector_Files/Transparent_Logo.svg"
            alt="Bravax Logo"
            className="mx-auto h-20"
          />
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://calendly.com/kalu-getbravax/30min" target="_blank" rel="noopener noreferrer">
            <Button size="sm">Schedule a Call</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
