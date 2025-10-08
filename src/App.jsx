import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import './hero-background.css'

// Import professional images
import datacenterClean from './assets/datacenter-clean.webp'
import datacenterModern from './assets/datacenter-modern.jpg'
import sustainableTech from './assets/sustainable-tech.jpg'
import aiProfessional from './assets/ai-professional.jpg'
import eco2Logo from './assets/eco2-logo.png'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Cloud, 
  Cpu, 
  Zap, 
  Leaf, 
  Shield, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Server,
  Database,
  Network,
  Bot,
  Layers,
  Wind,
  Thermometer
} from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [showWhitepaperModal, setShowWhitepaperModal] = useState(false)
  const [whitepaperForm, setWhitepaperForm] = useState({ name: '', email: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure as a Service",
      description: "Enterprise-grade compute, storage, and networking with 99.99% uptime guarantee.",
      features: ["ARM & x86 Compute", "High-Performance Storage", "Software-Defined Networking", "Auto-scaling Infrastructure"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Platform as a Service", 
      description: "AI-native development platforms with integrated MLOps and containerization.",
      features: ["Kubernetes Native", "MLOps Pipeline", "Serverless Functions", "CI/CD Integration"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Services",
      description: "Full-stack AI from model training to deployment, specialized in agentic workflows.",
      features: ["Model Training & Inference", "Agentic Workflows", "AI Consulting", "Custom Solutions"]
    }
  ]

  const innovations = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular Pod Design",
      description: "Prefabricated data center pods with integrated power and cooling distribution.",
      metric: "50% faster deployment"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Advanced Cooling",
      description: "Liquid cooling and heat recovery systems achieving industry-leading efficiency.",
      metric: "PUE of 1.15"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Hot Aisle Containment",
      description: "Complete airflow management with automatic containment panels.",
      metric: "15% energy savings"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Lights-Out Automation",
      description: "80% automated operations with robotic maintenance and AI optimization.",
      metric: "24/7 autonomous"
    }
  ]

  const advantages = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Carbon Negative Operations",
      description: "Using renewable energy plus on-site forest carbon offsets"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Vendor Lock-in",
      description: "Full control over your data and applications with open standards"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Optimized Infrastructure",
      description: "Purpose-built for AI workloads with optimized compute and networking"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Zero-Trust Security",
      description: "End-to-end encryption and compliance with enterprise security standards"
    }
  ]

  const useCases = [
    {
      industry: "Financial Services",
      company: "FinanceFlow Corp",
      challenge: "Legacy trading systems with high latency and technical debt",
      solution: "AI-powered trading algorithms with real-time risk assessment",
      results: ["67% faster execution", "89% fewer violations", "$12M annual savings"],
      image: aiProfessional
    },
    {
      industry: "Healthcare Technology", 
      company: "MedTech Innovations",
      challenge: "Fragmented patient data systems and manual diagnostic processes",
      solution: "Integrated AI platform for medical imaging and data unification",
      results: ["45% faster diagnosis", "92% accuracy rate", "Improved outcomes"],
      image: sustainableTech
    },
    {
      industry: "E-commerce & Retail",
      company: "RetailMax Global", 
      challenge: "Inefficient supply chain and poor demand forecasting",
      solution: "End-to-end AI supply chain optimization with predictive analytics",
      results: ["38% cost reduction", "78% forecast accuracy", "25% faster delivery"],
      image: datacenterModern
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={eco2Logo} alt="ECO2.ai Logo" className="w-8 h-8" />
              <span className="font-display text-xl text-gray-900">DCO2.com &#47; ECO2.ai</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#innovations" className="text-gray-600 hover:text-gray-900 transition-colors">Innovations</a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use Cases</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            </div>

            <Button className="gradient-primary text-white hover:opacity-90 transition-opacity" asChild>
              <a href="mailto:ir@eco2.ai?subject=Get Started Inquiry">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Force hero-background CSS inclusion */}
      <div className="hero-background" style={{display: 'none'}}></div>
      
      {/* Hero Section */}
      <section className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* DEPLOYMENT CHECK: ${new Date().toISOString()} */}
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              NatureNeutral.AI
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-display text-white mb-6 leading-tight">
              <span className="text-green-400">Green,</span> AI-Powered 
              <span className="block gradient-text bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise Transformation
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Carbon negative, full stack AI services, independent of hyperscalers. 
              Transform your business with industry specific, agentic use cases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity" asChild>
                <a href="mailto:ir@eco2.ai?subject=AI Transformation Inquiry">
                  Start Your AI Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm border-2" onClick={() => setShowWhitepaperModal(true)}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                Read Whitepaper
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">99.99% Uptime</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Global Infrastructure</span>
          </div>
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-sm">Carbon Negative</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding relative" style={{
        backgroundImage: 'url(/dark-forest-landscape.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">
              Full-Stack AI Infrastructure
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Unlike hyperscalers, we provide integrated IaaS, PaaS, and AI services 
              designed specifically for enterprise AI transformation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-white/70 backdrop-blur-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-heading text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section 
        id="innovations" 
        className="section-padding relative"
        style={{ 
          backgroundImage: `url(${sustainableTech})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.innovations ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">
              Revolutionary Data Center Innovations
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our Green AI Factory showcases cutting-edge innovations in modular design, 
              cooling systems, and automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.innovations ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover-lift">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      {innovation.icon}
                    </div>
                    <CardTitle className="text-white text-lg font-heading">
                      {innovation.title}
                    </CardTitle>
                    <CardDescription className="text-gray-200 text-sm">
                      {innovation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      {innovation.metric}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section id="advantages" className="section-padding relative" style={{
        backgroundImage: 'url(/dark-forest-landscape.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.advantages ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">
              Why Choose DCO2
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're not just another cloud provider. We're your AI transformation partner 
              with unique advantages that set us apart.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.advantages ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-heading text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible['use-cases'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-gray-900 mb-6">
              Example Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading enterprises leverage our Green AI Factory to eliminate 
              technical debt and drive innovation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible['use-cases'] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={useCase.image}
                    alt={useCase.company}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <Badge className="gradient-primary text-white">
                    {useCase.industry}
                  </Badge>
                  
                  <h3 className="text-3xl font-display text-gray-900">
                    {useCase.company}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{useCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-heading text-gray-900 mb-2">AI Solution:</h4>
                      <p className="text-gray-600">{useCase.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-heading text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {useCase.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="section-padding hero-background relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.infrastructure ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">
              Modular Data Center Architecture
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our smart pod data centers deliver enterprise-grade performance with 
              unprecedented flexibility and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.infrastructure ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Server className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-white text-lg font-heading">
                    Smart Pod Design
                  </CardTitle>
                  <CardDescription className="text-gray-200 text-sm">
                    Prefabricated modules with integrated power, cooling, and monitoring systems.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.infrastructure ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Database className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-white text-lg font-heading">
                    Scalable Infrastructure
                  </CardTitle>
                  <CardDescription className="text-gray-200 text-sm">
                    Rapid deployment and expansion with standardized rack solutions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.infrastructure ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Network className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-white text-lg font-heading">
                    Edge Computing
                  </CardTitle>
                  <CardDescription className="text-gray-200 text-sm">
                    Distributed processing capabilities for low-latency AI applications.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white relative">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join the Green AI revolution. Reduce technical debt, increase efficiency, 
                and drive innovation with our integrated AI platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                  <a href="mailto:ir@eco2.ai?subject=Schedule Consultation">
                    Schedule Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent" asChild>
                  <a href="/whitepaper.pdf" target="_blank">
                    Download Whitepaper
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img
                  src="/server-rack.jpg"
                  alt="Sophisticated Server Rack"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-heading text-gray-900 mb-2">
                    Enterprise-Grade Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art server racks with advanced cooling and monitoring systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="font-display text-xl">DCO2.com / ECO2.ai</span>
            </div>
            
            <div>
              <h4 className="font-heading text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Investor Relations:</p>
                <a href="mailto:ir@eco2.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ir@eco2.ai
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-white mb-4">Solutions</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#services" className="block hover:text-white transition-colors">Infrastructure as a Service</a>
                <a href="#services" className="block hover:text-white transition-colors">Platform as a Service</a>
                <a href="#services" className="block hover:text-white transition-colors">AI Services</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 DCO2.com / ECO2.ai. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Whitepaper Modal */}
      {showWhitepaperModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Download Nature Neutral Whitepaper</h3>
              <button 
                onClick={() => setShowWhitepaperModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Get instant access to our comprehensive whitepaper on the 1000:1 Nature Neutral philosophy transforming sustainable AI infrastructure.
            </p>
            
            <form onSubmit={async (e) => {
              e.preventDefault()
              if (!whitepaperForm.email) {
                alert('Email address is required')
                return
              }
              
              try {
                // Store lead in admin dashboard
                if (window.addWhitepaperDownload) {
                  window.addWhitepaperDownload(whitepaperForm.name, whitepaperForm.email)
                }
                
                // Store in localStorage as backup
                const leads = JSON.parse(localStorage.getItem('eco2_whitepaper_leads') || '[]')
                leads.unshift({
                  name: whitepaperForm.name,
                  email: whitepaperForm.email,
                  downloadDate: new Date().toISOString()
                })
                localStorage.setItem('eco2_whitepaper_leads', JSON.stringify(leads))
                
                // Download the PDF file
                const link = document.createElement('a')
                link.href = '/whitepaper.pdf'
                link.download = 'Nature_Neutral_Data_Centers_The_1000_1_Philosophy_Transforming_Sustainable_AI_Infrastructure.pdf'
                link.click()
                
                alert('Thank you! The whitepaper has been downloaded. We will also send it to your email shortly.')
                setShowWhitepaperModal(false)
                setWhitepaperForm({ name: '', email: '' })
              } catch (error) {
                alert('There was an error processing your request. Please try again.')
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={whitepaperForm.name}
                    onChange={(e) => setWhitepaperForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={whitepaperForm.email}
                    onChange={(e) => setWhitepaperForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowWhitepaperModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 gradient-primary text-white"
                >
                  Download Whitepaper
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
// Build timestamp: Sun Sep 28 17:18:58 EDT 2025
// Force deployment Sun Sep 28 17:52:46 EDT 2025
