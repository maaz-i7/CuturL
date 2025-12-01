"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Link2, BarChart3, ExternalLink, Copy, Check, Globe, Smartphone } from "lucide-react"

export default function HeroSection() {
  const [animationPhase, setAnimationPhase] = useState<"long" | "shrinking" | "short">("long")
  const [copied, setCopied] = useState(false)

  const longUrl =
    "https://www.example.com/products/categories/electronics/smartphones/iphone-15-pro-max-256gb-black?ref=campaign_summer_2024&utm_source=newsletter&utm_medium=email"

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase("shrinking")
    }, 2000)
    const timer2 = setTimeout(() => {
      setAnimationPhase("short")
    }, 2500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-[80vh] w-full bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Background gradient effects - adjusted for light/dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 via-slate-50 to-slate-50 dark:from-emerald-900/20 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left content */}
            <div className="w-full lg:flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* Logo/Brand - light/dark variants */}
              <div className="mb-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight">
                  <span className="text-cyan-500">Cut</span>
                  <span className="text-emerald-500">urL</span>
                </h2>
                <p className="mt-3 text-base sm:text-lg text-slate-500 dark:text-zinc-400">
                  The ultimate cutter to your long Links.
                </p>
              </div>

              {/* Animated Heading */}
              <div className="relative min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] mb-6">
                {/* Long URL state */}
                <div
                  className={`absolute inset-0 flex items-start transition-all duration-500 ease-in-out ${
                    animationPhase === "long" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <p className="text-slate-400 dark:text-zinc-500 font-mono text-sm sm:text-base lg:text-lg break-all leading-relaxed">
                    {longUrl}
                  </p>
                </div>

                {/* Shrinking animation */}
                <div
                  className={`absolute inset-0 flex items-center justify-center lg:justify-start transition-all duration-300 ${
                    animationPhase === "shrinking" ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
                  }`}
                >
                  <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                </div>

                {/* Final text state - light/dark text colors */}
                {/* CHANGED: Reduced font sizes from text-3xl/6xl to text-2xl/5xl */}
                <h1
                  className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700 ease-out ${
                    animationPhase === "short"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <span className="text-slate-900 dark:text-white">Shorten Links.</span>
                  <br />
                  <span className="text-emerald-600 dark:text-emerald-400">Track Clicks.</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    Look Professional.
                  </span>
                </h1>
              </div>

              {/* Subtext */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Turn long, messy URLs into clean, branded links with{" "}
                <span className="text-slate-900 dark:text-white font-medium">real-time analytics</span>. Build trust and
                track every click.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white dark:text-zinc-950 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 dark:text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Setup in 30 seconds</span>
                </div>
              </div>
            </div>

            {/* Right content - Mock preview card */}
            <div className="w-full lg:flex-1 max-w-lg mx-auto lg:mx-0 lg:max-w-xl">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60" />

                {/* Main card - light/dark variants */}
                <div className="relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl dark:shadow-2xl">
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Link2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Link Preview</h3>
                        <p className="text-xs text-slate-500 dark:text-zinc-500">Your shortened URL</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      Active
                    </span>
                  </div>

                  {/* Original URL */}
                  <div className="mb-4">
                    <label className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider mb-2 block">
                      Original URL
                    </label>
                    <div className="bg-slate-100 dark:bg-zinc-950 rounded-lg p-3 border border-slate-200 dark:border-zinc-800">
                      <p className="text-sm text-slate-500 dark:text-zinc-400 truncate font-mono">
                        https://example.com/products/summer-collection-2024...
                      </p>
                    </div>
                  </div>

                  {/* Shortened URL */}
                  <div className="mb-6">
                    <label className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider mb-2 block">
                      Shortened URL
                    </label>
                    <div className="bg-slate-100 dark:bg-zinc-950 rounded-lg p-3 border border-emerald-500/50 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <ExternalLink className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                          cuturl.io/summer24
                        </p>
                      </div>
                      <button
                        onClick={handleCopy}
                        className="p-2 rounded-lg bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300 dark:hover:bg-zinc-700 transition-colors flex-shrink-0"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Stats preview */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-100 dark:bg-zinc-950 rounded-xl p-4 border border-slate-200 dark:border-zinc-800 text-center">
                      <BarChart3 className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">2.4K</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">Total Clicks</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-zinc-950 rounded-xl p-4 border border-slate-200 dark:border-zinc-800 text-center">
                      <Globe className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">47</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">Countries</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-zinc-950 rounded-xl p-4 border border-slate-200 dark:border-zinc-800 text-center">
                      <Smartphone className="w-5 h-5 text-amber-500 dark:text-amber-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">68%</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">Mobile</p>
                    </div>
                  </div>

                  {/* Activity indicator */}
                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Live tracking enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
