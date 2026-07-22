import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X, CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asesoramiento Fitness con Pablo Álvarez — Entrenador Personal Gijón',
  description:
    'Asesoramiento fitness personalizado con Pablo Álvarez, Campeón de España de Culturismo. Plan de entrenamiento, nutrición y seguimiento real en Gijón. Resultados medibles.',
  keywords: [
    'asesoramiento fitness gijón',
    'entrenador personal gijón',
    'pablo álvarez entrenador personal',
    'plan de entrenamiento personalizado gijón',
    'plan nutricional gijón',
    'seguimiento fitness asturias',
    'transformación física gijón',
  ],
  openGraph: {
    title: 'Asesoramiento Fitness con Pablo Álvarez — Entrenador Personal Gijón | Fitmaster',
    description:
      'Pablo Álvarez, Campeón de España. Plan de entrenamiento, plan nutricional y seguimiento real. Deja de avanzar a ciegas.',
    url: 'https://fitmaster.es/asesoramiento',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asesoramiento Fitness con Pablo Álvarez — Entrenador Personal Gijón | Fitmaster',
    description:
      'Pablo Álvarez, Campeón de España. Plan de entrenamiento, nutrición y seguimiento real. Deja de improvisar.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es/asesoramiento' },
}

const benefits = [
  { title: 'Claridad', text: 'Sabes qué hacer, cómo hacerlo y por qué. Dejas de improvisar.' },
  { title: 'Estructura', text: 'Un sistema para que tu entrenamiento y alimentación no dependan de rachas.' },
  { title: 'Seguimiento real', text: 'Tu proceso se revisa, corrige y ajusta en función de tu evolución real.' },
  { title: 'Personalización', text: 'Adaptado a tu punto de partida, objetivo, contexto y capacidad de adherencia.' },
  { title: 'Resultados sostenibles', text: 'Progreso real que puedas mantener en el tiempo, no parches temporales.' },
]

const includes = [
  'Plan de entrenamiento adaptado a tu objetivo y nivel',
  'Plan nutricional estructurado y aplicable',
  'Seguimiento continuado del proceso',
  'Ajustes en función de tu evolución',
  'Resolución de dudas ilimitadas',
  'Corrección de ejercicios mediante videos, ilimitada',
  'Recomendación de suplementación personalizada',
  'Acompañamiento constante para asegurar adherencia y resultados',
  'Descuento del -10% en toda la tienda Fitmaster',
]

const steps = [
  { num: '01', title: 'Valoración inicial', text: 'Analizamos tu situación actual, tu objetivo, tus hábitos y tu contexto para entender desde dónde partes.' },
  { num: '02', title: 'Diseño del plan', text: 'Creamos una estrategia personalizada de entrenamiento, nutrición y organización adaptada a tu vida real.' },
  { num: '03', title: 'Seguimiento y ajustes', text: 'Cada dos semanas revisamos tu evolución, valoramos avances y hacemos los cambios necesarios.' },
]

const fitYes = [
  'Quieres estructura en tu entrenamiento y en tu nutrición',
  'Necesitas claridad sobre qué hacer y cómo hacerlo',
  'Valoras seguimiento, criterio y personalización',
  'Buscas resultados reales, no parches temporales',
  'Estás dispuesto a seguir un sistema con consistencia',
]

const fitNo = [
  'Buscas soluciones rápidas sin compromiso',
  'Quieres resultados sin seguir un proceso',
  'Solo buscas motivación puntual',
  'No estás dispuesto a ajustar hábitos para avanzar',
]

const faqs = [
  { q: '¿Necesito experiencia previa?', a: 'No. El servicio se adapta tanto a personas que empiezan como a quienes ya entrenan pero no están avanzando como deberían.' },
  { q: '¿Es online o presencial?', a: 'Ofrecemos las dos posibilidades. Si eres de Gijón siempre aconsejamos presencial.' },
  { q: '¿Y si tengo horarios complicados?', a: 'El plan se adapta a la realidad de tu día a día. No buscamos una teoría perfecta, sino un sistema que puedas cumplir.' },
  { q: '¿Incluye suplementación?', a: 'Incluye asesoramiento cuando sea útil. Además tienes un -10% en toda la tienda Fitmaster.' },
  { q: '¿Cómo puedo saber precios y condiciones?', a: 'Solicita información y te explicamos la opción que mejor encaja contigo.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://fitmaster.es/asesoramiento#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Para quién es el asesoramiento de Fitmaster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para cualquier persona que quiera dejar de improvisar y avanzar con un sistema claro: ya sea alguien que empieza desde cero, alguien que lleva tiempo entrenando sin ver resultados, o alguien que quiere prepararse para competición. El asesoramiento de Pablo Álvarez está disponible presencialmente en Gijón y online en toda España.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye el plan de asesoramiento personalizado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Incluye plan de entrenamiento personalizado, plan nutricional adaptado a tu objetivo, seguimiento periódico con revisiones y ajustes cada dos semanas, y acceso directo a Pablo Álvarez para resolver dudas. Todo diseñado desde cero según tu punto de partida, objetivo y contexto real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el asesoramiento fitness de Pablo Álvarez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El precio varía según el plan y la duración. Puedes consultar los detalles directamente por WhatsApp al 722 624 740 o a través del formulario de contacto en fitmaster.es/contacto. La primera valoración inicial es sin coste.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El asesoramiento es presencial o se puede hacer online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambas modalidades. El asesoramiento presencial se realiza en la tienda Fitmaster, en Avenida de Portugal 9, Gijón. El asesoramiento online está disponible para clientes de toda España, con el mismo sistema de seguimiento y revisiones periódicas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tardaré en ver resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los primeros cambios visibles suelen aparecer entre las 4 y 8 semanas con constancia en el seguimiento del plan. El proceso depende del punto de partida y el objetivo, pero el método de Pablo Álvarez está diseñado para producir resultados sostenibles, no cambios puntuales que se revierten.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia a Fitmaster de otros entrenadores personales en Gijón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pablo Álvarez es Campeón de España de Culturismo y entrenador certificado con más de 250 personas transformadas. La combinación de experiencia competitiva de alto nivel, titulación oficial y seguimiento real y continuo es única en Asturias.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://fitmaster.es' },
    { '@type': 'ListItem', position: 2, name: 'Asesoramiento', item: 'https://fitmaster.es/asesoramiento' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://fitmaster.es/asesoramiento#service',
  name: 'Asesoramiento Fitness Personalizado',
  description:
    'Asesoramiento fitness personalizado que incluye plan de entrenamiento, plan nutricional, seguimiento periódico y acceso directo al entrenador. Presencial en Gijón y online en toda España.',
  provider: { '@id': 'https://fitmaster.es/#pablo' },
  areaServed: [
    { '@type': 'City', name: 'Gijón' },
    { '@type': 'AdministrativeArea', name: 'Asturias' },
    { '@type': 'Country', name: 'España' },
  ],
  serviceType: 'Entrenamiento Personal',
  url: 'https://fitmaster.es/asesoramiento',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: 'Consultar precio según plan y duración',
    },
  },
}

