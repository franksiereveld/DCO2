import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

// Import professional images
import datacenterClean from './assets/datacenter-clean.webp'
import datacenterModern from './assets/datacenter-modern.jpg'
import sustainableTech from './assets/sustainable-tech.jpg'
import aiProfessional from './assets/ai-professional.jpg'

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
      description: "100% renewable energy with on-site solar, wind, and forest carbon offsets"
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
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="font-display text-xl text-gray-900">DCO2.com</span>
              <span className="font-display text-xl text-gray-600">ECO2.ai</span> {/* Updated branding */}
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#innovations" className="text-gray-600 hover:text-gray-900 transition-colors">Innovations</a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use Cases</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            </div>

            <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              The Green AI Factory
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-display mb-6 leading-tight">
              AI-Powered Enterprise
              <span className="block gradient-text bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-stack IaaS + PaaS + AI services independent of hyperscalers. 
              Reduce technical debt with agentic AI workflows connected end-to-end.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Start Your AI Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Watch Demo
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
      <section id="services" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-gray-900 mb-6">
              Full-Stack AI Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="h-full hover-lift border-0 shadow-lg">
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
      <section id="advantages" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.advantages ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-gray-900 mb-6">
              Why Choose DCO2
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <h3 className="text-xl font-heading text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
              Enterprise Success Stories
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

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the Green AI revolution. Reduce technical debt, increase efficiency, 
              and drive innovation with our integrated AI platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Download Whitepaper
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="font-display text-xl">DCO2.com</span>
            </div>
            
            <p className="text-gray-400">
              © 2024 DCO2.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
