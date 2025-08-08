import { Check, Star, Clock, Users, BookOpen, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseFeatures = [
    'Complete Trading Strategy Framework',
    'Risk Management Techniques',
    'Technical Analysis Mastery',
    'Options Trading Strategies',
    'Psychology of Trading',
    'Live Trading Sessions',
    'Personal Mentorship (1-on-1)',
    'Private Discord Community',
    'Trading Journal Templates',
    'Lifetime Course Updates'
  ];

  const modules = [
    {
      week: 'Week 1-2',
      title: 'Trading Fundamentals',
      topics: [
        'Market basics and terminology',
        'Setting up your trading account',
        'Understanding financial statements',
        'Economic indicators and market drivers'
      ]
    },
    {
      week: 'Week 3-4',
      title: 'Technical Analysis',
      topics: [
        'Chart patterns and formations',
        'Support and resistance levels',
        'Moving averages and indicators',
        'Candlestick analysis'
      ]
    },
    {
      week: 'Week 5-6',
      title: 'Trading Strategies',
      topics: [
        'Swing trading techniques',
        'Day trading setups',
        'Growth stock identification',
        'Entry and exit strategies'
      ]
    },
    {
      week: 'Week 7-8',
      title: 'Risk Management',
      topics: [
        'Position sizing calculations',
        'Stop-loss strategies',
        'Portfolio diversification',
        'Managing winning and losing trades'
      ]
    },
    {
      week: 'Week 9-10',
      title: 'Options Trading',
      topics: [
        'Options basics and Greeks',
        'Covered calls and protective puts',
        'Credit and debit spreads',
        'Advanced options strategies'
      ]
    },
    {
      week: 'Week 11-12',
      title: 'Advanced Concepts',
      topics: [
        'Market psychology and sentiment',
        'Earnings plays and catalysts',
        'Sector rotation strategies',
        'Building your trading plan'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      content: "Alex's course transformed my approach to trading. I went from losing money consistently to generating a 45% return in my first year. The mentorship was invaluable.",
      rating: 5,
      profit: '+$67,000'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Manager',
      content: "The structured approach and risk management techniques saved me from major losses. I'm now trading with confidence and seeing consistent profits.",
      rating: 5,
      profit: '+$23,400'
    },
    {
      name: 'Jennifer Park',
      role: 'Business Owner',
      content: "Best investment I've made. The course paid for itself within the first month. Alex's strategies work and he genuinely cares about student success.",
      rating: 5,
      profit: '+$89,500'
    }
  ];

  const faqs = [
    {
      question: 'What if I have no trading experience?',
      answer: 'Perfect! This course is designed for beginners. We start with the absolute basics and gradually build up to advanced strategies. Many of my most successful students started with zero experience.'
    },
    {
      question: 'How much money do I need to start trading?',
      answer: 'I recommend starting with at least $5,000-$10,000 to properly implement the strategies. However, you can begin learning with a paper trading account while building your capital.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'While everyone progresses differently, most students start seeing consistent profits within 3-6 months of completing the course and implementing the strategies.'
    },
    {
      question: 'Do you guarantee profits?',
      answer: 'No one can guarantee profits in trading. However, I provide proven strategies and risk management techniques that have worked for hundreds of my students.'
    },
    {
      question: 'What support do I get after the course?',
      answer: 'You get lifetime access to course updates, our private Discord community, and monthly group coaching calls. Plus, all students receive priority support.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, I offer a 30-day money-back guarantee. If you\'re not satisfied with the course content, you can request a full refund within 30 days.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Master Stock Trading <span className="text-gradient">Like a Pro</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join 500+ successful students who've learned my proven strategies. 
                Transform from beginner to profitable trader in 12 weeks.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$10M+</div>
                <div className="text-sm text-muted-foreground">Student Profits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Complete Trading Mastery Course
                </h2>
                <p className="text-lg text-muted-foreground">
                  A comprehensive 12-week program that takes you from beginner to advanced trader 
                  with proven strategies, personal mentorship, and ongoing support.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-semibold">12 Weeks</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-semibold">1-on-1</div>
                  <div className="text-sm text-muted-foreground">Mentorship</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-semibold">50+ Hours</div>
                  <div className="text-sm text-muted-foreground">Content</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                    <Download className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-semibold">Lifetime</div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </div>
              </div>
            </div>

            <div className="trading-card space-y-6">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">$2,997</div>
                <div className="text-lg text-muted-foreground line-through">$4,997</div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Limited Time Offer
                </div>
              </div>

              <div className="space-y-3">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-success text-white p-1 rounded-full">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6">
                <Link to="/contact" className="btn-hero w-full text-center block">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <div className="text-center text-sm text-muted-foreground">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Course <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning path that builds expertise progressively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="trading-card card-hover space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                    <span className="font-bold text-primary-foreground text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold">{module.week}</div>
                    <div className="font-semibold">{module.title}</div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real results from real students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="trading-card card-hover space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                <div className="space-y-2">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-success font-bold">{testimonial.profit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="trading-card">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the ranks of successful traders. Limited spots available for this cohort.
            </p>
            
            <div className="trading-card max-w-md mx-auto">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$2,997</div>
                  <div className="text-sm text-muted-foreground">One-time payment</div>
                </div>
                
                <Link to="/contact" className="btn-hero w-full text-center block">
                  Secure Your Spot
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                
                <div className="text-xs text-muted-foreground text-center">
                  ✓ 30-day money-back guarantee<br />
                  ✓ Lifetime access and updates<br />
                  ✓ Personal mentorship included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;