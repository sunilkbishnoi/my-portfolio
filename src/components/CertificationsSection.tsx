import { useEffect, useState, useRef } from "react";
import { Award, ExternalLink, CheckCircle2, Calendar, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    date: "2024",
    skills: ["Linux", "SQL", "Command Line", "Database Management", "Bash Scripting"],
    color: "from-blue-500 to-cyan-500",
    verified: true,
  },
  {
    title: "Java Object-Oriented Programming",
    issuer: "Coursera",
    date: "2024",
    skills: ["Java", "OOP", "Classes", "Inheritance", "Polymorphism"],
    color: "from-orange-500 to-red-500",
    verified: true,
  },
  {
    title: "Basics of Python",
    issuer: "Cambridge International, UK",
    date: "2024",
    skills: ["Python", "Programming Fundamentals", "Data Types", "Control Flow", "Functions"],
    color: "from-green-500 to-emerald-500",
    verified: true,
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google | Coursera",
    date: "July 10, 2024",
    skills: ["Cybersecurity", "Network Security", "Risk Management", "SIEM", "Incident Response"],
    color: "from-purple-500 to-pink-500",
    verified: true,
  },
];

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="certifications" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-20 h-20 border border-primary/10 rotate-45 animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <code className="text-primary text-sm font-mono mb-4 block">
            <span className="text-accent">03.</span> Certifications
          </code>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="gradient-text">Professional Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Industry-recognized certifications validating my cybersecurity expertise
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
              
              <div className="relative p-6 border-glow rounded-lg bg-card/80 backdrop-blur-sm group-hover:bg-card transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-10 border border-white/10 self-start transition-transform group-hover:scale-110`}>
                    <Award className="w-8 h-8 text-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    {/* Title & Verified badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold font-mono text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      {cert.verified && (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">
                          <BadgeCheck className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    
                    {/* Issuer & Date */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="text-accent font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={skill}
                          className={`px-3 py-1 text-xs font-mono bg-secondary/80 text-secondary-foreground rounded-full border border-border transition-all duration-300 ${
                            hoveredIndex === index ? "border-primary/30" : ""
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* External link */}
                  <button className="self-start p-2 text-muted-foreground hover:text-primary transition-all opacity-0 group-hover:opacity-100 hover:scale-110">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More certifications indicator */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-secondary/50 border border-border rounded-full">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background flex items-center justify-center">
                  <Award className="w-4 h-4 text-foreground" />
                </div>
              ))}
            </div>
            <span className="font-mono text-muted-foreground">
              + 7 more certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
