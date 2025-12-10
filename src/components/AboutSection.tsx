import { useEffect, useState, useRef } from "react";
import { User, BookOpen, Target, Zap, Code, Shield, Terminal } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow" style={{ animationDuration: "20s" }} />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-accent/10 rounded-lg rotate-45 animate-float" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <code className="text-primary text-sm font-mono mb-4 block">
            <span className="text-accent">01.</span> About Me
          </code>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            <span className="gradient-text">Who I Am</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm relative overflow-hidden group hover:bg-card/70 transition-colors">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                I'm <span className="text-primary font-semibold">Sunil Bishnoi</span>, a 3rd-year B.Tech CSE student 
                with a passion for cybersecurity and software development at ITM (SLS) Baroda University.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since beginning my cybersecurity journey in 2023, I've been actively exploring web technologies, 
                database management, data structures, and programming in Java and Python. My skill set includes 
                OWASP Top 10 Web Application Penetration Testing, Kali Linux, Enterprise IT Security, Ethical Hacking, 
                Firewall Configuration, and Wireshark.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving complex problems, building efficient solutions, and staying updated with the 
                latest advancements in tech. Passionate about continuous learning and applying skills to real-world challenges.
              </p>
            </div>
            
            {/* Tech interests */}
            <div className="flex flex-wrap gap-3">
              {["Web Development", "Cybersecurity", "React JS", "Python", "Java", "Machine Learning"].map((tag, i) => (
                <span 
                  key={tag}
                  className="px-4 py-2 text-sm font-mono bg-secondary/50 text-secondary-foreground rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right side - Stats cards */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group hover:scale-[1.02]">
              <User className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-mono text-foreground mb-1">2+</h3>
              <p className="text-muted-foreground text-sm">Years of Experience</p>
              <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              </div>
            </div>
            
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group hover:scale-[1.02]">
              <BookOpen className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-mono text-foreground mb-1">7+</h3>
              <p className="text-muted-foreground text-sm">Successful Projects</p>
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 bg-accent/50 rounded-full" />
                ))}
              </div>
            </div>
            
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group hover:scale-[1.02]">
              <Target className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-mono text-foreground mb-1">2027</h3>
              <p className="text-muted-foreground text-sm">Graduation Year</p>
              <div className="mt-3 text-xs text-muted-foreground font-mono">
                <span className="text-primary">▸</span> 3rd Year
              </div>
            </div>
            
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group hover:scale-[1.02]">
              <Zap className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-mono text-foreground mb-1">10+</h3>
              <p className="text-muted-foreground text-sm">Certifications</p>
              <div className="mt-3 flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-secondary border-2 border-card" />
                ))}
                <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-[10px] text-primary">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Terminal decoration */}
        <div className={`mt-16 max-w-2xl mx-auto transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="p-4 rounded-lg bg-secondary/80 border border-border font-mono text-sm">
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="ml-2 text-xs">~/sunil/about</span>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <p><span className="text-accent">$</span> cat interests.txt</p>
              <p className="text-primary pl-4">→ Web Development</p>
              <p className="text-primary pl-4">→ Cybersecurity</p>
              <p className="text-primary pl-4">→ Machine Learning</p>
              <p><span className="text-accent">$</span> <span className="animate-pulse">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
