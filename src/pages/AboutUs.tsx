import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  Feather,
  Target,
  Heart,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const impactStats = [
  {
    number: "5M+",
    label: "Active Users",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "150+",
    label: "Countries",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "100%",
    label: "Secure & Private",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "100+",
    label: "Languages Supported",
    icon: Sparkles,
    color: "from-orange-500 to-red-500",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "AI visionary with 10+ years in tech",
    avatar: "SJ",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    bio: "UX expert and product innovator",
    avatar: "MC",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Davis",
    role: "Lead Engineer",
    bio: "Full-stack developer and AI researcher",
    avatar: "ED",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "James Wilson",
    role: "Head of Design",
    bio: "Creative designer and brand strategist",
    avatar: "JW",
    color: "from-orange-500 to-red-500",
  },
];

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "We're obsessed with precision. Every feature is rigorously tested to deliver results you can trust.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Your needs drive everything. We listen to feedback and continuously improve our platform.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your content is sacred. End-to-end encryption ensures your data stays completely private.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We push boundaries with cutting-edge AI technology that delivers real-world results.",
    color: "from-yellow-500 to-amber-500",
  },
];

const milestones = [
  {
    year: "2020",
    event: "TwinText founded with a vision to democratize AI-powered writing",
    icon: "🚀",
  },
  {
    year: "2021",
    event: "Reached 100,000 users and launched mobile app",
    icon: "📱",
  },
  {
    year: "2022",
    event: "Expanded to 50+ languages and hit 500K users",
    icon: "🌍",
  },
  {
    year: "2023",
    event: "Launched enterprise solutions and reached 1M+ users",
    icon: "🏢",
  },
  {
    year: "2024",
    event: "Hit 5M users with presence in 150+ countries",
    icon: "📈",
  },
  {
    year: "2025",
    event: "Advanced AI features and global partnerships",
    icon: "✨",
  },
];

export default function AboutUs() {
  return (
    <Layout>
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-slide-up hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">
            <Lightbulb className="w-4 h-4 text-primary animate-bounce" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up transition-all duration-500" style={{ animationDelay: "0.1s" }}>
            Empowering Clear,<br />
            <span className="gradient-text animate-pulse-slow">Confident Writing</span> with AI
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            At TwinText, we believe everyone deserves access to powerful AI tools that make them a better writer. We're on a mission to transform how the world writes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up transition-all duration-500" style={{ animationDelay: "0.3s" }}>
            <Link to="/signup" className="btn-primary px-8 py-4 text-lg flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ Impact Highlights */}
      <section className="section-padding bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="tool-card group hover-lift overflow-hidden relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${stat.color}`} />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <p className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {stat.number}
                  </p>

                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3️⃣ Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Text */}
            <div className="order-2 lg:order-1 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="gradient-text animate-pulse-slow">Mission & Vision</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <Feather className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide accessible, accurate, and innovative AI-powered writing tools that empower millions to communicate with clarity and confidence.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-accent group-hover:scale-110 group-hover:animate-spin transition-transform duration-300" />
                    Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where language barriers don't exist, where every person has access to world-class writing tools, and where AI enhances rather than replaces human creativity.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="order-1 lg:order-2 relative h-96 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central animated circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl animate-pulse-slow" />
                    <div className="absolute inset-8 rounded-full border-2 border-primary/30 animate-float" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full gradient-bg flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: "-1s" }}>
                        <Feather className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute bottom-20 right-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Core Values */}
      <section className="section-padding bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and product we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="tool-card group hover-lift overflow-hidden relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${value.color}`} />

                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5️⃣ Timeline / Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup vision to global impact
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary md:transform md:-translate-x-1/2" />

              {/* Timeline items */}
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`mb-12 md:mb-16 relative animate-slide-up ${
                    index % 2 === 0 ? "md:ml-auto md:w-1/2 md:pr-12" : "md:w-1/2 md:pl-12 md:text-right"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-auto md:right-auto w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl shadow-lg md:transform md:-translate-x-1/2 md:translate-y-0">
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <div className="ml-24 md:ml-0 bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 group">
                    <p className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {milestone.year}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Team Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented individuals united by a passion for writing and innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="tool-card group hover-lift overflow-hidden relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${member.color}`} />

                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {member.avatar}
                  </div>

                  <h3 className="text-lg font-bold text-center mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-sm text-primary font-semibold text-center mb-3">
                    {member.role}
                  </p>

                  <p className="text-sm text-muted-foreground text-center">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring CTA */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 text-center hover:border-primary/50 transition-all duration-300 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              We're Hiring!
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Join our talented team and help us revolutionize the future of writing. We're looking for passionate people who share our vision.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3 hover:shadow-xl transition-all duration-300"
            >
              View Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7️⃣ Final CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Ready to Experience TwinText?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Join millions of writers who are transforming how they communicate with TwinText's AI-powered writing tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/signup"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5M+</p>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">150+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Secure</p>
            </div>
          </div>
        </div>
      </section>    </Layout>
  );
}