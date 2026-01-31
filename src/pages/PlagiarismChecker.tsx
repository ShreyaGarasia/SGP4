import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FileSearch, Upload, Search, AlertTriangle, CheckCircle, X, Loader2 } from "lucide-react";

interface Result {
  percentage: number;
  sources: { url: string; matchPercentage: number; text: string }[];
}

const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleCheck = () => {
    if (!text.trim()) return;
    
    setIsChecking(true);
    
    // Simulate plagiarism check
    setTimeout(() => {
      setResult({
        percentage: Math.floor(Math.random() * 30),
        sources: [
          {
            url: "https://example.com/article-1",
            matchPercentage: 15,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
            url: "https://wikipedia.org/sample",
            matchPercentage: 8,
            text: "Sed do eiusmod tempor incididunt ut labore et dolore...",
          },
        ],
      });
      setIsChecking(false);
    }, 2500);
  };

  const handleClear = () => {
    setText("");
    setResult(null);
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 mb-6">
              <FileSearch className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Plagiarism Checker
            </h1>
            <p className="text-lg text-muted-foreground">
              Check your content for plagiarism with our advanced AI-powered scanner.
              Get detailed reports on potential matches instantly.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm animate-fade-in">
              {/* Text Input */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="font-medium">Enter your text</label>
                  <span className="text-sm text-muted-foreground">
                    {text.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste or type your text here to check for plagiarism..."
                  className="input-field min-h-[250px] resize-y"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCheck}
                  disabled={!text.trim() || isChecking}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isChecking ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Check for Plagiarism
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleClear}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Clear
                </button>
                
                <label className="btn-secondary flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-5 h-5" />
                  Upload File
                  <input type="file" className="hidden" accept=".txt,.doc,.docx,.pdf" />
                </label>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-6 animate-slide-up">
                {/* Score Card */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-6">Plagiarism Report</h3>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Circular Progress */}
                    <div className="relative w-40 h-40">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          className="fill-none stroke-secondary"
                          strokeWidth="12"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          className={`fill-none ${result.percentage > 20 ? 'stroke-red-500' : 'stroke-green-500'}`}
                          strokeWidth="12"
                          strokeLinecap="round"
                          strokeDasharray={`${(result.percentage / 100) * 440} 440`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-4xl font-bold ${result.percentage > 20 ? 'text-red-500' : 'text-green-500'}`}>
                          {result.percentage}%
                        </span>
                        <span className="text-sm text-muted-foreground">Plagiarized</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="flex-1 text-center md:text-left">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                        result.percentage > 20 
                          ? 'bg-red-500/10 text-red-500' 
                          : 'bg-green-500/10 text-green-500'
                      }`}>
                        {result.percentage > 20 ? (
                          <>
                            <AlertTriangle className="w-5 h-5" />
                            High Plagiarism Detected
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            Content Appears Original
                          </>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground">
                        Your content has been scanned against billions of web pages and
                        academic papers. {result.percentage > 20 
                          ? 'We found significant matches that need attention.'
                          : 'Only minor similarities were found.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Source Matches */}
                {result.sources.length > 0 && (
                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                    <h3 className="text-lg font-semibold mb-6">Source Matches</h3>
                    
                    <div className="space-y-4">
                      {result.sources.map((source, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-secondary/50 border border-border"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline font-medium truncate max-w-[70%]"
                            >
                              {source.url}
                            </a>
                            <span className="text-sm font-medium text-red-500">
                              {source.matchPercentage}% match
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            "{source.text}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlagiarismChecker;
