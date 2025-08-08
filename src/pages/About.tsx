import { GraduationCap, TrendingUp, Target, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Started Trading Journey',
      description: 'Began with $50,000 savings and a passion for financial markets'
    },
    {
      year: '2019',
      title: 'First Profitable Year',
      description: 'Achieved 45% returns and refined trading strategies'
    },
    {
      year: '2020',
      title: 'Breakthrough Performance',
      description: 'Navigated market volatility with 180% returns during pandemic'
    },
    {
      year: '2021',
      title: 'Millionaire Status',
      description: 'Portfolio exceeded $1M milestone through disciplined trading'
    },
    {
      year: '2022',
      title: 'Started Teaching',
      description: 'Launched first trading course with 50 students'
    },
    {
      year: '2023',
      title: 'Expanded Education',
      description: 'Grew to 500+ students with proven track record'
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Consistent Performer',
      description: 'Maintained positive returns for 5 consecutive years'
    },
    {
      icon: Award,
      title: 'Top 1% Trader',
      description: 'Ranked among elite performers in multiple platforms'
    },
    {
      icon: Users,
      title: 'Successful Mentor',
      description: '500+ students with combined profits over $10M'
    },
    {
      icon: BookOpen,
      title: 'Market Expert',
      description: 'Specialized in growth stocks and options strategies'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Alex Johnson</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From finance student to professional trader and educator
            </p>
          </div>
        </div>
      </section>

      {/* Education Background */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Educational Background</h2>
              
              <div className="space-y-6">
                <div className="trading-card">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">MBA in Finance</h3>
                      <p className="text-primary">Wharton School, University of Pennsylvania</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Specialized in Investment Management and Financial Analysis. 
                        Graduated Magna Cum Laude with focus on quantitative trading strategies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="trading-card">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Bachelor's in Economics</h3>
                      <p className="text-primary">Stanford University</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Strong foundation in microeconomics, macroeconomics, and statistical analysis. 
                        Thesis on behavioral finance and market psychology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Certifications & Licenses</h3>
              <div className="space-y-4">
                {[
                  'Series 7 - General Securities Representative',
                  'Series 63 - Uniform Securities Agent State Law',
                  'CFA Level III Candidate',
                  'Options Trading Specialist Certification'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Journey */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              My Trading <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From curious student to successful trader and educator - here are the key milestones that shaped my career.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full items-center justify-center relative -left-3.5">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 trading-card card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-2">
                        <div className="text-primary font-bold text-lg">{milestone.year}</div>
                        <h3 className="font-semibold text-xl">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Key Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="trading-card card-hover text-center space-y-4">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Trading Philosophy</h2>
            
            <div className="trading-card text-center space-y-6">
              <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Target className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <blockquote className="text-2xl font-medium text-foreground">
                "Successful trading isn't about predicting the future – it's about managing risk, 
                staying disciplined, and having a systematic approach that you can execute consistently."
              </blockquote>
              
              <div className="text-primary font-semibold">- Alex Johnson</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="space-y-3 text-center">
                <h3 className="font-semibold text-lg">Risk Management</h3>
                <p className="text-muted-foreground">Never risk more than 2% of capital on a single trade</p>
              </div>
              <div className="space-y-3 text-center">
                <h3 className="font-semibold text-lg">Systematic Approach</h3>
                <p className="text-muted-foreground">Data-driven decisions based on proven strategies</p>
              </div>
              <div className="space-y-3 text-center">
                <h3 className="font-semibold text-lg">Continuous Learning</h3>
                <p className="text-muted-foreground">Adapt and evolve with changing market conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;