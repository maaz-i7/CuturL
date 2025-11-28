import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "LinkNinja helped us increase our ad campaign click-through rate by 28%. The analytics are gold.",
    name: "Aarav",
    role: "Digital Marketer",
  },
  {
    quote: "As a student making projects, clean links just look more professional. Love it!",
    name: "Megha",
    role: "UI/UX Engineer",
  },
  {
    quote: "The QR codes and branded links make sharing super easy for my small business.",
    name: "Rohit",
    role: "ShopMe CEO",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-zinc-950 py-16 lg:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 dark:opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            What Our Users Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-xl transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-zinc-900/70 hover:-translate-y-1 shadow-sm dark:shadow-none"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-emerald-500/40 group-hover:text-emerald-500/60 transition-colors" />
              </div>

              {/* Quote text */}
              <p className="text-slate-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* User info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-medium">{testimonial.name}</p>
                  <p className="text-slate-500 dark:text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
