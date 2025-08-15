import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Heart, Coffee, Zap, Globe, Smartphone, Database, Cloud, Award, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passionate",
      description: "Love what I do and always eager to learn"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Dedicated",
      description: "Committed to delivering quality solutions"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies"
    }
  ];

  const personalStats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Happy Clients", value: "25+" }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "C#", icon: "🔷" },
        { name: ".NET", icon: "🔵" },
        { name: "PHP", icon: "🐘" },
        { name: "Laravel", icon: "🏗️" },
        { name: "SQL", icon: "🗄️" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🤖" },
        { name: "Java", icon: "☕" },
        { name: "MAUI", icon: "🔧" },
        { name: "Xamarin", icon: "🔗" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "CI/CD", icon: "🔄" },
        { name: "cPanel", icon: "⚙️" },
        { name: "Git", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Firebase", icon: "🔥" }
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      duration: "2016 - 2020",
      description: "Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Code Academy",
      duration: "2020",
      description: "Intensive program covering modern web development technologies and best practices.",
      icon: <Code className="h-6 w-6" />
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023", icon: "☁️" },
    { name: "React Developer Certification", issuer: "Meta", year: "2023", icon: "⚛️" },
    { name: "Google Cloud Platform", issuer: "Google", year: "2022", icon: "🌟" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: "2022", icon: "🔷" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2021", icon: "🍃" },
    { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2021", icon: "🐳" }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Nawodi Priyawansha, a passionate full-stack developer with over 3 years of experience creating 
                digital solutions that make a difference. My journey started with a curiosity 
                about how websites work, and it has evolved into a deep love for crafting 
                exceptional user experiences.
              </p>
              <p>
                I specialize in modern web technologies and have a strong foundation in both 
                frontend and backend development. I believe in writing clean, maintainable code 
                and staying up-to-date with the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Personal Interests */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-primary">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Mobile Apps", "Open Source", "UI/UX Design", "Machine Learning", "Tech Blogging"].map((interest) => (
                  <Badge key={interest} variant="secondary" className="hover:bg-accent transition-colors">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow bg-background border-accent/20">
                    <CardContent className="p-2">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">What I Bring</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                  >
                    <div className="text-primary mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary text-sm">{highlight.title}</h5>
                      <p className="text-xs text-muted-foreground">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills, Education, Certifications Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Skills
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg text-primary">
                          {category.icon}
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer"
                            >
                              <span className="text-lg">{skill.icon}</span>
                              <span className="text-sm font-medium text-primary">{skill.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-accent/20 text-primary">
                            {edu.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                              <Badge variant="secondary" className="w-fit mt-1 md:mt-0">
                                {edu.duration}
                              </Badge>
                            </div>
                            <p className="text-accent-foreground font-medium mb-2">{edu.school}</p>
                            <p className="text-muted-foreground">{edu.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40 text-center">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-4">{cert.icon}</div>
                        <h3 className="font-semibold text-primary mb-2">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;