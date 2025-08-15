import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Briefcase, Trophy, Users, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experience = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices handling 10K+ daily users"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
    },
    {
      company: "Digital Innovations Ltd.",
      position: "Frontend Developer",
      duration: "2021 - 2022",
      location: "New York, NY",
      type: "Full-time",
      description: "Developed responsive web applications and mobile apps using React, React Native, and modern frontend technologies.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced code bundle size by 30%",
        "Improved user experience metrics by 25%",
        "Collaborated with design team on 20+ UI/UX projects"
      ],
      technologies: ["React", "React Native", "JavaScript", "Tailwind CSS", "Firebase"]
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      duration: "2020 - 2021",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Started my professional journey building web applications with JavaScript, learning full-stack development, and contributing to product development.",
      achievements: [
        "Built 3 major product features from scratch",
        "Learned modern development practices",
        "Contributed to mobile app development",
        "Participated in agile development processes"
      ],
      technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "HTML/CSS"]
    },
    {
      company: "FreelanceWork",
      position: "Freelance Developer",
      duration: "2019 - 2020",
      location: "Remote",
      type: "Contract",
      description: "Worked with various clients to build custom websites and web applications, gaining experience in client communication and project management.",
      achievements: [
        "Completed 12+ client projects",
        "Maintained 100% client satisfaction rate",
        "Learned project management skills",
        "Built diverse portfolio of applications"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
    }
  ];

  const keySkills = [
    {
      category: "Leadership & Management",
      icon: <Users className="h-6 w-6" />,
      skills: ["Team Leadership", "Project Management", "Mentoring", "Agile/Scrum"]
    },
    {
      category: "Problem Solving",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ["System Architecture", "Performance Optimization", "Debugging", "Code Review"]
    },
    {
      category: "Communication",
      icon: <Trophy className="h-6 w-6" />,
      skills: ["Client Relations", "Technical Writing", "Presentation", "Cross-team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 logo-font">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements in software development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-16 bg-accent/30 hidden md:block" />
              )}
              
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent hover:border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1 logo-font">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-accent-foreground mb-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1 w-fit bg-accent/20 text-primary">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            <Briefcase className="h-3 w-3" />
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-secondary/30 hover:bg-secondary/50 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 logo-font">Professional Skills</h3>
            <p className="text-muted-foreground">
              Key competencies developed throughout my career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keySkills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 text-center border-accent/20 hover:border-accent/40">
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-3">
                      {skillGroup.icon}
                    </div>
                    <CardTitle className="text-lg text-primary logo-font">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="px-3 py-2 bg-accent/10 rounded-full text-sm text-primary hover:bg-accent/20 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.div>
                      ))}
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

export default ExperienceSection;