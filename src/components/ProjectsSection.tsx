import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with advanced shopping cart, payment integration, and admin dashboard.",
      fullDescription: "Built using React, Node.js, and MongoDB with Stripe payment integration. Features include user authentication, product management, order tracking, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      fullDescription: "Developed with React Native for mobile and React for web, featuring real-time collaboration, drag-and-drop interface, and notification system.",
      technologies: ["React Native", "React", "Firebase", "TypeScript"],
      category: "Mobile & Web",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Healthcare Dashboard",
      description: "A comprehensive healthcare management system with patient records, appointment scheduling, and analytics.",
      fullDescription: "Built with Next.js and .NET Core, featuring secure patient data management, appointment scheduling, and detailed analytics dashboard for healthcare providers.",
      technologies: ["Next.js", "C#", ".NET Core", "SQL Server", "Chart.js"],
      category: "Enterprise",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "An analytics platform for social media management with comprehensive reporting and insights.",
      fullDescription: "A full-stack application using React and Laravel, providing detailed social media analytics, scheduling tools, and performance insights for businesses and influencers.",
      technologies: ["React", "Laravel", "PHP", "MySQL", "Chart.js"],
      category: "Analytics",
      images: [
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile fitness application with workout tracking, progress monitoring, and social features.",
      fullDescription: "Cross-platform mobile app built with React Native and Swift, featuring workout tracking, nutrition logging, social challenges, and progress visualization.",
      technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
      category: "Mobile",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&q=80"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "A comprehensive real estate platform with property listings, virtual tours, and client management.",
      fullDescription: "Full-stack application using React and Node.js with advanced search filters, virtual tour integration, and comprehensive CRM for real estate agents.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Socket.io"],
      category: "Full Stack",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const categories = ["All", "Full Stack", "Mobile", "Enterprise", "Analytics"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    const project = filteredProjects[selectedProject];
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    const project = filteredProjects[selectedProject];
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedProject(0);
                setCurrentImageIndex(0);
              }}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedProject}-${currentImageIndex}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={filteredProjects[selectedProject]?.images[currentImageIndex]}
                      alt={`${filteredProjects[selectedProject]?.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image Navigation */}
              {filteredProjects[selectedProject]?.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Image Indicators */}
              {filteredProjects[selectedProject]?.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {filteredProjects[selectedProject].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {filteredProjects[selectedProject]?.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {filteredProjects[selectedProject].images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex 
                        ? 'border-primary' 
                        : 'border-transparent'
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${filteredProjects[selectedProject].title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {filteredProjects[selectedProject]?.title}
                    </h3>
                    {filteredProjects[selectedProject]?.featured && (
                      <Badge className="bg-gradient-to-r from-accent to-secondary text-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <Badge variant="outline" className="mb-4">
                    {filteredProjects[selectedProject]?.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {filteredProjects[selectedProject]?.fullDescription}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredProjects[selectedProject]?.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${selectedCategory}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(index);
                  setCurrentImageIndex(0);
                }}
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                  selectedProject === index ? 'ring-2 ring-primary' : ''
                }`}>
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <ImageWithFallback
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
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

export default ProjectsSection;