import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Starter",
    price: "₹0",
    period: "/ month",
    description: "Perfect for getting started",
    features: ["10 links per month", "Basic analytics", "7-day click history", "QR code generator"],
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/ month",
    description: "Best for growing teams",
    features: ["Unlimited links", "Detailed analytics", "Custom domains", "Team access"],
    highlighted: true,
    badge: "Recommended",
  },
  {
    name: "Business",
    price: "₹999",
    period: "/ month",
    description: "For large organizations",
    features: ["Everything in Pro", "Advanced API access", "SLA + Priority Support", "Custom limits"],
    highlighted: false,
    badge: null,
  },
]

export default function PricingSection() {
  return (
    <section className="relative w-full bg-slate-100 dark:bg-zinc-950 py-16 lg:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 dark:opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Simple, transparent pricing. Start for free and upgrade anytime.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-emerald-500/20 to-white dark:to-zinc-900/80 border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                  : "bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-sm font-semibold text-white dark:text-zinc-900 bg-emerald-500 dark:bg-emerald-400 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-slate-500 dark:text-zinc-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                <span className="text-slate-500 dark:text-zinc-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-emerald-500/20" : "bg-slate-100 dark:bg-zinc-800"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.highlighted ? "text-emerald-500 dark:text-emerald-400" : "text-slate-500 dark:text-zinc-400"}`}
                      />
                    </div>
                    <span className="text-slate-700 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  plan.highlighted
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white dark:text-zinc-900"
                    : "bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300 dark:hover:bg-zinc-700 text-slate-900 dark:text-white"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-500 dark:text-zinc-500 text-sm mt-12">
          All plans include SSL, 99.9% uptime SLA, and 24/7 monitoring.
        </p>
      </div>
    </section>
  )
}