export default function AsesoramientoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-black pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label block mb-6">Asesoramiento</span>
          <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-6 max-w-4xl">
            Tu cambio físico<br />necesita más que ganas:<br />
            <span className="text-fitgreen">necesita estructura.</span>
          </h1>
          <p className="font-body text-white/50 text-base leading-relaxed max-w-lg mb-10">
            Asesoramiento personalizado con Pablo Álvarez: plan de entrenamiento, nutrición y seguimiento real para que dejes de improvisar y empieces a avanzar con criterio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn-primary">
              Quiero empezar <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="bg-[#050505] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <span className="section-label block mb-6">El servicio</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-6">
                Qué es el<br />asesoramiento Fitmaster
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-4">
                No consiste en darte una dieta y una rutina sin más. Consiste en convertir tu objetivo en un plan claro, aplicable y sostenible, con seguimiento real y ajustes según tu evolución.
              </p>
              <p className="font-body text-white/70 text-base leading-relaxed font-semibold">
                Que sepas qué hacer, por qué hacerlo y cómo sostenerlo en tu vida real.
              </p>
            </div>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4 p-5 border border-[#1a1a1a] hover:border-fitgreen/30 transition-colors">
                  <div className="w-5 h-5 bg-fitgreen shrink-0 mt-0.5 flex items-center justify-center">
                    <Check size={11} className="text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-heading font-black text-white text-sm uppercase mb-1">{b.title}</p>
                    <p className="font-body text-white/40 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label block mb-4">Proceso</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-12 lg:mb-16">
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <div key={step.num}
                className={`p-7 lg:p-9 border transition-colors ${
                  i === 1
                    ? 'border-fitgreen/40 bg-fitgreen/5'
                    : 'border-[#1a1a1a]'
                }`}>
                <span className={`font-heading font-black text-5xl leading-none block mb-8 ${i === 1 ? 'text-fitgreen/30' : 'text-fitgreen/10'}`}>
                  {step.num}
                </span>
                <h3 className="font-heading font-black text-white text-xl uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-[#050505] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <span className="section-label block mb-6">Incluye</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-4">
                Qué incluye<br />exactamente
              </h2>
              <p className="font-body text-white/40 text-base leading-relaxed">
                Sin letra pequeña. Sin servicios ocultos.
              </p>
            </div>
            <div className="space-y-2">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 px-5 border border-[#1a1a1a] hover:border-fitgreen/40 transition-colors">
                  <CheckCircle size={15} className="text-fitgreen shrink-0" />
                  <p className="font-body text-white/60 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label block mb-4">Para quién</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-12">
            Para quién es este servicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#1a1a1a] p-7 lg:p-9">
              <h3 className="font-heading font-black text-fitgreen text-sm uppercase tracking-widest mb-6">Encaja contigo si:</h3>
              <div className="space-y-4">
                {fitYes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-fitgreen shrink-0" strokeWidth={3} />
                    <p className="font-body text-white/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#1a1a1a] p-7 lg:p-9">
              <h3 className="font-heading font-black text-white/30 text-sm uppercase tracking-widest mb-6">No encaja contigo si:</h3>
              <div className="space-y-4">
                {fitNo.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X size={14} className="text-white/25 shrink-0" strokeWidth={2} />
                    <p className="font-body text-white/30 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#050505] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label block mb-4 text-center">FAQ</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight text-center mb-12 lg:mb-16">
            Preguntas frecuentes
          </h2>
          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#1a1a1a] p-6 lg:p-8 hover:border-fitgreen/20 transition-colors">
                <h3 className="font-heading font-black text-white text-sm uppercase tracking-tight mb-3">{faq.q}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fitgreen py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,64px)] leading-[0.9] tracking-tight mb-5">
            Si quieres un plan claro,<br />seguimiento real<br />y resultados, empieza aquí.
          </h2>
          <p className="font-body text-black/60 text-base mb-10">Deja de improvisar. Da el primer paso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto" className="btn-black-on-green justify-center">
              Pedir información <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-heading font-black text-xs uppercase tracking-widest px-8 py-4 hover:bg-black hover:text-fitgreen transition-colors"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}>
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
