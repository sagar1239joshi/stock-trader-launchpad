import { ArrowRight, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import traderHero from '@/assets/trader-hero.jpg';

const Home = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: '285% Average Return',
      description: 'Consistent performance over 5 years',
      value: '+285%'
    },
    {
      icon: DollarSign,
      title: '$2.4M Portfolio Value',
      description: 'Built from $50K initial investment',
      value: '$2.4M'
    },
    {
      icon: Users,
      title: '500+ Students Taught',
      description: 'Successful traders worldwide',
      value: '500+'
    },
    {
      icon: Award,
      title: 'Top 1% Trader',
      description: 'Ranked among elite performers',
      value: 'Top 1%'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Master the{' '}
                  <span className="text-gradient">Stock Market</span>
                  <br />
                  Learn from a Pro
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Transform your financial future with proven trading strategies. 
                  Join hundreds of successful students who've learned from my 5+ years of market expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="btn-hero text-center">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-secondary transition-all duration-300 text-center"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">285%</div>
                  <div className="text-sm text-muted-foreground">Avg Return</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Trading</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={traderHero}
                  alt="Alex Johnson - Professional Stock Trader"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-success-gradient rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Alex Johnson</div>
                        <div className="text-sm text-muted-foreground">Professional Stock Trader</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Who Am I?
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm Alex Johnson, a professional stock trader with over 5 years of experience in the financial markets. 
              Starting with just $50,000, I've built a portfolio worth over $2.4 million through disciplined trading strategies 
              and risk management techniques.
            </p>
            <p className="text-lg text-muted-foreground">
              After achieving consistent success, I decided to share my knowledge and help others achieve financial independence 
              through my comprehensive trading courses. My students have collectively generated millions in profits using the 
              strategies I teach.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-semibold"
            >
              Learn More About My Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Portfolio <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a snapshot of my trading performance and achievements that speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="trading-card card-hover text-center space-y-4"
              >
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {highlight.value}
                  </div>
                  <div className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-hero">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join my comprehensive trading course and learn the strategies that generated 285% average returns. 
              Limited spots available for personalized mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="btn-hero">
                Join the Course
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-secondary transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;