import { useEffect, useState, useRef } from "react";
import { Trophy, Flame, CheckCircle, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Flame,
    title: "90-Day TryHackMe Streak",
    description: "Dedicated daily practice in cybersecurity, networking, and ethical hacking for 90 consecutive days. Built consistent habits in penetration testing, reconnaissance, and defensive security fundamentals.",
    date: "Recent",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    stats: ["90 Days", "Daily Practice", "Top 10%"],
  },
  {
    icon: CheckCircle,
    title: "Mastercard Security Simulation",
    description: "Served as an analyst on Mastercard's Security Awareness Team, identifying phishing threats and implementing security training. Analyzed business areas requiring robust security protocols.",
    date: "1 month ago",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    stats: ["Forage", "Security Analyst", "Completed"],
  },
  {
    icon: Trophy,
    title: "30-Day Learning Milestone",
    description: "Earned the 30-day streak badge on TryHackMe, establishing a strong foundation in hands-on cybersecurity practice. First major milestone in the learning journey.",
    date: "2 months ago",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    stats: ["30 Days", "Badge Earned", "Foundation"],
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    <section id="achievements" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <code className="text-primary text-sm font-mono mb-4 block">
            <span className="text-accent">04.</span> Achievements
          </code>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="gradient-text">Milestones & Wins</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Key achievements marking my cybersecurity learning journey
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
            
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-5 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 ${achievement.borderColor} flex items-center justify-center z-10 ${
                  activeIndex === index ? "scale-125" : ""
                } transition-transform`}>
                  <div className={`w-2 h-2 rounded-full ${achievement.color.replace("text-", "bg-")}`} />
                </div>
                
                {/* Content - alternating sides on desktop */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}>
                  <div className={`group p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 ${
                    activeIndex === index ? "scale-[1.02] shadow-lg" : ""
                  }`}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${achievement.bgColor} ${achievement.borderColor} border transition-transform group-hover:scale-110`}>
                        <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-lg font-semibold font-mono text-foreground group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono px-2 py-1 bg-secondary rounded">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.stats.map((stat) => (
                        <span 
                          key={stat}
                          className={`px-3 py-1 text-xs font-mono rounded-full ${achievement.bgColor} ${achievement.color}`}
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future goals */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 border border-border rounded-full">
            <Star className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Next goal: <span className="text-primary">100-day streak</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
