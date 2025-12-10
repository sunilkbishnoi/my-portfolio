import { useEffect, useState } from "react";
import { Shield, Terminal, Lock, ChevronDown, Code, Wifi, Database, Eye, Download, Skull, Bug, Key, Server, Zap } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const fullText = "Cyber Enthusiast & Web Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax floating icons */}
      <div 
        className="absolute top-20 left-10 md:left-20 animate-float"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <Shield className="w-8 h-8 text-primary/50" />
        </div>
      </div>
      <div 
        className="absolute top-40 right-10 md:right-32 animate-float"
        style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: "1s" }}
      >
        <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm">
          <Terminal className="w-10 h-10 text-accent/50" />
        </div>
      </div>
      <div 
        className="absolute bottom-40 left-20 md:left-40 animate-float"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: "2s" }}
      >
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <Lock className="w-6 h-6 text-primary/50" />
        </div>
      </div>
      <div 
        className="absolute top-1/3 right-20 animate-float hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.02}deg)`, animationDelay: "0.5s" }}
      >
        <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 backdrop-blur-sm">
          <Code className="w-5 h-5 text-cyber-purple/50" />
        </div>
      </div>
      <div 
        className="absolute bottom-1/3 right-1/4 animate-float hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.18}px) scale(${1 + scrollY * 0.0002})`, animationDelay: "1.5s" }}
      >
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm">
          <Wifi className="w-5 h-5 text-accent/50" />
        </div>
      </div>
      <div 
        className="absolute top-2/3 left-1/4 animate-float hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.22}px)`, animationDelay: "2.5s" }}
      >
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <Database className="w-5 h-5 text-primary/50" />
        </div>
      </div>
      {/* Additional hacker-themed floating elements */}
      <div 
        className="absolute top-[15%] right-[15%] animate-float hidden xl:block"
        style={{ transform: `translateY(${scrollY * 0.35}px) rotate(${-scrollY * 0.03}deg)`, animationDelay: "0.8s" }}
      >
        <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/20 backdrop-blur-sm animate-pulse-glow">
          <Skull className="w-6 h-6 text-destructive/60" />
        </div>
      </div>
      <div 
        className="absolute bottom-[20%] right-[10%] animate-float hidden xl:block"
        style={{ transform: `translateY(${scrollY * 0.28}px)`, animationDelay: "1.8s" }}
      >
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm">
          <Bug className="w-5 h-5 text-accent/60" />
        </div>
      </div>
      <div 
        className="absolute top-[60%] right-[8%] animate-float hidden xl:block"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.01}deg)`, animationDelay: "2.2s" }}
      >
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <Key className="w-5 h-5 text-primary/60" />
        </div>
      </div>
      <div 
        className="absolute top-[45%] left-[8%] animate-float hidden xl:block"
        style={{ transform: `translateY(${scrollY * 0.32}px)`, animationDelay: "0.3s" }}
      >
        <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 backdrop-blur-sm">
          <Server className="w-5 h-5 text-cyber-purple/60" />
        </div>
      </div>
      <div 
        className="absolute bottom-[35%] left-[12%] animate-float hidden xl:block"
        style={{ transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0001})`, animationDelay: "1.2s" }}
      >
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm animate-pulse">
          <Zap className="w-5 h-5 text-accent/60" />
        </div>
      </div>
      
      {/* Main content with parallax */}
      <div 
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ transform: `translateY(${scrollY * 0.4}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
      >
        {/* Terminal-style intro */}
        <div className="inline-block mb-6 px-4 py-2 border border-primary/30 rounded bg-secondary/50 backdrop-blur-sm animate-pulse-glow">
          <code className="text-primary text-sm font-mono">
            <span className="text-accent">$</span> whoami
          </code>
        </div>
        
        {/* Name with glitch effect on hover */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 tracking-tight group">
          <span className="text-foreground inline-block hover:animate-glitch">Sunil</span>
          <span className="text-glow gradient-text ml-4 inline-block hover:animate-glitch">Bishnoi</span>
        </h1>
        
        {/* Typing effect title */}
        <div className="h-12 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-accent">&gt;</span> {displayText}
            <span className="inline-block w-3 h-6 ml-1 bg-primary animate-pulse" />
          </p>
        </div>
        
        {/* Location & Education */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-muted-foreground">
          <span className="px-3 py-1.5 border-glow rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-colors">
            📍 Vadodara, Gujarat, India
          </span>
          <span className="px-3 py-1.5 border-glow rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-colors">
            🎓 3rd Year BTech CSE - Cybersecurity
          </span>
          <span className="px-3 py-1.5 border-glow rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-colors">
            🏫 ITM (SLS) Baroda University
          </span>
        </div>
        
        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-mono">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary text-glow">2+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-accent text-glow-green">7+</div>
            <div className="text-muted-foreground">Successful Projects</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-primary text-glow">10+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact"
            className="group relative px-8 py-3 bg-primary text-primary-foreground font-semibold rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(175_100%_50%/0.5)] hover:scale-105"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient-shift_2s_ease-in-out_infinite] transition-opacity" />
          </a>
          <a 
            href="/Resume.pdf"
            download="Sunil_Bishnoi_Resume.pdf"
            className="group px-8 py-3 border border-accent/50 text-accent font-semibold rounded transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_hsl(145_100%_45%/0.3)] flex items-center gap-2"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download Resume
          </a>
          <a 
            href="#skills"
            className="px-8 py-3 border border-primary/50 text-primary font-semibold rounded transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(175_100%_50%/0.2)]"
          >
            View Skills
          </a>
        </div>
        
        {/* Quick links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/sunilkbishnoi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono flex items-center gap-2">
            <Eye className="w-4 h-4" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/sunilkumarbishnoi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono flex items-center gap-2">
            LinkedIn
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
