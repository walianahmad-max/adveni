import { useLayoutEffect } from 'react'
import './motion.css'

const cards = [
  '[data-framer-name$=" Room Card"]',
  '[data-framer-name="King Room with Marina View Card"]',
  '[data-framer-name="Amenity Content"]',
  '[data-framer-name="Review Content"]',
  '[data-framer-name$=" Highlight"]',
  '[data-framer-name="Place Information"]',
]

export default function SurfaceMotion() {
  useLayoutEffect(() => {
    const group = new Set(Array.from(document.querySelectorAll(cards.join(',')), element =>
      element.matches('[data-framer-name="Amenity Content"],[data-framer-name="Review Content"],[data-framer-name="Place Information"]')
        ? element.parentElement : element))
    const lines = document.querySelectorAll('[data-framer-name="Divider"], hr')
    const observer = new IntersectionObserver(entries => {
      for (const {target, isIntersecting} of entries) {
        if (!isIntersecting) continue
        target.classList.add('motion-entered')
        observer.unobserve(target)
      }
    })
    for (const card of group) {
      card.classList.add('motion-card')
      observer.observe(card)
    }
    for (const line of lines) {
      line.classList.add('motion-rule')
      observer.observe(line)
    }
    return () => observer.disconnect()
  }, [])
  return null
}
