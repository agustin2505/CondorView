"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Globe,
  Brain,
  Leaf,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"

const integrantes = [
  {
    name: "Agustín Muñoz",
    role: "Estudiante avanzado de Ingeniería en Sistemas",
    image: "/equipo/agustin-munoz.jpeg",
  },
  {
    name: "Candela Balverde",
    role: "Estudiante avanzado de Ingeniería Industrial",
    image: "/equipo/candela-balverde.jpeg",
  },
  {
    name: "Julieta Baigorria",
    role: "Estudiante avanzada de Ingeniería Industrial",
    image: "/equipo/julieta-baigorria.jpeg",
  },
  {
    name: "Delfina Batura",
    role: "Estudiante avanzado de Ingeniería Industrial",
    image: "/equipo/delfina-batura.jpeg",
  },
  {
    name: "Emanuel Gallo",
    role: "Estudiante avanzado de Ingeniería Informática",
    image: "/equipo/emanuel-gallo.jpeg",
  },
  {
    name: "Lautaro Sanz",
    role: "Estudiante avanzado de Ingeniería Informática",
    image: "/equipo/lautaro-sanz.jpeg",
  },
  {
    name: "Victoria Caro",
    role: "Estudiante avanzada de Ingeniería en Sistemas",
    image: "/equipo/victoria-caro.jpeg",
  },
  {
    name: "Angel Quiles",
    role: "Secretario Extensión Universitaria",
    title: "Esp. Ing. Industrial",
    image: "/equipo/angel-quiles.jpeg",
  },
  {
    name: "Emiliano Moreno",
    role: "Logística",
    title: "Tec. en Logística y Transporte",
    image: "/equipo/emiliano-moreno.jpeg",
  },
  {
    name: "Mariana Nunes",
    role: "Desarrollo de Negocios",
    title: "Mgtr. Desarrollo en Administración de Negocios",
    image: "/equipo/mariana-nunes.jpeg",
  },
  {
    name: "Roque Bielli",
    role: "Director de Grupo",
    title: "Mgtr. Bioingeniero",
    image: "/equipo/roque-bielli.jpeg",
  },
]

