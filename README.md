/**
 * Project: Resumate (Project Siddhi)
 * ----------------------------------
 * 
 * Overview:
 * This is an AI-powered resume optimization web application
 * designed to help job seekers tailor their existing resumes 
 * and generate matching cover letters for any job description.
 *
 * Problem Statement:
 * Many job seekers struggle to optimize resumes so they pass
 * Applicant Tracking Systems (ATS) and stand out to recruiters.
 * Manually customizing resumes and cover letters for each job is time-consuming.
 * We want to automate and simplify this task by leveraging AI.
 *
 * What We Are Solving:
 * - Upload an existing resume file (PDF or DOCX).
 * - Input a job description text.
 * - Use AI to extract relevant keywords and skills from the job description.
 * - Re-write and optimize the resume text to align with that job description.
 * - Generate a tailored cover letter personalized for the job.
 * - Provide both optimized resume and cover letter as downloadable files (DOCX or PDF).
 *
 * This delivers a one-shot, stateless, no-login lightweight tool
 * with quick turnaround for users, focusing purely on resume & cover letter optimization.
 *
 * Tech Stack Used:
 * 
 * Frontend:
 *  - Framework: React + Next.js (latest)
 *  - Styling: Tailwind CSS for responsive, modern UI
 *  - Components: Custom file uploader, text input for job description,
 *                results display with download buttons, loading spinner, and error banner.
 *  - State management via React useState hook.
 *  - API calls made via fetch with multipart/form-data
 *  - Deployed on Vercel (or Netlify)
 * 
 * Backend:
 *  - Language: Python 3.9+
 *  - Framework: FastAPI for async, lightweight REST API
 *  - File parsing:
 *      * PyMuPDF (fitz) to extract text from PDF resumes
 *      * python-docx to extract and write DOCX files
 *  - AI Integration:
 *      * Google Gemini Pro API (preferred) or fallback OpenAI GPT-4
 *      * Performs 3-step AI workflow:
 *          1. Extract ATS keywords from job description
 *          2. Optimize original resume with keywords integrated
 *          3. Generate cover letter based on optimized resume and job description
 *  - Endpoint:
 *      POST /optimize-resume
 *      - Accepts multipart form with resume file and job description string
 *      - Returns optimized resume and cover letter as downloadable files
 *        (usually DOCX/PDF)
 *  - Deployed on Render, Railway, or similar server
 * 
 * Current State & What We Are Doing:
 * - Frontend scaffold is complete:
 *   * File upload input, Job description textarea, submit button, loading & error states.
 *   * Currently displays returned optimized text on screen.
 * - Backend logic skeleton ready to:
 *   * Parse files, send AI prompts, receive optimized text.
 *   * Generate downloadable DOCX/PDF files from AI results.
 *   * Return both optimized resume and cover letter files.
 * - Recent enhancement focus:
 *   * Enabling backend to return downloadable files instead of text outputs.
 *   * Frontend to present clear “Download Resume” and “Download Cover Letter” buttons.
 *   * Optional: Return ZIP with both documents for single-click download.
 *
 * User Journey:
 * 1. User uploads resume PDF/DOCX.
 * 2. User pastes job description text.
 * 3. Client sends these inputs to backend API.
 * 4. Backend extracts and optimizes resume via AI.
 * 5. Backend generates optimized resume and cover letter files dynamically.
 * 6. Backend responds with downloadable files or ZIP URL.
 * 7. Frontend shows download buttons for both files.
 * 8. User downloads fully AI-optimized resume and cover letter ready to send out.
 *
 * Constraints:
 * - No login/authentication or user account system.
 * - No history/file storage or analytics.
 * - Entire workflow is one-shot and stateless.
 * - Must remain lightweight, fast, and easy to deploy.
 *
 * Development Tools:
 *  - Node.js, npm/yarn for frontend dependencies.
 *  - Python virtual environment for backend dependencies.
 *  - GitHub repos separated for frontend and backend.
 *  - Environment variables (.env) to safely handle AI API keys.
 *
 * This prompt helps align Copilot or any AI assistant to generate code,
 * architectural guides, and helpers consistent with the MVP goals.
 */
