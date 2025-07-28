import React from 'react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Briefcase } from 'lucide-react';

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}

export const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({
  value,
  onChange,
  isLoading
}) => {
  const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-gradient-card shadow-card">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <Label htmlFor="job-description" className="text-lg font-semibold">
                Job Description
              </Label>
              <p className="text-sm text-muted-foreground">
                Paste the complete job posting you're applying for
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Textarea
              id="job-description"
              placeholder="Paste the job description here... Include the job title, responsibilities, requirements, qualifications, and any other relevant details from the job posting."
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={isLoading}
              className="min-h-[200px] resize-none bg-background/50 border-border/50 focus:border-primary transition-smooth"
            />
            
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>Tip: Include skills, requirements, and company information for better results</span>
              <span>{wordCount} words</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};