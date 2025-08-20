'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Terminos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              APOFI
            </Link>
            <Link 
              href="/"
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              ← Volver al sorteo
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-gray-600">
              Sorteo con Propósito - APOFI
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
                              <p className="leading-relaxed">
                  El presente documento establece los términos y condiciones del sorteo &ldquo;Sorteo con Propósito&rdquo; 
                  organizado por APOFI (Escuela de Especialización Odontológica), con domicilio en Lima, Perú.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objetivo del Sorteo</h2>
              <p className="leading-relaxed">
                El sorteo tiene como objetivo otorgar 3 bonos de S/ 3,500 para especializaciones odontológicas 
                en APOFI, con el propósito de apoyar a profesionales de la odontología en su desarrollo profesional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Participación</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>3.1 Requisitos:</strong> Podrán participar odontólogos titulados y estudiantes de último año 
                  de odontología que cumplan con los requisitos establecidos.
                </p>
                <p className="leading-relaxed">
                  <strong>3.2 Registro:</strong> La participación se realiza únicamente a través del formulario 
                  oficial en la página web de APOFI.
                </p>
                <p className="leading-relaxed">
                  <strong>3.3 Datos:</strong> Los participantes deben proporcionar información veraz y actualizada.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Premios</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>4.1 Cantidad:</strong> Se sortearán 3 bonos de S/ 3,500 cada uno.
                </p>
                <p className="leading-relaxed">
                  <strong>4.2 Aplicación:</strong> Los bonos son aplicables a cualquier programa de especialización 
                  ofrecido por APOFI.
                </p>
                <p className="leading-relaxed">
                  <strong>4.3 Validez:</strong> Los bonos tienen una validez de 6 meses desde la fecha de emisión.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fechas Importantes</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>5.1 Inscripción:</strong> Del 1 de enero al 23 de marzo de 2025.
                </p>
                <p className="leading-relaxed">
                  <strong>5.2 Sorteo:</strong> Lunes 24 de marzo de 2025 a las 1:00 p.m. (Hora de Perú).
                </p>
                <p className="leading-relaxed">
                  <strong>5.3 Resultados:</strong> Se publicarán en el Fanpage oficial de APOFI.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Selección de Ganadores</h2>
              <p className="leading-relaxed">
                Los ganadores serán seleccionados mediante un sorteo electrónico aleatorio, 
                supervisado por un notario público, garantizando la transparencia del proceso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Notificación</h2>
              <p className="leading-relaxed">
                Los ganadores serán notificados por WhatsApp y correo electrónico en un plazo máximo 
                de 24 horas después del sorteo. Deberán confirmar su aceptación en un plazo de 48 horas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Restricciones</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>8.1 Transferencia:</strong> Los bonos no son transferibles a terceros.
                </p>
                <p className="leading-relaxed">
                  <strong>8.2 Combinación:</strong> No se pueden combinar con otras promociones vigentes.
                </p>
                <p className="leading-relaxed">
                  <strong>8.3 Canje:</strong> Los bonos no son canjeables por dinero en efectivo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacidad</h2>
              <p className="leading-relaxed">
                APOFI se compromete a proteger la privacidad de los participantes. Los datos personales 
                serán utilizados únicamente para fines del sorteo y no serán compartidos con terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones</h2>
              <p className="leading-relaxed">
                APOFI se reserva el derecho de modificar estos términos y condiciones en cualquier momento, 
                notificando los cambios a través de la página web oficial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  <strong>APOFI - Escuela de Especialización Odontológica</strong>
                </p>
                <p className="leading-relaxed">📞 +51 1 234 5678</p>
                <p className="leading-relaxed">📧 info@apofi.com</p>
                <p className="leading-relaxed">📍 Lima, Perú</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl">🎯</span>
              Participar en el sorteo
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
