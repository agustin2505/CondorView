"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Satellite,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Camera,
  Database,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function CondorViewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-custom-blue transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-3">
          <div className="rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="Logo Tecnologías Espaciales" className="h-10 w-10 object-contain" />
          </div>
          <span className="font-semibold text-slate-900">Tecnologías Espaciales</span>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-16 pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                    Cóndor View
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                    Sistema de análisis predictivo basado en imágenes satelitales con visión computacional y deep learning
                    para el monitoreo ambiental inteligente.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#detalles">
                    <Button size="lg" className="bg-custom-blue hover:bg-blue-700 text-white px-8 py-3 text-lg">
                      Conocer más detalles
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/#contacto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-custom-blue text-custom-blue hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                    >
                      Contactar al equipo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src="/condorview-logo-italy.jpeg"
                    alt="Logo de Cóndor View"
                    className="h-96 w-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descripción del Proyecto */}
        <section id="detalles" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">¿Qué es Cóndor View?</h2>
                <p className="mx-auto max-w-3xl text-lg text-slate-600 leading-relaxed">
                  Cóndor View desarrolla una plataforma de análisis de imágenes satelitales aplicando visión computacional 
                  y deep learning. Utiliza imágenes multiespectrales e hiperespectrales, preprocesadas y analizadas con 
                  redes neuronales profundas (CNN). El objetivo: predecir contingencias como incendios, inundaciones o 
                  deforestación, generando alertas tempranas y mapas de riesgo dinámicos.
                </p>
              </div>

              {/* Características Principales */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Satellite className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Análisis Satelital</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Procesamiento avanzado de imágenes multiespectrales e hiperespectrales para obtener información 
                      detallada del territorio.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Deep Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Redes neuronales convolucionales (CNN) entrenadas para detectar patrones y predecir contingencias 
                      ambientales.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Alertas Tempranas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Sistema de notificaciones automáticas para prevenir y mitigar riesgos ambientales antes de que 
                      ocurran.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Mapas de Riesgo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Visualizaciones dinámicas e interactivas que muestran zonas de riesgo y probabilidades de 
                      contingencias.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Tiempo Real</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Procesamiento continuo de datos satelitales para monitoreo en tiempo real y respuesta rápida.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Cobertura Global</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Capacidad de análisis a gran escala, desde áreas locales hasta regiones continentales completas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Etapas del Proyecto */}
        <section className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Etapas del Proyecto</h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  El desarrollo de Cóndor View se estructura en tres módulos principales que se complementan para 
                  crear una solución integral.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Camera className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">Módulo I</CardTitle>
                    </div>
                    <CardDescription className="text-lg font-semibold text-blue-600 mb-4">
                      Clasificación y análisis de imágenes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Desarrollo de algoritmos de procesamiento de imágenes satelitales para la extracción automática 
                      de características relevantes y clasificación de diferentes tipos de cobertura terrestre.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Brain className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">Módulo II</CardTitle>
                    </div>
                    <CardDescription className="text-lg font-semibold text-green-600 mb-4">
                      Entrenamiento de modelos y evaluación
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Implementación y entrenamiento de redes neuronales profundas utilizando grandes datasets de 
                      imágenes satelitales etiquetadas para optimizar la precisión predictiva.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">Módulo III</CardTitle>
                    </div>
                    <CardDescription className="text-lg font-semibold text-purple-600 mb-4">
                      Visualización de sucesos en imágenes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Creación de interfaces de usuario intuitivas para la visualización de resultados, mapas de riesgo 
                      y alertas, facilitando la interpretación y toma de decisiones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Arquitectura Técnica */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Arquitectura en Microservicios</h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  Una infraestructura moderna y escalable que garantiza alta disponibilidad y procesamiento eficiente.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Adquisición de Datos</h3>
                  </div>
                  <p className="text-slate-600 pl-11">
                    Obtención automatizada de imágenes satelitales en tiempo real desde múltiples fuentes y sensores.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Preprocesamiento</h3>
                  </div>
                  <p className="text-slate-600 pl-11">
                    Corrección geométrica y radiométrica de las imágenes para garantizar calidad y precisión en el análisis.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Almacenamiento Distribuido</h3>
                  </div>
                  <p className="text-slate-600 pl-11">
                    Infraestructura en la nube con alta disponibilidad y escalabilidad para grandes volúmenes de datos.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Inferencia IA</h3>
                  </div>
                  <p className="text-slate-600 pl-11">
                    Modelos Deep Learning implementados con PyTorch para análisis predictivo en tiempo real.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Post-procesamiento</h3>
                  </div>
                  <p className="text-slate-600 pl-11">
                    Generación de mapas de calor, capas GIS y visualizaciones avanzadas para interpretación de resultados.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Satellite className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">APIs y Dashboards</h3>
                  </div>
                  <p className="text-slate-600 pl-11">
                    Interfaces de programación y paneles de control intuitivos para acceso a datos y visualizaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones y Mercado */}
        <section className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Aplicaciones y Mercado</h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  Cóndor View tiene múltiples aplicaciones en sectores críticos que requieren monitoreo ambiental 
                  y análisis predictivo.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-slate-900">Monitoreo Ambiental y Climático</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Seguimiento de cambios en ecosistemas, detección de deforestación y monitoreo de variables 
                      climáticas para investigación y conservación.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-slate-900">Agricultura de Precisión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Optimización de cultivos mediante análisis de salud de plantas, predicción de rendimientos 
                      y detección temprana de plagas o enfermedades.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-slate-900">Gestión de Desastres Naturales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Predicción y monitoreo de incendios forestales, inundaciones, sequías y otros eventos 
                      extremos para respuesta rápida y mitigación.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-slate-900">Seguridad y Defensa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Vigilancia territorial, detección de actividades anómalas y monitoreo de fronteras 
                      para aplicaciones de seguridad nacional.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-slate-900">Planificación Urbana</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Análisis de crecimiento urbano, planificación de infraestructura y evaluación de 
                      impacto ambiental en desarrollo de ciudades.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-slate-900">Recursos Naturales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      Exploración y monitoreo de recursos minerales, gestión forestal y evaluación de 
                      recursos hídricos para uso sostenible.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                  ¿Te interesa colaborar con Cóndor View?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Estamos buscando partners, colaboradores e inversores que compartan nuestra visión de usar 
                  la tecnología para crear un mundo más sostenible y seguro.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contacto">
                  <Button size="lg" className="bg-custom-blue hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Contactar al equipo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-custom-blue text-custom-blue hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                  >
                    Volver al inicio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-br from-blue-100 to-blue-200 text-custom-blue">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="Logo Tecnologías Espaciales" className="h-12 w-12 object-contain" />
              </div>
              <span className="font-semibold">I+D+i Tecnologías Espaciales</span>
            </div>
            <div className="text-sm text-blue">
              © {new Date().getFullYear()} Grupo de Extensión Universitaria. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
