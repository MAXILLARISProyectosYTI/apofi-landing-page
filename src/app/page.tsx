'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Datos del formulario:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Mostrar animación de confirmación después de 2 segundos
    setTimeout(() => {
      setShowConfirmation(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ phone: '', email: '', acceptTerms: false });
    setIsSubmitted(false);
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16">
        {/* Fondos animados */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-slate-400/10"></div>
        
        {/* Elementos flotantes animados */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <span className="text-2xl animate-bounce">🎉</span>
              ¡Sorteo Activo!
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Sorteo con{' '}
                          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Propósito
            </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-white/90 mb-10 leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Gana uno de los <strong className="text-blue-300">3 Bonos de S/ 3,500</strong> para tu especialización dental
            </p>
            
            <div className={`space-y-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 w-full md:w-auto overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Participar ahora
                  <span className="group-hover:translate-y-1 transition-transform duration-300 text-2xl">🎯</span>
                </span>
              </button>
              
                              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300 text-2xl">⏰</span>
                    <span className="text-sm">Solo hasta el 24 de marzo de 2025</span>
                  </div>
                </div>
            </div>
          </div>
          
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Círculos animados de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-pink-400/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-ping"></div>
              
              {/* Círculo principal */}
              <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                <span className="text-8xl animate-bounce">😊</span>
              </div>
              
              {/* Elementos decorativos animados */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl">💎</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Cómo participar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Solo necesitas seguir estos 3 simples pasos para participar en nuestro sorteo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'Llena el formulario',
                description: 'Completa tus datos de contacto de manera rápida y segura',
                gradient: 'from-blue-500 to-cyan-500',
                bgColor: 'bg-blue-50',
                delay: 300
              },
              {
                icon: '✅',
                title: 'Acepta los términos',
                description: 'Lee y acepta las condiciones del sorteo',
                gradient: 'from-green-500 to-emerald-500',
                bgColor: 'bg-green-50',
                delay: 500
              },
              {
                icon: '🎉',
                title: '¡Listo, ya participas!',
                description: 'Tu participación está confirmada automáticamente',
                gradient: 'from-purple-500 to-pink-500',
                bgColor: 'bg-purple-50',
                delay: 700
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`${step.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border border-white/50 backdrop-blur-sm transition-all duration-1000 delay-${step.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full mb-8 shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl animate-bounce">{step.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section - Ahora es el atractivo principal */}
      <section id="formulario" className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-200/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-cyan-200/30 rounded-full animate-ping"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
              <span className="text-2xl">🎯</span>
              ¡Participa y gana!
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ¡Participa ahora!
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Completa el formulario y participa por uno de los <strong className="text-blue-600">3 bonos de S/ 3,500</strong> para tu especialización dental
            </p>
          </div>

                    {isSubmitted ? (
            <div className={`bg-white rounded-3xl shadow-2xl p-16 text-center border border-blue-100 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-2xl">
                <span className="text-6xl">🎉</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                ¡Participación confirmada!
              </h3>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Tu participación ha sido registrada exitosamente. Te notificaremos los resultados el 24 de marzo.
              </p>
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Participar de nuevo
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Formulario principal */}
              <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100 transition-all duration-1000 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Elementos decorativos del formulario */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-16 translate-x-16 opacity-60 animate-float"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full translate-y-12 -translate-x-12 opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Header del formulario */}
                <div className="text-center mb-8 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="text-xl">📋</span>
                    Formulario de Participación
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Completa tus datos!</h3>
                  <p className="text-gray-600">Solo necesitamos 2 campos para participar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Indicador de progreso */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Progreso del formulario</span>
                      <span className="text-sm font-medium text-blue-600">
                        {((formData.phone && formData.email && formData.acceptTerms) ? 100 : 
                          ((formData.phone ? 1 : 0) + (formData.email ? 1 : 0) + (formData.acceptTerms ? 1 : 0)) * 33.33).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ 
                          width: `${(formData.phone && formData.email && formData.acceptTerms) ? 100 : 
                            ((formData.phone ? 1 : 0) + (formData.email ? 1 : 0) + (formData.acceptTerms ? 1 : 0)) * 33.33}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="phone" className="block text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📱</span>
                      Número de Celular *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="9 1234 5678"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-blue-400/30 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 pr-12"
                        required
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <span className="text-blue-500 text-xl">📱</span>
                      </div>
                    </div>
                    {formData.phone && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span className="text-lg">✅</span>
                        Número válido
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📧</span>
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-blue-400/30 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 pr-12"
                        required
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <span className="text-blue-500 text-xl">📧</span>
                      </div>
                    </div>
                    {formData.email && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span className="text-lg">✅</span>
                        Email válido
                      </div>
                    )}
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center h-6">
                      <input
                        id="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                        className="w-6 h-6 text-blue-500 border-2 border-gray-300 rounded focus:ring-4 focus:ring-blue-400/30 focus:border-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="text-gray-700">
                      <label htmlFor="acceptTerms" className="text-lg leading-relaxed">
                        Acepto los{' '}
                        <a href="/terminos" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                          términos y condiciones
                        </a>{' '}
                        del sorteo *
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden relative group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white mr-3"></div>
                        Enviando...
                      </div>
                    ) : (
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span className="text-3xl">🎯</span>
                        Quiero participar
                      </span>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </form>
              </div>

                              {/* Panel informativo atractivo */}
                <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  {/* Beneficios del bono */}
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <span className="text-3xl animate-pulse">💎</span>
                      Beneficios del Bono
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Aplicable a cualquier especialización',
                        'Válido por 6 meses',
                        'Sin restricciones ocultas',
                        'Transferible a familiares',
                        'Incluye consulta de evaluación'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <span className="text-2xl animate-bounce">✅</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Estadísticas animadas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                      <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse">3</div>
                      <p className="text-gray-600">Bonos disponibles</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                      <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse">S/ 3,500</div>
                      <p className="text-gray-600">Valor de cada bono</p>
                    </div>
                  </div>

                  {/* CTA adicional */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-xl font-bold mb-3">¿Por qué APOFI?</h4>
                    <p className="text-indigo-100 mb-4">
                      Somos la escuela líder en especialización odontológica con más de 10 años de experiencia
                    </p>
                    <div className="text-3xl animate-bounce">🏆</div>
                  </div>

                  {/* Contador regresivo */}
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-6 text-white text-center shadow-xl">
                    <h4 className="text-xl font-bold mb-3">⏰ Tiempo Limitado</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-sm">Marzo</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">1:00</div>
                        <div className="text-sm">PM</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">2025</div>
                        <div className="text-sm">Año</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              APOFI
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transformamos sonrisas y cambiamos vidas con tecnología de vanguardia
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +51 1 234 5678</p>
                <p>📧 info@apofi.com</p>
                <p>📍 Lima, Perú</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Redes Sociales</h4>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">💬</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Enlaces</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#" className="block hover:text-white transition-colors">Inicio</a>
                <a href="#" className="block hover:text-white transition-colors">Servicios</a>
                <a href="#" className="block hover:text-white transition-colors">Sobre nosotros</a>
              </div>
            </div>
          </div>
          
          <div className={`border-t border-gray-700 pt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-400">
              © 2025 APOFI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Animación de confirmación completa */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-50 flex items-center justify-center">
          {/* Logo APOFI animado */}
          <div className="text-center">
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                APOFI
              </div>
            </div>
            
            {/* Mensaje de confirmación */}
            <div className="space-y-6 text-white">
              <div className="text-4xl md:text-6xl animate-bounce">
                🎉
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¡Participación Confirmada!
              </h2>
              
              <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
                En breve recibirás un mensaje de confirmación por WhatsApp
              </p>
              
              <div className="flex items-center justify-center gap-3 text-blue-300 text-lg">
                <span className="text-2xl">💬</span>
                <span>WhatsApp: +51 1 234 5678</span>
              </div>
              
              {/* Elementos decorativos flotantes */}
              <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-40 left-20 w-20 h-20 bg-indigo-400/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-10 w-14 h-14 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
