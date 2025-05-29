
import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, BarChart3, Cpu, Eye, ArrowRight, CheckCircle, Zap, Shield, Globe, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: 'Excel Upload',
      description: 'Seamlessly upload your Excel files with drag-and-drop functionality. Support for .xlsx, .xls, and .csv formats.'
    },
    {
      icon: BarChart3,
      title: '2D & 3D Graph Generation',
      description: 'Automatically generate stunning 2D and 3D visualizations from your data with intelligent chart recommendations.'
    },
    {
      icon: Eye,
      title: 'User Dashboard',
      description: 'Intuitive dashboard to manage your files, view analytics, and export visualizations in multiple formats.'
    },
    {
      icon: Cpu,
      title: 'Data Insights',
      description: 'AI-powered insights and recommendations to help you understand trends and patterns in your data.'
    }
  ];

  const mainFeatures = [
    {
      icon: Upload,
      title: 'Smart File Upload',
      description: 'Drag and drop Excel files with automatic format detection. Supports .xlsx, .xls, .csv, and more.',
      details: ['Batch file processing', 'Error detection and validation', 'Preview before processing', 'Cloud storage integration']
    },
    {
      icon: BarChart3,
      title: 'Advanced Visualizations',
      description: 'Generate stunning 2D and 3D charts automatically based on your data patterns.',
      details: ['20+ chart types', 'Interactive 3D graphs', 'Custom color schemes', 'Animation effects']
    },
    {
      icon: Eye,
      title: 'Intelligent Dashboard',
      description: 'Comprehensive dashboard with real-time analytics and customizable widgets.',
      details: ['Real-time updates', 'Custom layouts', 'Export capabilities', 'Sharing options']
    },
    {
      icon: Cpu,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms analyze your data to provide actionable insights.',
      details: ['Trend detection', 'Anomaly identification', 'Predictive analytics', 'Automated recommendations']
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process large datasets in seconds with our optimized engine.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your dashboards from anywhere with cloud synchronization.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with team members in real-time.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Data Analyst',
      company: 'TechCorp',
      text: 'Excel Analytics transformed how we visualize our quarterly reports. The 3D graphs are absolutely stunning!'
    },
    {
      name: 'Michael Chen',
      role: 'Business Intelligence Manager',
      company: 'DataFlow Inc',
      text: 'The automated insights feature saved us hours of manual analysis. Highly recommended for any data team.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLab',
      text: 'Finally, a tool that makes complex data accessible to everyone on our team. The visualizations are incredible.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Visualize Your Data
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your Excel spreadsheets into stunning 2D and 3D visualizations with our advanced analytics platform. 
              No coding required, just upload and watch your data come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Data Visualization
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to transform raw data into actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Performance & Scale
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade features that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-400">
              Built with cutting-edge technology for maximum performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Supported Formats</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Microsoft Excel (.xlsx, .xls)</li>
                <li>• Comma Separated Values (.csv)</li>
                <li>• Tab Separated Values (.tsv)</li>
                <li>• Google Sheets import</li>
                <li>• JSON and XML formats</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Performance</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Process up to 1M rows</li>
                <li>• Sub-second chart generation</li>
                <li>• 99.9% uptime guarantee</li>
                <li>• Global CDN delivery</li>
                <li>• Auto-scaling infrastructure</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Security & Compliance</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR compliant</li>
                <li>• AES-256 encryption</li>
                <li>• Role-based access control</li>
                <li>• Audit logging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Data Professionals
            </h2>
            <p className="text-xl text-gray-400">
              See what our users are saying about Excel Analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who trust Excel Analytics for their data visualization needs
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