export default function LandingPage() {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    const formData = new FormData(form);
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      {
        title: formData.get("title") as string,
        name: formData.get("name") as string,
        message: formData.get("message") as string,
        email: formData.get("email") as string,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
        limitRate: {
          id: "app",
          throttle: 10000,
        }
      }
    ).then(() => {
      alert("Consulta enviada correctamente. Nos pondremos en contacto pronto.");
      form.reset();
    }).catch((error) => {
      console.error("Error al enviar el email:", error);
      alert("Ocurrió un error al enviar tu consulta. Por favor, intenta nuevamente más tarde.");
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="Logo Tecnologías Espaciales" className="h-12 w-12 object-contain" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Tecnologías Espaciales</h1>
          </div>
        </div>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#inicio" className="text-sm font-medium text-slate-600 hover:text-custom-blue transition-colors">
            Inicio
          </Link>
          <Link href="#nosotros" className="text-sm font-medium text-slate-600 hover:text-custom-blue transition-colors">
            Nosotros
          </Link>
          <Link href="#lineas" className="text-sm font-medium text-slate-600 hover:text-custom-blue transition-colors">
            Líneas de Trabajo
          </Link>
          <Link href="#proyectos" className="text-sm font-medium text-slate-600 hover:text-custom-blue transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-slate-600 hover:text-custom-blue transition-colors">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative w-full pt-16 pb-24 bg-gradient-to-br from-blue-100 via-white to-blue-200"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
          <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <div className="rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="Logo Tecnologías Espaciales" className="h-64 w-64 object-contain" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-900">
                  I+D+i Tecnologías
                  <span className="block text-custom-blue">Espaciales</span>
                </h1>
                <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
                  Conectamos el conocimiento académico con las necesidades reales de la sociedad a través de soluciones
                  tecnológicas innovadoras aplicadas al espacio, utilizando inteligencia artificial, visión
                  computacional y análisis geoespacial.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/#proyectos"} className="text-lg font-medium text-custom-blue hover:underline">
                  <Button size="lg" className="bg-custom-blue hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Conocé nuestros proyectos
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={"/#contacto"} className="text-lg font-medium text-custom-blue hover:underline">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-custom-blue text-custom-blue hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                  >
                    Contactanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section id="nosotros" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">¿Quiénes somos?</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Somos un grupo de extensión universitaria de la Universidad Tecnológica Nacional -
                    Facultad Regional de San Rafael, conformado por estudiantes, ingenieros, y profesionales
                    comprometidos con el desarrollo de soluciones tecnológicas innovadoras aplicadas al espacio.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Nuestro enfoque interdisciplinario combina la investigación académica de vanguardia con la
                    aplicación práctica de tecnologías emergentes como la inteligencia artificial, visión computacional,
                    machine learning y análisis geoespacial.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Trabajamos para que el conocimiento generado en la universidad tenga un impacto real en la sociedad,
                    especialmente en áreas críticas como el monitoreo ambiental y la planificación territorial.
                  </p>
                  <div>
                    <img src="/logoUTN.png"
                      alt="Logo UTN San Rafael"
                      className="h-full w-[12rem] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <div>
                    <img
                      src="/quienes-somos.jpeg"
                      alt="Imagen representativa del grupo"
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrantes del Equipo */}
          <div className="mt-[6rem]">
            <div className="text-center space-y-4 mb-12">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">Nuestro Equipo</h3>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Conocé a algunos de los investigadores, docentes y estudiantes que forman parte de nuestro grupo.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {
                integrantes.map((integrante) => (
                  <Card key={integrante.name} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <CardHeader className="text-center pb-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                          src={integrante.image}
                          alt={integrante.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl text-slate-900">{integrante.name}</CardTitle>
                      <CardDescription className="text-custom-blue font-medium">{integrante.role}</CardDescription>
                    </CardHeader>
                    {
                      integrante.title && (
                        <CardContent>
                          <p className="text-center text-slate-600 text-sm">
                            {integrante.title}
                          </p>
                        </CardContent>
                      )
                    }
                  </Card>
                ))
              }
            </div>
          </div>
        </section>

        {/* Líneas de Trabajo */}
        <section id="lineas" className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Líneas de Trabajo</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Nuestras áreas de especialización abarcan múltiples disciplinas para abordar desafíos complejos con
                soluciones innovadoras.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-custom-blue" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Observación de la Tierra</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    Análisis de imágenes satelitales para monitoreo ambiental, cambio climático y gestión de recursos
                    naturales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-custom-blue" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Modelos Predictivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    Desarrollo de algoritmos de inteligencia artificial para predicción de fenómenos ambientales y
                    climáticos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-custom-blue" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Desarrollo Sostenible</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    Tecnologías para agricultura de precisión, planificación territorial y gestión sostenible de
                    recursos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-custom-blue" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Visión Computacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    Procesamiento avanzado de imágenes y deep learning para análisis automatizado de datos
                    geoespaciales.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section id="proyectos" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Proyectos Destacados</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Conocé algunas de nuestras iniciativas más innovadoras que están generando impacto real en la sociedad.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Cóndor View */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <CardTitle className="text-2xl text-slate-900">Cóndor View</CardTitle>
                  </div>
                  <div>
                    <img
                      src="/condorview-logo-italy.jpeg"
                      alt="Logo de Condor View"
                      className="h-[20rem] w-auto object-contain mx-auto mb-4"
                    />
                  </div>
                  <CardDescription className="text-lg text-slate-600">
                    Sistema de análisis predictivo basado en imágenes satelitales con visión computacional y deep
                    learning.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    Utilizamos algoritmos avanzados de inteligencia artificial para anticipar problemáticas ambientales
                    como sequías, deforestación y cambios en el uso del suelo, proporcionando alertas tempranas para la
                    toma de decisiones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-custom-blue rounded-full text-sm font-medium">
                      Deep Learning
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-custom-blue rounded-full text-sm font-medium">
                      Satelital
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-custom-blue rounded-full text-sm font-medium">
                      Predictivo
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/condor-view"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Ver más
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Proyecto Placeholder */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <CardTitle className="text-2xl text-slate-900">GeoMonitor</CardTitle>
                  </div>
                  <div>
                    <img
                      src="/geomonitor-logo.png"
                      alt="Logo de Condor View"
                      className="h-[20rem] w-auto object-contain mx-auto mb-4"
                    />
                  </div>
                  <CardDescription className="text-lg text-slate-600">
                    Plataforma de monitoreo geoespacial en tiempo real para gestión territorial y ambiental.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    Sistema integrado de análisis geoespacial que combina datos satelitales, sensores IoT y modelos
                    predictivos para el monitoreo continuo de variables ambientales y territoriales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">IoT</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      Tiempo Real
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      Geoespacial
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Contacto</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    ¿Tenés alguna consulta sobre nuestros proyectos? ¿Te interesa conocer más sobre nuestras
                    investigaciones? No dudes en contactarnos.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-custom-blue" />
                    <span className="text-slate-600">tecesp.eu@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-custom-blue" />
                    <span className="text-slate-600">+54 (11) 2604-595516</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-custom-blue" />
                    <span className="text-slate-600">Universidad Tecnológica Nacional - Facultad Regional de San Rafael</span>
                  </div>
                </div>
              </div>
              <form onSubmit={sendEmail}>
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">Formulario de Contacto</CardTitle>
                    <CardDescription>
                      Completá el formulario y nos pondremos en contacto contigo para responder tus consultas.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nombre</label>
                        <Input
                          name="name"
                          placeholder="Tu nombre"
                          className="border-slate-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="tu.email@ejemplo.com"
                        className="border-slate-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Asunto</label>
                      <Input
                        type="text"
                        name="title"
                        placeholder="Asunto de tu consulta"
                        className="border-slate-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Mensaje</label>
                      <Textarea
                        name="message"
                        placeholder="Contanos sobre tu interés en el grupo, experiencia o propuesta de colaboración..."
                        className="border-slate-200 min-h-[100px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#00437d] hover:bg-[#003366] text-white"
                    >
                      Enviar consulta
                    </Button>
                  </CardContent>
                </Card>
              </form>

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
