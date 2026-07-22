import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: {
    absolute: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación · Pablo Álvarez',
  },
  description:
    'Asesoramiento fitness personalizado con Pablo Álvarez, Campeón de España de Culturismo. Suplementación Life Pro y seguimiento real en Gijón. Transforma tu físico con criterio.',
  openGraph: {
    title: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación · Pablo Álvarez',
    description:
      'Asesoramiento personalizado con Pablo Álvarez, Campeón de España. Suplementación Life Pro y seguimiento real en Gijón.',
    url: 'https://fitmaster.es',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación · Pablo Álvarez',
    description:
      'Pablo Álvarez, Campeón de España. Asesoramiento personalizado, suplementación Life Pro y seguimiento real en Gijón.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es' },
}

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación',
  description:
    'Fitmaster es el ecosistema fitness en Gijón fundado por Pablo Álvarez, Campeón de España de Culturismo. Asesoramiento personalizado, suplementación Life Pro y seguimiento real.',
  thumbnailUrl: 'https://fitmaster.es/opengraph-image',
  uploadDate: '2024-01-01',
  contentUrl: 'https://fitmaster.es/videohome.mp4',
  embedUrl: 'https://fitmaster.es',
  publisher: { '@id': 'https://fitmaster.es/#organization' },
}

const services = [
  {
    num: '01',
    label: 'Asesoramiento',
    title: 'Asesoramiento',
    text: 'Entrenamiento, nutrición y seguimiento personalizado para dejar de ir a ciegas y progresar con criterio.',
    href: '/asesoramiento',
  },
  {
    num: '02',
    label: 'Tienda',
    title: 'Tienda',
    text: 'Suplementación seleccionada con lógica, recomendación personalizada y experiencia de compra pensada para ayudarte.',
    href: '/tienda',
  },
  {
    num: '03',
    label: 'Equipo',
    title: 'Equipo',
    text: 'Disciplina, rendimiento y cultura de esfuerzo llevadas al máximo por atletas que representan los valores de Fitmaster.',
    href: '/equipo',
  },
]

const forYou = [
  'Quieres estructura en tu entrenamiento y en tu nutrición',
  'Necesitas claridad sobre qué hacer y cómo hacerlo',
  'Valoras seguimiento, criterio y personalización',
  'Buscas resultados reales, no parches temporales',
  'Estás dispuesto a seguir un sistema con consistencia',
]

const stats = [
  { num: '+250', label: 'Transformados' },
  { num: 'Campeón', label: 'de España' },
  { num: 'Mr. Olympia', label: 'Experiencia' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* HERO */}
      <section className="bg-black">
        <div className="relative min-h-screen lg:grid lg:grid-cols-2">

          {/* Móvil: foto de Pablo como fondo */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/pablo1.jpg"
              fill
              alt="Pablo Álvarez — Fitmaster Gijón"
              className="object-cover object-[center_30%]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/95" />
          </div>

          {/* Columna izquierda: contenido */}
          <div className="relative z-10 flex flex-col justify-end lg:justify-center px-6 lg:px-14 pt-28 pb-24 lg:py-28 min-h-screen lg:min-h-full">
            <span className="section-label mb-5 block">Fitmaster · Gijón</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(52px,7vw,80px)] tracking-tight mb-6">
              Transforma<br />
              tu físico<br />
              <span className="text-fitgreen">con criterio.</span>
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-sm mb-8">
              Asesoramiento personalizado con Pablo Álvarez, Campeón de España de Culturismo. Plan, seguimiento real y resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-primary">
                Solicitar asesoría <ArrowRight size={14} />
              </Link>
              <Link href="/asesoramiento" className="btn-secondary">
                Ver el asesoramiento
              </Link>
            </div>
          </div>

          {/* Columna derecha: foto de Pablo (solo desktop) */}
          <div className="hidden lg:block relative">
            <Image
              src="/pablo1.jpg"
              fill
              alt="Pablo Álvarez — Entrenador Personal Gijón"
              className="object-cover object-[center_30%]"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 border-t border-white/10">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`py-5 lg:py-7 px-3 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}>
              <p className="font-heading font-black text-fitgreen text-lg lg:text-2xl leading-none mb-0.5">{s.num}</p>
              <p className="font-body text-white/40 text-[10px] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-[#050505] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label block mb-4">Servicios</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,5vw,56px)] leading-[0.9] tracking-tight mb-12 lg:mb-16">
            Todo lo que necesitas<br />para avanzar.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link key={s.num} href={s.href}
                className={`block p-7 lg:p-9 border transition-all group ${
                  i === 0
                    ? 'border-fitgreen/40 bg-fitgreen/5 hover:bg-fitgreen/10'
                    : 'border-[#1a1a1a] hover:border-fitgreen/30 hover:bg-[#0a0a0a]'
                }`}>
                <span className={`font-heading font-black text-4xl leading-none block mb-7 ${i === 0 ? 'text-fitgreen/30' : 'text-fitgreen/10'}`}>
                  {s.num}
                </span>
                <h3 className="font-heading font-black text-white text-xl uppercase tracking-tight mb-3">{s.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-6">{s.text}</p>
                <span className={`inline-flex items-center gap-2 font-heading font-black text-xs uppercase tracking-widest transition-all group-hover:gap-3 ${i === 0 ? 'text-fitgreen' : 'text-white/25 group-hover:text-fitgreen'}`}>
                  Ver más <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <span className="section-label block mb-4">Para quién</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-6">
                Fitmaster es<br />
                <span className="text-fitgreen">para ti si...</span>
              </h2>
              <p className="font-body text-white/40 text-base leading-relaxed mb-8">
                No es para todo el mundo. Es para quien está listo para comprometerse con su proceso físico de verdad.
              </p>
              <Link href="/contacto" className="btn-primary">
                Solicitar información <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-3">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 px-5 border border-[#1a1a1a] hover:border-fitgreen/40 transition-colors group">
                  <div className="w-5 h-5 bg-fitgreen shrink-0 flex items-center justify-center">
                    <Check size={11} className="text-black" strokeWidth={3} />
                  </div>
                  <p className="font-body text-white/60 text-sm group-hover:text-white/80 transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-[#050505] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label block mb-4">Resultados</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,5vw,56px)] leading-[0.9] tracking-tight mb-12 lg:mb-16">
            Resultados reales.<br />
            <span className="text-fitgreen">Procesos sostenibles.</span>
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fitgreen py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,64px)] leading-[0.9] tracking-tight mb-5">
            Si buscas un sistema<br />claro para mejorar<br />tu físico, empieza aquí.
          </h2>
          <p className="font-body text-black/60 text-base mb-10">Deja de avanzar a ciegas. Da el primer paso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto" className="btn-black-on-green justify-center">
              Solicitar asesoría <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-heading font-black text-xs uppercase tracking-widest px-8 py-4 hover:bg-black hover:text-fitgreen transition-colors"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
