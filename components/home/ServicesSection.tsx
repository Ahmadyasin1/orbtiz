'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  CubeIcon,
  CogIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI & ML Engineering',
      description: 'Transform your data into intelligent insights with enterprise-grade AI solutions',
      details: [
        'MLOps pipeline implementation',
        'Large Language Model (LLM) integration',
        'Retrieval Augmented Generation (RAG) systems',
        'Model monitoring and optimization',
        'Computer vision and NLP solutions',
        'AI governance and ethics frameworks',
      ],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      trustBadge: '99.9% Model Accuracy',
      clients: '150+ AI Projects Delivered',
    },
    {
      icon: CloudIcon,
      title: 'Cloud & DevOps',
      description: 'Scale with confidence using modern cloud infrastructure and DevOps practices',
      details: [
        'Infrastructure as Code (Terraform, CloudFormation)',
        'CI/CD pipeline automation',
        'Kubernetes orchestration and management',
        'Multi-cloud strategy and migration',
        'Observability and monitoring solutions',
        'Site reliability engineering (SRE)',
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      trustBadge: '99.99% Uptime SLA',
      clients: '200+ Cloud Migrations',
    },
    {
      icon: CircleStackIcon,
      title: 'Data & Databases',
      description: 'Unlock the power of your data with modern analytics and database solutions',
      details: [
        'Data lakes and warehouses design',
        'ETL/ELT pipeline development',
        'Database performance optimization',
        'Real-time analytics and dashboards',
        'Data governance and compliance',
        'Migration and modernization services',
      ],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      trustBadge: 'SOC 2 Compliant',
      clients: '1TB+ Data Processed Daily',
    },
    {
      icon: CubeIcon,
      title: 'Docker & Containers',
      description: 'Containerize and orchestrate applications for maximum scalability',
      details: [
        'Containerization strategy and implementation',
        'Microservices architecture design',
        'Container security best practices',
        'Registry management and governance',
        'Performance optimization and monitoring',
        'Legacy application modernization',
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      trustBadge: '50% Faster Deployments',
      clients: '300+ Apps Containerized',
    },
    {
      icon: CogIcon,
      title: 'Automation & RPA',
      description: 'Automate business processes for maximum efficiency and cost savings',
      details: [
        'Business process automation',
        'API integration and management',
        'Workflow optimization and design',
        'Robotic Process Automation (RPA)',
        'Custom automation tool development',
        'Change management and training',
      ],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      trustBadge: '70% Cost Reduction',
      clients: '500+ Processes Automated',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Protect your digital assets with enterprise-grade security solutions',
      details: [
        'Application security assessments',
        'Single Sign-On (SSO) implementation',
        'Policy as Code frameworks',
        'Compliance automation (SOC 2, HIPAA, PCI)',
        'Vulnerability management programs',
        'Security training and awareness',
      ],
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      trustBadge: 'ISO 27001 Certified',
      clients: '100% Compliance Rate',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/90 to-purple-900/80 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' strokeWidth='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Enterprise-Grade{' '}
            <span className="gradient-text-premium">
              Technology Services
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            From AI and cloud infrastructure to security and automation, we provide 
            end-to-end solutions that drive digital transformation for Fortune 500 companies.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="trust-badge">
              <span>🏆 Fortune 500 Trusted</span>
            </div>
            <div className="trust-badge">
              <span>⚡ 24/7 Enterprise Support</span>
            </div>
            <div className="trust-badge">
              <span>🔒 SOC 2 Type II Compliant</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.title}
                  onClick={() => setActiveService(index)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-500 focus-visible group relative overflow-hidden ${
                    activeService === index
                      ? 'professional-card shadow-2xl scale-105 border-blue-400/50'
                      : 'glass-effect hover:shadow-xl hover-lift'
                  }`}
                  whileHover={{ scale: activeService === index ? 1.05 : 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} shadow-lg relative z-10`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {service.trustBadge && (
                        <div className="text-xs font-semibold text-emerald-400 mb-1">
                          {service.trustBadge}
                        </div>
                      )}
                      {service.clients && (
                        <div className="text-xs text-gray-500">
                          {service.clients}
                        </div>
                      )}
                    </div>
                  </div>
                  {activeService === index && (
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Service Details */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass rounded-3xl p-8 shadow-modern-lg relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-5`}></div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-5 rounded-2xl bg-gradient-to-r ${services[activeService].color} shadow-glow`}>
                    {(() => {
                      const Icon = services[activeService].icon;
                      return <Icon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {services[activeService].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {services[activeService].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors group"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${services[activeService].color} shadow-glow group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="btn-modern text-white px-8 py-4 rounded-full font-semibold text-lg focus-visible shadow-glow"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About {services[activeService].title}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;