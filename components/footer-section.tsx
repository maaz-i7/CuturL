import { Heart } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
]

export default function FooterSection() {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-6">
            {navLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-slate-300 dark:text-zinc-700 ml-2 sm:ml-6 hidden sm:inline">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-slate-500 dark:text-slate-500 text-sm text-center">© 2025 CuturL. All Rights Reserved.</p>

          {/* Made with love */}
          <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
