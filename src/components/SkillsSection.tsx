import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Bug, Server, Globe, Code, Fingerprint, Network, FileCode, KeyRound } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "HTML & CSS",
    description: "HTML structures web content, while CSS styles and layouts it for visual presentation",
    level: 90,
    color: "from-primary to-cyan-400",
  },
  {
    icon: Globe,
    name: "JavaScript",
    description: "JavaScript adds interactivity, dynamic behavior, and functionality to web pages",
    level: 85,
    color: "from-accent to-emerald-400",
  },
  {
    icon: Code,
    name: "React JS",
    description: "React.js is a JavaScript library for building fast, interactive, and component-based user interfaces",
    level: 80,
    color: "from-primary to-cyan-400",
  },
  {
    icon: Server,
    name: "Node JS",
    description: "Node.js is a JavaScript runtime that allows server-side scripting and backend development",
    level: 75,
    color: "from-accent to-emerald-400",
  },
  {
    icon: Bug,
    name: "Penetration Testing",
    description: "OWASP Top 10 Web Application Penetration Testing and ethical hacking techniques",
    level: 78,
    color: "from-primary to-cyan-400",
  },
  {
    icon: Shield,
    name: "Network Security",
    description: "Firewall Configuration, Wireshark, Cryptography & Network Security",
    level: 82,
    color: "from-accent to-emerald-400",
  },
];

const tools = [
  { name: "Kali Linux", icon: "🐉" },
  { name: "Wireshark", icon: "🦈" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "💚" },
  { name: "Git", icon: "📦" },
  { name: "OWASP", icon: "🛡️" },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <code className="text-primary text-sm font-mono mb-4 block">
            <span className="text-accent">02.</span> Skills
          </code>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constantly expanding my cybersecurity toolkit through hands-on practice and continuous learning
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-mono text-foreground mb-1 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              {/* Animated progress bar */}
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_hsl(175_100%_50%/0.5)]`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                />
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              <p className="text-right text-xs text-muted-foreground mt-2 font-mono">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
        
        {/* Tools section */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-center text-xl font-mono text-foreground mb-8">
            <span className="text-primary">&lt;</span> Tools & Technologies <span className="text-primary">/&gt;</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group px-4 py-3 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/80 transition-all cursor-default hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="mr-2">{tool.icon}</span>
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning platforms */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm text-muted-foreground mb-4 font-mono">Currently learning on</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="px-6 py-3 bg-card/50 border-glow rounded-lg">
              <span className="font-mono text-primary">Coursera</span>
              <span className="ml-2 text-xs text-accent">Google Certificates</span>
            </div>
            <div className="px-6 py-3 bg-card/50 border-glow rounded-lg">
              <span className="font-mono text-primary">TryHackMe</span>
              <span className="ml-2 text-xs text-muted-foreground">Practice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
