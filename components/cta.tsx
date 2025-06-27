import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Be First to Secure the Moment That Matters Most
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Invoice fraud is a $2.7B problem — and most companies discover it too late.  
        </p>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We’re onboarding a limited group of pilot partners to shape this next layer of security.
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
