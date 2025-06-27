import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <Image
          src="/images/SVG_Vector_Files/Transparent_Logo.svg"
          alt="Bravax Logo"
          width={400}
          height={400}
          className="mx-auto"
        />
        <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Real-Time Payment Trust, Before the Money Moves
        </h2>
        <p className="mx-auto max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Invoice fraud doesn’t wait — and neither should your defenses. Bravax sits between email and AP workflows to verify financial trust <strong>before approvals flow downstream.</strong>  
        </p>
        <p className="mx-auto max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        No install. No disruption. Just quiet protection at the moment it matters most.
        </p>
      </div>
      <div className="flex gap-4">
        <a href="https://calendly.com/kalu-getbravax/30min" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            Schedule a Call
          </Button>
        </a>
      </div>
    </section>
  )
}
