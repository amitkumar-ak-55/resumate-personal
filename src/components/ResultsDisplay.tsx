import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Download, FileText, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResultsDisplayProps {
  optimizedResume: string;
  coverLetter: string;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  optimizedResume,
  coverLetter
}) => {
  const [copiedContent, setCopiedContent] = useState<'resume' | 'cover' | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (content: string, type: 'resume' | 'cover') => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedContent(type);
      toast({
        title: "Copied to clipboard!",
        description: `Your ${type === 'resume' ? 'optimized resume' : 'cover letter'} has been copied.`,
      });
      
      setTimeout(() => setCopiedContent(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or select and copy manually.",
        variant: "destructive",
      });
    }
  };

  const downloadAsText = (content: string, filename: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-elegant">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Your Optimized Documents
          </h3>
          <p className="text-muted-foreground">
            AI-tailored resume and cover letter ready for your application
          </p>
        </div>

        <Tabs defaultValue="resume" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="resume" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Optimized Resume
            </TabsTrigger>
            <TabsTrigger value="cover" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Cover Letter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resume" className="space-y-4">
            <Card className="p-4 bg-background/50 border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Optimized Resume</h4>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(optimizedResume, 'resume')}
                    className="h-8"
                  >
                    {copiedContent === 'resume' ? (
                      <CheckCircle className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadAsText(optimizedResume, 'optimized-resume.txt')}
                    className="h-8"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-mono">
                  {optimizedResume}
                </pre>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cover" className="space-y-4">
            <Card className="p-4 bg-background/50 border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Cover Letter</h4>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(coverLetter, 'cover')}
                    className="h-8"
                  >
                    {copiedContent === 'cover' ? (
                      <CheckCircle className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadAsText(coverLetter, 'cover-letter.txt')}
                    className="h-8"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-mono">
                  {coverLetter}
                </pre>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted/30 rounded-lg p-4">
          <h5 className="font-medium text-foreground mb-2">Next Steps:</h5>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Review and customize the content to match your voice</li>
            <li>Format the resume in your preferred document editor</li>
            <li>Save both documents in PDF format for applications</li>
            <li>Tailor further for specific company requirements</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};