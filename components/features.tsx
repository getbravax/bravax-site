import { Check, Clock, XCircle, Users } from "lucide-react"

const features = [
  {
    name: "Built for Financial Trust, Not Inbox Noise",
    description: "Bravax doesn’t scan for spam — we secure invoice intent at the source, before approval workflows begin.",
    icon: Check,
  },
  {
    name: "Real-Time Intervention, Not After-the-Fact Alerts",
    description: "We act at the moment of send — when trust decisions are made — not after funds are gone.",
    icon: Clock,
  },
  {
    name: "No Buyer Install Required",
    description: "Secure delivery happens through our browser-based experience. No disruption to your team, no IT lift.",
    icon: XCircle,
  },
  {
    name: "Designed for AP + Security Alignment",
    description: "Bravax helps finance and security teams speak the same language with audit-ready trust trails.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What Bravax Does Differently</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Bravax can transform your business with our innovative technologies.
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
