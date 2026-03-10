import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="container md:-mt-10 flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <img
          src="/images/SVG_Vector_Files/Transparent_Logo.svg"
          alt="Bravax Logo"
          className="mx-auto md:h-[30rem] -my-10"
        />
        <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl lg:text-5xl font-bold tracking-tight text-transparent">
          The B2B Commerce Trust Layer
        </h2>
        <p className="mx-auto max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We verify three things before money moves: real business, real information, real documents. Bravax sits between your vendors and your workflows — <strong>enforcing trust across every transaction.</strong>
        </p>
        <p className="mx-auto max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        No install. No disruption. Verified trust from day one.
        </p>
      </div>
      <div className="flex gap-4 mt-8">
        <a href="https://calendly.com/kalu-getbravax/30min" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            Schedule a Call
          </Button>
        </a>
      </div>
    </section>
  )
}
