import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Download, Github, Linkedin, Mail, Code, Sparkles, Star, Zap, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ["Full Stack Developer", "Mobile App Developer", "Software Engineer", "Creative Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animated background particles with better colors
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  const floatingShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: i * 0.3,
  }));

  const floatingIcons = [
    { icon: <Code className="h-6 w-6" />, delay: 0, position: { top: '15%', left: '8%' }, color: 'text-blue-500' },
    { icon: <Star className="h-5 w-5" />, delay: 1, position: { top: '25%', right: '10%' }, color: 'text-cyan-500' },
    { icon: <Zap className="h-4 w-4" />, delay: 2, position: { top: '55%', left: '5%' }, color: 'text-purple-500' },
    { icon: <Sparkles className="h-5 w-5" />, delay: 3, position: { bottom: '25%', right: '8%' }, color: 'text-pink-500' },
    { icon: <Heart className="h-4 w-4" />, delay: 4, position: { top: '65%', right: '15%' }, color: 'text-red-400' },
    { icon: <Coffee className="h-6 w-6" />, delay: 5, position: { bottom: '15%', left: '12%' }, color: 'text-amber-500' },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden wave-bg">
      {/* Enhanced Background Mesh with new colors */}
      <div className="absolute inset-0 mesh-bg opacity-40"></div>

      {/* Enhanced Floating Shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute animate-morph opacity-8"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            background: `linear-gradient(135deg, var(--color-accent), var(--color-chart-2))`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ delay: shape.delay, duration: 1 }}
        />
      ))}

      {/* Enhanced Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-accent to-chart-2 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Icons with enhanced styling */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-40`}
          style={item.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: item.delay * 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-card/90"></div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Enhanced Animated Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong backdrop-blur-xl text-sm text-primary shadow-xl border border-accent/20 glow-hover"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-accent" />
              </motion.div>
              <span className="font-medium">Welcome to my digital universe</span>
              <motion.span
                className="animate-wave text-lg"
                style={{ display: 'inline-block' }}
              >
                👋
              </motion.span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold logo-font leading-tight">
                <motion.span 
                  className="block text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Hey there, I'm
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-chart-2 to-accent animate-gradient neon-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                >
                  Nawodi
                </motion.span>
                <motion.span 
                  className="block text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Priyawansha
                </motion.span>
              </h1>

              {/* Enhanced Animated Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-4 text-xl lg:text-2xl text-muted-foreground min-h-[3rem]"
              >
                <motion.div
                  className="p-3 glass-strong rounded-2xl shadow-xl border border-accent/20 glow-hover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="h-6 w-6 text-accent" />
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{typedText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-accent text-2xl"
                  >
                    |
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                ✨ Transforming innovative ideas into <span className="text-accent font-semibold">stunning digital experiences</span> through 
                cutting-edge code and thoughtful design. Building applications that users love and businesses thrive with.
              </p>
            </motion.div>

            {/* Enhanced Stats with better styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8"
            >
              {[
                { number: "3+", label: "Years", icon: "🎯", gradient: "from-blue-500 to-cyan-500" },
                { number: "50+", label: "Projects", icon: "🚀", gradient: "from-purple-500 to-pink-500" },
                { number: "15+", label: "Technologies", icon: "⚡", gradient: "from-green-500 to-emerald-500" },
                { number: "25+", label: "Happy Clients", icon: "❤️", gradient: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="modern-card p-6 text-center group-hover:shadow-2xl relative overflow-hidden">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl lg:text-3xl font-bold text-accent logo-font mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-gradient-to-r from-accent to-chart-2 hover:from-chart-2 hover:to-accent text-accent-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-xl rounded-full border-2 border-transparent hover:border-accent/30 glow-hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer animate-shimmer"
                    initial={false}
                  />
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </Button>
              </motion.div>
              
              <div className="flex gap-3">
                {[
                  { icon: <Github className="h-6 w-6" />, color: "hover:bg-gray-100 dark:hover:bg-gray-800/20", borderColor: "hover:border-gray-300 dark:hover:border-gray-600" },
                  { icon: <Linkedin className="h-6 w-6" />, color: "hover:bg-blue-50 dark:hover:bg-blue-900/20", borderColor: "hover:border-blue-300 dark:hover:border-blue-600" },
                  { icon: <Mail className="h-6 w-6" />, color: "hover:bg-red-50 dark:hover:bg-red-900/20", borderColor: "hover:border-red-300 dark:hover:border-red-600" }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 + index * 0.1 }}
                  >
                    <Button 
                      variant="outline" 
                      size="icon"
                      className={`w-14 h-14 rounded-full glass-strong backdrop-blur-xl border-2 border-accent/20 ${social.borderColor} ${social.color} transition-all duration-300 shadow-lg hover:shadow-2xl glow-hover`}
                    >
                      {social.icon}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-12"
            >
              {["React ⚛️", "Node.js 🟢", "TypeScript 📘", "React Native 📱", "Swift 🍎", ".NET 🔵"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.6 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 text-sm glass-strong rounded-full border border-accent/20 text-primary hover:border-accent/40 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Enhanced Profile Container */}
              <div className="relative">
                {/* Multiple Enhanced Background Layers */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent via-chart-2 to-chart-3 rounded-3xl opacity-20 blur-2xl"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-chart-2 via-accent to-chart-3 rounded-3xl opacity-15 blur-xl"
                  animate={{ scale: [1.05, 1, 1.05], rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                
                {/* Enhanced Profile Image Container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                  className="relative z-10 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 glass-strong modern-card"
                >
                  <div className="w-full h-full bg-gradient-to-br from-card via-accent/5 to-chart-2/5 flex items-center justify-center relative">
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse-custom"></div>
                    </div>
                    <motion.div 
                      className="text-8xl lg:text-9xl relative z-10"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      👩‍💻
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Tech Cards */}
                {[
                  { emoji: "⚛️", label: "React", position: "top-left", gradient: "from-blue-400 to-blue-600" },
                  { emoji: "📱", label: "Mobile", position: "top-right", gradient: "from-green-400 to-green-600" },
                  { emoji: "☁️", label: "Cloud", position: "bottom-left", gradient: "from-purple-400 to-purple-600" },
                  { emoji: "🚀", label: "Deploy", position: "bottom-right", gradient: "from-cyan-400 to-cyan-600" }
                ].map((card, index) => {
                  const positions = {
                    "top-left": "-top-6 -left-6",
                    "top-right": "-top-6 -right-6", 
                    "bottom-left": "-bottom-6 -left-6",
                    "bottom-right": "-bottom-6 -right-6"
                  };
                  
                  return (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute ${positions[card.position]} glass-strong backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-accent/20 group cursor-pointer glow-hover`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      <motion.span 
                        className="text-2xl block mb-1 relative z-10"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {card.emoji}
                      </motion.span>
                      <div className="text-xs font-semibold text-primary relative z-10">{card.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced Animated Rings */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-accent/20 border-dashed scale-110"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-chart-2/20 border-dotted scale-125"
                ></motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-chart-3/20 scale-140"
                ></motion.div>
              </div>

              {/* Enhanced Sparkle Effects */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-accent to-chart-2 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    repeatType: "loop",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            onClick={scrollToAbout}
            className="p-4 rounded-full glass-strong backdrop-blur-xl hover:bg-accent/10 transition-all duration-300 shadow-xl border border-accent/20 glow-hover"
          >
            <ChevronDown className="h-6 w-6 text-accent" />
          </Button>
        </motion.div>
        <motion.div 
          className="text-xs text-muted-foreground text-center mt-2 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore ✨
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;