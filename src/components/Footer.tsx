import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">Sunil Bishnoi</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> by Sunil Bishnoi
          </p>
          
          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
