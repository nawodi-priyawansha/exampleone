import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Layers, 
  Smartphone, 
  Link, 
  Server, 
  Search,
  Code,
  Palette,
  Shield,
  Zap,
  Cloud,
  BarChart
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      color: "from-blue-400 to-purple-600"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "End-to-end application development covering both frontend and backend with seamless integration.",
      features: ["Frontend + Backend", "Database Design", "API Development", "System Architecture"],
      color: "from-green-400 to-blue-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with excellent user interfaces.",
      features: ["React Native", "iOS (Swift)", "Android (Kotlin)", "Cross-platform"],
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "API Integration",
      description: "Seamless third-party API integration and custom API development for enhanced functionality.",
      features: ["RESTful APIs", "GraphQL", "Third-party Integration", "API Documentation"],
      color: "from-orange-400 to-red-600"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "DevOps & Infrastructure",
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management for scalable applications.",
      features: ["CI/CD Pipelines", "Cloud Deployment", "Container Management", "Monitoring"],
      color: "from-teal-400 to-green-600"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Services",
      description: "Search engine optimization and performance improvements to increase visibility and traffic.",
      features: ["Technical SEO", "Performance Optimization", "Analytics Setup", "Content Strategy"],
      color: "from-indigo-400 to-purple-600"
    }
  ];

  const additionalSkills = [
    { icon: <Code className="h-5 w-5" />, name: "Clean Code", description: "Maintainable & Scalable" },
    { icon: <Palette className="h-5 w-5" />, name: "UI/UX Design", description: "User-Centered Design" },
    { icon: <Shield className="h-5 w-5" />, name: "Security", description: "Secure Applications" },
    { icon: <Zap className="h-5 w-5" />, name: "Performance", description: "Optimized Solutions" },
    { icon: <Cloud className="h-5 w-5" />, name: "Cloud Services", description: "AWS, Azure, GCP" },
    { icon: <BarChart className="h-5 w-5" />, name: "Analytics", description: "Data-Driven Insights" }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-background to-accent/10 group-hover:from-accent/5 group-hover:to-secondary/10">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} p-4 text-white shadow-lg group-hover:shadow-xl`}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent-foreground transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="secondary" 
                        className="text-xs hover:bg-accent transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Additional Expertise</h3>
            <p className="text-muted-foreground">
              Complementary skills that enhance every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-4 text-center transition-all duration-300 hover:shadow-lg border-accent/20 hover:border-accent/40 bg-background/50">
                  <CardContent className="p-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-primary mb-3 flex justify-center group-hover:text-accent-foreground transition-colors"
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="font-semibold text-primary mb-1">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;