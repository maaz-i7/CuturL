import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import FooterSection from "@/components/footer-section"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </main>
  )
}
