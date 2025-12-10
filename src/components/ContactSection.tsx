import { useEffect, useState, useRef } from "react";
import { Mail, Linkedin, MapPin, Send, Github, ExternalLink, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <code className="text-primary text-sm font-mono mb-4 block">
            <span className="text-accent">05.</span> Contact
          </code>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating on cybersecurity projects or discussing opportunities? 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold font-mono text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/sunilkumarbishnoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all group border border-transparent hover:border-primary/30"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">Connect with me</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                
                <a 
                  href="mailto:sunilkbishnoi83@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all group border border-transparent hover:border-accent/30"
                >
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-accent transition-colors font-medium">sunilkbishnoi83@gmail.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="p-3 rounded-lg bg-secondary border border-border">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Vadodara, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Terminal-style message */}
            <div className="p-4 rounded-lg bg-secondary/80 border border-border font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="ml-2 text-xs">~/sunil/status</span>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="text-accent">$</span> cat availability.txt</p>
                <p className="text-primary pl-4">Status: Open to opportunities</p>
                <p className="text-primary pl-4">Looking for: Internships, Projects</p>
                <p className="text-primary pl-4">Response time: ~24 hours</p>
                <p><span className="text-accent">$</span> <span className="animate-pulse">_</span></p>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/sunilkbishnoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
              </a>
              <a 
                href="https://tryhackme.com/p/sunilbishnoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border hover:border-accent/50 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">TryHackMe</span>
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="p-6 border-glow rounded-lg bg-card/50 backdrop-blur-sm h-full">
              <h3 className="text-lg font-semibold font-mono text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2 font-mono group-focus-within:text-primary transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2 font-mono group-focus-within:text-primary transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2 font-mono group-focus-within:text-primary transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(175_100%_50%/0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
