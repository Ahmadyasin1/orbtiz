'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  UsersIcon, 
  StarIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: ShieldCheckIcon,
      title: "99.9% Uptime",
      description: "Guaranteed reliability",
      color: "text-emerald-600"
    },
    {
      icon: AcademicCapIcon,
      title: "Certified Experts",
      description: "AWS, Azure, GCP certified",
      color: "text-blue-600"
    },
    {
      icon: TrophyIcon,
      title: "Award Winning",
      description: "Industry recognition",
      color: "text-amber-600"
    },
    {
      icon: UsersIcon,
      title: "500+ Clients",
      description: "Trusted worldwide",
      color: "text-purple-600"
    },
    {
      icon: StarIcon,
      title: "5-Star Rating",
      description: "Client satisfaction",
      color: "text-yellow-600"
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Always available",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='rgba(59,130,246,0.1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dots)'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="gradient-text">Enterprise Leaders</span> Trust Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of companies that rely on our expertise for their digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-4">
                <indicator.icon className={`h-8 w-8 ${indicator.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{indicator.title}</h3>
              <p className="text-sm text-gray-600">{indicator.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Trusted by 500+ companies</p>
              <p className="text-sm text-gray-600">From startups to Fortune 500</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
