import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Sparkles, Copy, RefreshCw, Check, X, Loader2, ArrowRight } from "lucide-react";

const modes = [
  { id: "standard", name: "Standard", description: "Clear and natural rewrite" },
  { id: "fluent", name: "Fluent", description: "Improved flow and readability" },
  { id: "formal", name: "Formal", description: "Professional and academic tone" },
  { id: "simple", name: "Simple", description: "Easy to understand language" },
  { id: "creative", name: "Creative", description: "Unique and engaging style" },
];

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedMode, setSelectedMode] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleParaphrase = () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate paraphrasing
    setTimeout(() => {
      const sampleOutputs: Record<string, string> = {
        standard: "Your text has been rewritten in a clear and natural way while maintaining the original meaning.",
        fluent: "The content flows more smoothly now, with improved transitions and better readability throughout the passage.",
        formal: "The text has been reformulated in a professional manner, suitable for academic or business contexts.",
        simple: "Your text is now easier to understand, using simpler words and shorter sentences.",
        creative: "A fresh and engaging version of your text, with unique phrasing and creative expression.",
      };
      
      setOutputText(sampleOutputs[selectedMode] || sampleOutputs.standard);
      setIsProcessing(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6">
              <Sparkles className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Paraphrasing Tool
            </h1>
            <p className="text-lg text-muted-foreground">
              Rewrite your content in different styles while preserving the original
              meaning. Choose from multiple modes for the perfect output.
            </p>
          </div>

          {/* Mode Selector */}
          <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
            <div className="flex flex-wrap gap-3 justify-center">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    selectedMode === mode.id
                      ? 'gradient-bg text-primary-foreground'
                      : 'bg-card border border-border hover:border-primary/30'
                  }`}
                >
                  {mode.name}
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              {modes.find(m => m.id === selectedMode)?.description}
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm animate-slide-up">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Original Text</label>
                  <span className="text-sm text-muted-foreground">
                    {inputText.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter or paste your text here to paraphrase..."
                  className="input-field min-h-[300px] resize-y"
                />

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleParaphrase}
                    disabled={!inputText.trim() || isProcessing}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Rewriting...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Paraphrase
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleClear}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    Clear
                  </button>
                </div>
              </div>

              {/* Output */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm animate-slide-up stagger-1">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Paraphrased Text</label>
                  {outputText && (
                    <span className="text-sm text-muted-foreground">
                      {outputText.split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>
                
                <div className="min-h-[300px] p-4 rounded-lg bg-secondary/50 border border-border">
                  {isProcessing ? (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary mb-3" />
                        <p className="text-muted-foreground">Generating paraphrase...</p>
                      </div>
                    </div>
                  ) : outputText ? (
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">{outputText}</p>
                  ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                      <p>Your paraphrased text will appear here...</p>
                    </div>
                  )}
                </div>

                {outputText && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={handleCopy}
                      className="btn-secondary flex-1 flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          Copy Text
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={handleParaphrase}
                      disabled={isProcessing}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <RefreshCw className="w-5 h-5" />
                      Rephrase
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Arrow for visual flow */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Paraphraser;
