import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ResumeUploader } from '@/components/ResumeUploader';
import { JobDescriptionInput } from '@/components/JobDescriptionInput';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { useToast } from '@/hooks/use-toast';
import { Zap } from 'lucide-react';

interface OptimizationResult {
  optimized_resume_text: string;
  cover_letter_text: string;
}

const Index = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState<'extracting' | 'analyzing' | 'optimizing' | 'generating'>('extracting');
  const [results, setResults] = useState<OptimizationResult | null>(null);
  const { toast } = useToast();

  // Simulate the API call with mock data for demo purposes
  const simulateOptimization = async () => {
    setLoadingStage('extracting');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingStage('analyzing');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingStage('optimizing');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingStage('generating');
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      optimized_resume_text: `JOHN SMITH
Senior Software Engineer

Email: john.smith@email.com | Phone: (555) 123-4567
LinkedIn: linkedin.com/in/johnsmith | Portfolio: johnsmith.dev

PROFESSIONAL SUMMARY
Results-driven Senior Software Engineer with 8+ years of experience developing scalable web applications and microservices. Proven expertise in React, Node.js, Python, and cloud technologies. Strong background in agile development, code review, and mentoring junior developers. Passionate about building user-centric solutions and optimizing system performance.

TECHNICAL SKILLS
• Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Redux, Next.js
• Backend: Node.js, Python, Java, Express.js, FastAPI, RESTful APIs
• Databases: PostgreSQL, MongoDB, Redis, MySQL
• Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, Terraform
• Tools & Frameworks: Git, Jest, Webpack, Agile/Scrum

PROFESSIONAL EXPERIENCE

Senior Software Engineer | TechCorp Inc. | 2020 - Present
• Architected and developed 5+ scalable web applications serving 100K+ users
• Led cross-functional team of 6 developers in agile environment
• Implemented microservices architecture reducing system latency by 40%
• Mentored 3 junior developers, improving team productivity by 25%
• Collaborated with product managers and designers on user experience optimization

Software Engineer | StartupXYZ | 2018 - 2020
• Built responsive React applications with TypeScript and modern CSS
• Developed RESTful APIs using Node.js and Express.js
• Integrated payment systems and third-party APIs
• Participated in code reviews and maintained 95%+ test coverage

EDUCATION
Bachelor of Science in Computer Science | University of Technology | 2018

CERTIFICATIONS
• AWS Certified Solutions Architect (2022)
• React Developer Certification (2021)`,

      cover_letter_text: `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Software Engineer position at your company. With over 8 years of experience in full-stack development and a proven track record of building scalable applications, I am excited about the opportunity to contribute to your engineering team.

In my current role as Senior Software Engineer at TechCorp Inc., I have successfully led the development of multiple high-impact projects, including architecting microservices that serve over 100,000 users daily. My expertise in React, Node.js, and cloud technologies aligns perfectly with your requirements. I have consistently delivered projects on time while maintaining high code quality standards and mentoring junior team members.

What particularly excites me about this role is the opportunity to work on innovative solutions that directly impact user experience. Your company's commitment to technological excellence and user-centric design resonates with my professional values and career aspirations. I am eager to bring my skills in modern JavaScript frameworks, API development, and agile methodologies to help drive your product forward.

I am particularly drawn to your emphasis on collaborative development and continuous learning. Throughout my career, I have thrived in environments that encourage knowledge sharing and cross-functional collaboration. My experience leading development teams and working closely with product managers and designers has prepared me to contribute effectively to your dynamic environment.

I would welcome the opportunity to discuss how my technical expertise and leadership experience can contribute to your team's success. Thank you for considering my application. I look forward to hearing from you.

Sincerely,
John Smith`
    };
  };

  const handleOptimize = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please upload your resume and enter a job description.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResults(null);

    try {
      // In a real app, you would call your backend API here:
      // const formData = new FormData();
      // formData.append("resume_file", resumeFile);
      // formData.append("job_description", jobDescription);
      // 
      // const response = await fetch("https://your-api-url.com/optimize-resume", {
      //   method: "POST",
      //   body: formData,
      // });
      // 
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      // 
      // const data = await response.json();

      // For demo purposes, we'll simulate the API call
      const data = await simulateOptimization();
      
      setResults(data);
      
      toast({
        title: "Optimization Complete!",
        description: "Your resume and cover letter have been successfully generated.",
      });
    } catch (error) {
      console.error('Optimization failed:', error);
      toast({
        title: "Optimization Failed",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const canOptimize = resumeFile && jobDescription.trim().length > 50 && !isLoading;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Header />

        <div className="space-y-8">
          {/* Input Section */}
          {!results && (
            <div className="grid md:grid-cols-2 gap-6">
              <ResumeUploader
                onFileUpload={setResumeFile}
                uploadedFile={resumeFile}
                isLoading={isLoading}
              />
              <JobDescriptionInput
                value={jobDescription}
                onChange={setJobDescription}
                isLoading={isLoading}
              />
            </div>
          )}

          {/* Action Button */}
          {!results && !isLoading && (
            <div className="text-center">
              <Button
                onClick={handleOptimize}
                disabled={!canOptimize}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Optimize My Resume
              </Button>
              
              {!canOptimize && (resumeFile || jobDescription) && (
                <p className="text-sm text-muted-foreground mt-2">
                  {!resumeFile && "Please upload your resume. "}
                  {!jobDescription.trim() && "Please enter a job description. "}
                  {jobDescription.trim() && jobDescription.trim().length < 50 && "Job description should be at least 50 characters."}
                </p>
              )}
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <LoadingSpinner stage={loadingStage} />
          )}

          {/* Results */}
          {results && !isLoading && (
            <div className="space-y-6">
              <ResultsDisplay
                optimizedResume={results.optimized_resume_text}
                coverLetter={results.cover_letter_text}
              />
              
              {/* Start Over Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setResults(null);
                    setResumeFile(null);
                    setJobDescription('');
                  }}
                  className="px-6"
                >
                  Optimize Another Resume
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Resumate - Built with AI to help you land your dream job
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
