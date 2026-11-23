import React, { useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import SiteInteractions from './interactions.jsx'
import SurfaceMotion from './SurfaceMotion.jsx'
import './site.css'

function ScrollReveals() {
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.remove('waiting-to-enter')
          observer.unobserve(target)
        }
      })
    })
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      element.classList.add('waiting-to-enter')
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])
  return null
}

export function mount(Page) {
  createRoot(document.getElementById('main')).render(
    <>
      <Page />
      <ScrollReveals />
      <SiteInteractions />
      <SurfaceMotion />
    </>,
  )
}
