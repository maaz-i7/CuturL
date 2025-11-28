import { Link2, BarChart3, QrCode, Shield } from "lucide-react"

const features = [
  {
    icon: Link2,
    title: "Custom Short Links",
    description: "Create beautiful, memorable short links for social media, ads, and sharing.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Click Analytics",
    description: "Track clicks, locations, devices, and time-based performance instantly.",
  },
  {
    icon: QrCode,
    title: "Branded Domains & QR Codes",
    description: "Use your own domain or generate smart QR codes for offline promotions.",
  },
  {
    icon: Shield,
    title: "Secure & Spam-Protected",
    description: "Your links stay private, safe, and tamper-free.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-slate-100 dark:bg-zinc-950 py-16 lg:py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-100 to-slate-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight text-balance">
            Everything You Need to Share{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Smarter
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed text-pretty">
            CuturL gives you powerful tools to create, track, and manage short links with ease.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-zinc-900/80 hover:-translate-y-1 shadow-sm dark:shadow-none"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-emerald-500/20">
                  <feature.icon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
