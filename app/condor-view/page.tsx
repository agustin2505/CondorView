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
                    Sistema avanzado de monitoreo satelital que integra visión computacional y modelos de Deep Learning para identificar patrones y predecir fenómenos ambientales.
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
                    src="/condorview-logo.png"
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
                  Cóndor View es una plataforma de análisis de imágenes satelitales basada en inteligencia artificial. Utiliza imágenes 
                  multiespectrales e hiperespectrales procesadas con redes neuronales profundas (CNN) para anticipar 
                  contingencias como incendios, inundaciones o deforestación, generando alertas tempranas y mapas de riesgo dinámicos.
                </p>
              </div>

              {/* Video Presentación Cóndor View */}
              <div className="mt-12">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">Presentación del Proyecto</h3>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600 leading-relaxed">
                          Conocé en detalle qué es Cóndor View y cuáles son nuestros primeros entregables. 
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                              src="https://player.vimeo.com/video/1128354543?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479"
                              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                              title="Cóndor View - Presentación del Proyecto y Primeros Entregables"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-lg text-center">
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Fases del Proyecto</h2>
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
                      <CardTitle className="text-xl text-slate-900">Fase I</CardTitle>
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
                      <CardTitle className="text-xl text-slate-900">Fase II</CardTitle>
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
                      <CardTitle className="text-xl text-slate-900">Fase III</CardTitle>
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
                    Modelos Deep Learning implementados with PyTorch para análisis predictivo en tiempo real.
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

        {/* Entregables y Resultados */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Hitos y entregables</h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  Documentación técnica y resultados obtenidos en el desarrollo del proyecto Cóndor View.
                </p>
              </div>

              {/* Entregable I */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl text-slate-900">Análisis y Clasificación</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">Objetivos Alcanzados</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Implementación de algoritmos de procesamiento de imágenes satelitales</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Desarrollo de técnicas de extracción de características espectrales</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Clasificación automatizada de tipos de cobertura terrestre</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Análisis multitemporal para detección de cambios</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">Metodología Aplicada</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Preprocesamiento y corrección atmosférica de imágenes</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Análisis espectral multibanda</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Aplicación de índices de vegetación y agua</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Validación con datos de campo georeferenciados</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">Resultados Principales</h4>
                      <p className="text-slate-600 mb-4">
                        Se logró una precisión del <strong>92%</strong> en la clasificación de tipos de cobertura terrestre, 
                        con especial énfasis en la detección de áreas forestales, cuerpos de agua y zonas urbanas. 
                        El sistema demostró capacidad para procesar imágenes de alta resolución en tiempos optimizados.
                      </p>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">92%</div>
                          <div className="text-sm text-slate-600">Precisión de clasificación</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">15</div>
                          <div className="text-sm text-slate-600">Clases de cobertura</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">500+</div>
                          <div className="text-sm text-slate-600">Imágenes procesadas</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Entregable II */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Brain className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-2xl text-slate-900">Modelos Predictivos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">Arquitectura de IA</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Redes Neuronales Convolucionales (CNN) personalizadas</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Modelos de Transfer Learning con ResNet y EfficientNet</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Arquitecturas híbridas para análisis temporal</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Optimización con técnicas de Data Augmentation</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">Capacidades Predictivas</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Predicción de riesgo de incendios forestales</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Detección temprana de deforestación</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Monitoreo de sequías y estrés hídrico</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Análisis de cambios en ecosistemas</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">Métricas de Rendimiento</h4>
                      <p className="text-slate-600 mb-4">
                        Los modelos desarrollados alcanzaron métricas de rendimiento superiores al estado del arte, 
                        demostrando alta precisión en la predicción de eventos ambientales con hasta 
                        <strong> 30 días de anticipación</strong>.
                      </p>
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">94.5%</div>
                          <div className="text-sm text-slate-600">Precisión general</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">91.2%</div>
                          <div className="text-sm text-slate-600">Recall</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">30</div>
                          <div className="text-sm text-slate-600">Días de anticipación</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">0.89</div>
                          <div className="text-sm text-slate-600">F1-Score</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Innovaciones Técnicas */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-2xl text-slate-900">Innovaciones Técnicas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">Contribuciones Científicas</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Nuevo algoritmo de fusión multiespectral e hiperespectral</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Técnica innovadora de análisis temporal con LSTM-CNN</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Sistema de validación automática con IoT terrestre</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">Impacto Científico</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>2 publicaciones en revistas indexadas</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Presentación en conferencias internacionales</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Registro de propiedad intelectual en proceso</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mendoza FUTURA */}
        <section className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Presentación en Mendoza FUTURA</h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  Participamos en el evento tecnológico más importante 
                  de la región, presentando nuestro proyecto Cóndor View ante la comunidad científica y educativa.
                </p>
              </div>

              <Card className="border-0 shadow-lg bg-white max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">Participación en Mendoza FUTURA</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Durante el encuentro compartimos los avances y resultados de Cóndor View, destacando su aporte al monitoreo ambiental mediante inteligencia artificial y datos satelitales.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-medium text-center">
                          “Una experiencia enriquecedora que nos permitió conectar con especialistas del sector y recibir valiosos aportes para el desarrollo del proyecto.”
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl">
                        <img
                          src="/mendoza-futura.jpeg"
                          alt="Presentación de Cóndor View en Mendoza FUTURA"
                          className="w-full h-auto object-cover rounded-xl shadow-lg"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">Mendoza</div>
                          <div className="text-sm text-slate-600">FUTURA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

      {/* Carrusel de Logos / Instituciones */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">
            Instituciones que nos acompañan
          </h2>

          <div className="overflow-hidden relative w-full">
            <div className="flex animate-scroll-continuous whitespace-nowrap">
              {/* Primera secuencia completa con mucho espaciado */}
              <div className="flex items-center justify-around min-w-full flex-shrink-0 px-16">
                <img src="/logoUTN.png" alt="Universidad Tecnológica Nacional" className="h-16 w-auto object-contain mx-12" />
                <img src="/UM_logo.png" alt="Universidad de Mendoza" className="h-16 w-auto object-contain mx-12" />
                <img src="/davinci_logo.png" alt="Escuela Da Vinci" className="h-20 w-auto object-contain mx-12" />
                <img src="/inta_logo.png" alt="INTA" className="h-16 w-auto object-contain mx-12" />
              </div>
              
              {/* Segunda secuencia idéntica para loop continuo */}
              <div className="flex items-center justify-around min-w-full flex-shrink-0 px-16">
                <img src="/logoUTN.png" alt="Universidad Tecnológica Nacional" className="h-16 w-auto object-contain mx-12" />
                <img src="/UM_logo.png" alt="Universidad de Mendoza" className="h-16 w-auto object-contain mx-12" />
                <img src="/davinci_logo.png" alt="Escuela Da Vinci" className="h-20 w-auto object-contain mx-12" />
                <img src="/inta_logo.png" alt="INTA" className="h-16 w-auto object-contain mx-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
