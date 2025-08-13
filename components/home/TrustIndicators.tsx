'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  TrophyIcon, 
  UserGroupIcon, 
  ClockIcon,
  StarIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: ShieldCheckIcon,
      title: 'SOC 2 Type II Certified',
      description: 'Enterprise-grade security and compliance',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: TrophyIcon,
      title: 'Award-Winning Team',
      description: 'Recognized by industry leaders',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: UserGroupIcon,
      title: '500+ Happy Clients',
      description: 'Trusted by Fortune 500 companies',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: ClockIcon,
      title: '99.9% Uptime SLA',
      description: '24/7 monitoring and support',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: StarIcon,
      title: '4.9/5 Client Rating',
      description: 'Consistently exceeding expectations',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cdefs%3E%3Cpattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="1" fill="rgba(59,130,246,0.1)"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23dots)"/%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and security has earned us the trust of leading enterprises worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="professional-card p-6 text-center hover-lift group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${indicator.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-600">
                  {indicator.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 professional-card p-6 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">1000+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">ISO</div>
              <div className="text-sm text-gray-600">27001 Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
