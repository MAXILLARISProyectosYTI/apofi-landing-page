'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Shield, User, MapPin } from 'lucide-react';

interface FormData {
  firstName: string;
  lastNameFather: string;
  lastNameMother: string;
  phoneNumber: string;
  email: string;
  sede: 'LIMA' | 'AREQUIPA';
  acceptTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastNameFather?: string;
  lastNameMother?: string;
  phoneNumber?: string;
  email?: string;
  sede?: string;
  acceptTerms?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastNameFather: '',
    lastNameMother: '',
    phoneNumber: '',
    email: '',
    sede: 'LIMA',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es obligatorio';
    }

    if (!formData.lastNameFather.trim()) {
      newErrors.lastNameFather = 'El apellido paterno es obligatorio';
    }

    if (!formData.lastNameMother.trim()) {
      newErrors.lastNameMother = 'El apellido materno es obligatorio';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'El número de celular es obligatorio';
    } else if (!/^9\d{8}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Ingresa un número de celular válido (9 dígitos)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }

    if (!formData.sede) {
      newErrors.sede = 'Debes seleccionar una sede';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-4"
      >
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🎉</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Participación confirmada!
          </h3>
          <p className="text-gray-600 mb-6">
            Tu participación ha sido registrada exitosamente. Te notificaremos los resultados el 24 de marzo.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ 
                firstName: '',
                lastNameFather: '',
                lastNameMother: '',
                phoneNumber: '',
                email: '',
                sede: 'LIMA',
                acceptTerms: false
              });
            }}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Participar de nuevo
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="formulario" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¡Participa ahora!
          </h2>
          <p className="text-xl text-gray-600">
            Completa el formulario y participa por uno de los 3 bonos de S/ 3,500
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Nombre *
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Tu nombre"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            {/* Apellidos en una fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Apellido Paterno */}
              <div>
                <label htmlFor="lastNameFather" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Apellido Paterno *
                </label>
                <input
                  type="text"
                  id="lastNameFather"
                  value={formData.lastNameFather}
                  onChange={(e) => handleInputChange('lastNameFather', e.target.value)}
                  placeholder="Apellido paterno"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.lastNameFather ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.lastNameFather && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastNameFather}</p>
                )}
              </div>

              {/* Apellido Materno */}
              <div>
                <label htmlFor="lastNameMother" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Apellido Materno *
                </label>
                <input
                  type="text"
                  id="lastNameMother"
                  value={formData.lastNameMother}
                  onChange={(e) => handleInputChange('lastNameMother', e.target.value)}
                  placeholder="Apellido materno"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.lastNameMother ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.lastNameMother && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastNameMother}</p>
                )}
              </div>
            </div>

            {/* Campo Celular */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                Número de Celular *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="9 1234 5678"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.phoneNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="tu@email.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Campo Sede */}
            <div>
              <label htmlFor="sede" className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-2" />
                Sede *
              </label>
              <select
                id="sede"
                value={formData.sede}
                onChange={(e) => handleInputChange('sede', e.target.value as 'LIMA' | 'AREQUIPA')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.sede ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              >
                <option value="LIMA">Lima</option>
                <option value="AREQUIPA">Arequipa</option>
              </select>
              {errors.sede && (
                <p className="mt-1 text-sm text-red-600">{errors.sede}</p>
              )}
            </div>

            {/* Checkbox Términos */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptTerms" className="text-gray-700">
                  Acepto los{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    términos y condiciones
                  </a>{' '}
                  del sorteo *
                </label>
                {errors.acceptTerms && (
                  <p className="mt-1 text-red-600">{errors.acceptTerms}</p>
                )}
              </div>
            </div>

            {/* Botón CTA */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Quiero participar
                </div>
              )}
            </motion.button>
          </form>

          {/* Información de seguridad */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-2" />
              Tus datos están protegidos y solo se usarán para el sorteo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
