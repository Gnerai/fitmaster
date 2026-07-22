'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
      <div className="flex gap-2 p-3">
        <Link
          href="/contacto"
          className="flex-1 bg-fitgreen text-black font-heading font-black text-xs uppercase tracking-widest py-3.5 flex items-center justify-center"
          style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
        >
          Solicitar asesoría
        </Link>
        <a
          href="https://wa.me/34722624740"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 bg-[#111] border border-[#222] text-fitgreen flex items-center justify-center shrink-0"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  )
}
