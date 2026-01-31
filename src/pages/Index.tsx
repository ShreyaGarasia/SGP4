import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  Feather,
  FileSearch,
  Bot,
  Sparkles,
  Languages,
  Type,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Shield,
  Zap,
  Star,
  Play,
} from "lucide-react";

const tools = [
  {
    icon: FileSearch,
    name: "Plagiarism Checker",
    description: "Detect copied content and ensure originality",
    path: "/plagiarism-checker",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Bot,
    name: "AI Content Detector",
    description: "Identify AI-generated text with high accuracy",
    path: "/ai-detector",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Type,
    name: "Grammar Checker",
    description: "Perfect your writing with smart suggestions",
    path: "/grammar-checker",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    name: "Paraphrasing Tool",
    description: "Rewrite content in multiple styles",
    path: "/paraphraser",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Languages,
    name: "Translator",
    description: "Translate to 100+ languages instantly",
    path: "/translator",
    color: "from-amber-500 to-yellow-500",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes. Our AI processes your content instantly.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your content is encrypted and never stored. Privacy is our priority.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 100+ languages with native-level accuracy.",
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Join over 5 million users who trust TwinText for their writing needs.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Writer",
    content: "TwinText has transformed my writing workflow. The grammar checker catches errors I would have missed.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Academic Researcher",
    content: "The plagiarism checker is incredibly accurate. Essential tool for maintaining academic integrity.",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    content: "The paraphrasing tool helps me create unique content for different platforms effortlessly.",
    avatar: "ED",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative container-custom py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Star className="w-4 h-4 fill-current" />
              Trusted by 5M+ Writers Worldwide
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Your All-in-One
              <br />
              <span className="gradient-text">Writing Assistant</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up stagger-1">
              Professional AI tools to check plagiarism, detect AI content, fix grammar,
              paraphrase text, and translate to any language. Write better, faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
              <Link to="/signup" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 opacity-60 animate-fade-in stagger-3">
              <span className="text-sm font-medium">Trusted by:</span>
              {["Harvard", "MIT", "Stanford", "Oxford", "Google"].map((name) => (
                <span key={name} className="text-sm font-semibold">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Writing Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create perfect content, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Link
                key={tool.path}
                to={tool.path}
                className="tool-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br ${tool.color}`}>
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {tool.description}
                </p>
                
                <div className="flex items-center text-primary font-medium">
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose TwinText?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine cutting-edge AI technology with intuitive design to give
                you the best writing experience possible.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-lg border border-border animate-float">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-green-500">5M+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Writers Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our users have to say about TwinText
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 border border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-bg" />
            <div className="absolute inset-0 bg-hero-pattern opacity-30" />
            
            <div className="relative px-8 py-16 md:py-24 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Write Better?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join millions of writers who trust TwinText. Start for free today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/signin"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 font-semibold hover:bg-white/10 transition-colors"
                >
                  Sign In
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 opacity-80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
