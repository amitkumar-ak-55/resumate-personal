import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Zap, FileText } from 'lucide-react';

interface LoadingSpinnerProps {
  stage: 'extracting' | 'analyzing' | 'optimizing' | 'generating';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ stage }) => {
  const stages = [
    { key: 'extracting', label: 'Extracting resume content', icon: FileText },
    { key: 'analyzing', label: 'Analyzing job requirements', icon: Brain },
    { key: 'optimizing', label: 'Optimizing your resume', icon: Zap },
    { key: 'generating', label: 'Creating cover letter', icon: FileText },
  ];

  const currentStageIndex = stages.findIndex(s => s.key === stage);

  return (
    <Card className="p-8 text-center bg-gradient-card shadow-card">
      <div className="space-y-6">
        {/* Main Loading Animation */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Brain className="w-8 h-8 text-primary-foreground animate-pulse" />
          </div>
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
        </div>

        {/* Status Text */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            AI is working on your documents
          </h3>
          <p className="text-muted-foreground">
            This usually takes 30-60 seconds
          </p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-3">
          {stages.map((stageItem, index) => {
            const StageIcon = stageItem.icon;
            const isActive = index === currentStageIndex;
            const isCompleted = index < currentStageIndex;
            
            return (
              <div
                key={stageItem.key}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                  ${isActive 
                    ? 'bg-primary/10 border border-primary/20' 
                    : isCompleted 
                      ? 'bg-accent/10 border border-accent/20' 
                      : 'bg-muted/30 border border-transparent'
                  }
                `}
              >
                <div
                  className={`
                    flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
                    ${isActive 
                      ? 'bg-primary text-primary-foreground animate-pulse' 
                      : isCompleted 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }
                  `}
                >
                  <StageIcon className="w-4 h-4" />
                </div>
                <span
                  className={`
                    text-sm font-medium transition-colors duration-300
                    ${isActive 
                      ? 'text-primary' 
                      : isCompleted 
                        ? 'text-accent' 
                        : 'text-muted-foreground'
                    }
                  `}
                >
                  {stageItem.label}
                  {isActive && (
                    <span className="inline-block ml-2">
                      <span className="animate-pulse">●</span>
                      <span className="animate-pulse animation-delay-200">●</span>
                      <span className="animate-pulse animation-delay-400">●</span>
                    </span>
                  )}
                  {isCompleted && <span className="ml-2 text-accent">✓</span>}
                </span>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground">
            💡 <strong>Tip:</strong> While you wait, prepare your application materials and 
            research the company to personalize your approach further.
          </p>
        </div>
      </div>
    </Card>
  );
};