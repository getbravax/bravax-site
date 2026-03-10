import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Replace Blind Trust with Verified Evidence
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          9.8% of U.S. revenue is lost to trust failures. 1 in 5 businesses recover nothing.
        </p>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We’re onboarding founding partners to build the trust layer B2B commerce is missing.
        </p>
        <a href="https://calendly.com/kalu-getbravax/30min" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="mt-4">
            Schedule a 30-Minute Pilot Call 
          </Button>
        </a>
      </div>
    </section>
  )
}
