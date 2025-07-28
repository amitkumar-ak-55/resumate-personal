import React from 'react';
import { FileText, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center space-y-6 mb-12">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3">
        <div className="relative">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-glow">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <Zap className="w-3 h-3 text-accent-foreground" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Resumate
          </h1>
        </div>
      </div>

      {/* Tagline */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">
          AI-Powered Resume Optimization
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Upload your resume, paste a job description, and get a tailored, ATS-optimized resume 
          plus a matching cover letter in minutes.
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 text-sm">
        <div className="text-center">
          <div className="font-semibold text-primary">30s</div>
          <div className="text-muted-foreground">Average Processing</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-accent">ATS</div>
          <div className="text-muted-foreground">Optimized</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-primary">Free</div>
          <div className="text-muted-foreground">No Signup Required</div>
        </div>
      </div>
    </header>
  );
};