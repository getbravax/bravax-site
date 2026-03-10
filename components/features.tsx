import { ShieldCheck, Building2, FileCheck, Lock } from "lucide-react"

const features = [
  {
    name: "Communication Trust",
    description: "Verify sender identity, thread integrity, and domain authenticity — before anything reaches your team.",
    icon: ShieldCheck,
  },
  {
    name: "Business Identity",
    description: "Continuous verification that the business you’re paying is real, registered, and financially sound — not just at onboarding.",
    icon: Building2,
  },
  {
    name: "Transaction Integrity",
    description: "Cross-system verification that work was done, goods received, and terms match — with cryptographic proof from both parties.",
    icon: FileCheck,
  },
  {
    name: "Compliance-Grade Proof",
    description: "Chain-hashed audit trail for every decision. Built for SOX, GDPR, and Nacha 2026 — without building internal systems.",
    icon: Lock,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Three Dimensions of Trust. One Layer.</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Every tool covers a piece. Bravax enforces trust across the full chain.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
