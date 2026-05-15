import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    // Agregamos el fondo oscuro aquí
    <div className="h-[90vh] w-full border-b border-ui-border-base relative bg-[#121824]">
      {/* 1. Capa de la Imagen con ajuste de precisión */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero-morabot.png" 
          alt="Infraestructura MoraBot" 
          className="w-full h-full object-cover" 
        />
      </div>
{/* 2. Capa del Botón (Responsivo: Centro en móvil, Izquierda en PC) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center md:items-start pb-8 md:pb-12 md:pl-12">
        <a href="/store">
          <Button 
            variant="secondary" 
            className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white hover:from-blue-800 hover:via-blue-400 hover:to-blue-800 shadow-[0_0_30px_rgba(0,191,255,0.4)] border border-blue-400/50 px-6 py-3 text-base md:px-10 md:py-4 md:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 w-[90%] md:w-auto text-center"
          >
            Ver Planes de Ingeniería
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero