import { useEffect, useState } from "react";

const MatrixRain = () => {
  const columns = 25;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 text-primary font-mono text-xs leading-none"
          style={{
            left: `${(i / columns) * 100}%`,
            animation: `matrix-fall ${6 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {Array.from({ length: 40 }).map((_, j) => (
            <div key={j} className="opacity-80" style={{ animationDelay: `${j * 0.1}s` }}>
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const FloatingParticles = () => {
  const particles = 25;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particles }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${i % 3 === 0 ? 'bg-primary/40' : i % 3 === 1 ? 'bg-accent/40' : 'bg-cyber-purple/40'}`}
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: `0 0 ${5 + Math.random() * 10}px currentColor`,
          }}
        />
      ))}
    </div>
  );
};

const BinaryStream = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-accent font-mono text-[10px] whitespace-nowrap"
          style={{
            left: `${10 + i * 12}%`,
            animation: `matrix-fall ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        >
          {Array.from({ length: 50 }).map((_, j) => (
            <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

const HexGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute font-mono text-[8px] text-primary/50"
          style={{
            left: `${5 + i * 18}%`,
            top: `${10 + (i % 3) * 30}%`,
            animation: `pulse-glow ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {Array.from({ length: 8 }).map((_, j) => (
            <div key={j} className="opacity-60">
              {Math.random().toString(16).substr(2, 8).toUpperCase()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(175 100% 50% / 0.1), transparent 50%)`,
          transition: 'background 0.3s ease-out',
        }}
      />
      
      {/* Parallax cyber grid layers */}
      <div 
        className="absolute inset-0 cyber-grid opacity-20"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          backgroundImage: 'linear-gradient(hsl(145 100% 45% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(145 100% 45% / 0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Glowing orbs with parallax and mouse interaction */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${scrollY * 0.05 + (mousePos.x - 0.5) * 20}px, ${scrollY * -0.1 + (mousePos.y - 0.5) * 20}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${scrollY * -0.08 + (mousePos.x - 0.5) * -15}px, ${scrollY * 0.05 + (mousePos.y - 0.5) * -15}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyber-purple/8 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${scrollY * 0.03 + (mousePos.x - 0.5) * 10}px, ${scrollY * -0.07 + (mousePos.y - 0.5) * 10}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="absolute top-3/4 right-1/3 w-[350px] h-[350px] bg-destructive/5 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${scrollY * -0.04}px, ${scrollY * 0.08}px)`,
        }}
      />
      
      {/* Matrix rain effect */}
      <MatrixRain />
      
      {/* Binary streams */}
      <BinaryStream />
      
      {/* Hex grid overlay */}
      <HexGrid />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Scan lines overlay - enhanced */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--primary)/0.02)_2px,hsl(var(--primary)/0.02)_4px)]" />
      
      {/* Moving scanline */}
      <div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
        style={{
          top: `${(scrollY * 0.5) % window.innerHeight}px`,
          boxShadow: '0 0 20px hsl(175 100% 50% / 0.3)',
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/10" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-40" />
    </div>
  );
};

export default ParallaxBackground;
