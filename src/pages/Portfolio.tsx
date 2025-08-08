import { TrendingUp, TrendingDown, Calendar, DollarSign, Target, Award } from 'lucide-react';
import tradingCharts from '@/assets/trading-charts.jpg';

const Portfolio = () => {
  const portfolioStats = [
    {
      title: 'Total Portfolio Value',
      value: '$2,423,750',
      change: '+285.4%',
      isPositive: true,
      icon: DollarSign
    },
    {
      title: 'Annual Return (2023)',
      value: '47.2%',
      change: '+8.3% vs S&P 500',
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: 'Win Rate',
      value: '68.5%',
      change: 'Last 12 months',
      isPositive: true,
      icon: Target
    },
    {
      title: 'Max Drawdown',
      value: '12.3%',
      change: 'Risk controlled',
      isPositive: true,
      icon: Award
    }
  ];

  const topHoldings = [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      entryPrice: '$185.50',
      currentPrice: '$875.20',
      return: '+371.8%',
      position: '8.5%',
      entryDate: 'Jan 2023',
      isPositive: true
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      entryPrice: '$245.20',
      currentPrice: '$415.80',
      return: '+69.6%',
      position: '12.3%',
      entryDate: 'Mar 2022',
      isPositive: true
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      entryPrice: '$155.30',
      currentPrice: '$195.40',
      return: '+25.8%',
      position: '15.1%',
      entryDate: 'Sep 2023',
      isPositive: true
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      entryPrice: '$2,180.50',
      currentPrice: '$2,756.30',
      return: '+26.4%',
      position: '10.7%',
      entryDate: 'Jun 2023',
      isPositive: true
    },
    {
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      entryPrice: '$875.20',
      currentPrice: '$695.80',
      return: '-20.5%',
      position: '6.2%',
      entryDate: 'Nov 2023',
      isPositive: false
    },
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices',
      entryPrice: '$68.40',
      currentPrice: '$152.30',
      return: '+122.7%',
      position: '7.8%',
      entryDate: 'Feb 2023',
      isPositive: true
    }
  ];

  const achievements = [
    {
      title: 'Highest Single Trade Return',
      value: '+485%',
      description: 'NVDA Options Play - Q2 2023',
      icon: TrendingUp
    },
    {
      title: 'Longest Winning Streak',
      value: '23 Days',
      description: 'Consecutive profitable trading days',
      icon: Target
    },
    {
      title: 'Best Monthly Performance',
      value: '+47.8%',
      description: 'October 2023 - AI boom trades',
      icon: Award
    },
    {
      title: 'Risk-Adjusted Return',
      value: '2.8 Sharpe',
      description: 'Excellent risk management',
      icon: DollarSign
    }
  ];

  const sectors = [
    { name: 'Technology', percentage: 45, color: 'bg-primary' },
    { name: 'Healthcare', percentage: 20, color: 'bg-accent' },
    { name: 'Finance', percentage: 15, color: 'bg-success' },
    { name: 'Consumer', percentage: 12, color: 'bg-muted' },
    { name: 'Energy', percentage: 8, color: 'bg-secondary' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  My Trading <span className="text-gradient">Portfolio</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Real performance, real results. See exactly how I've built wealth through disciplined trading strategies.
                </p>
              </div>
            </div>
            
            <div className="relative animate-slide-in">
              <img
                src={tradingCharts}
                alt="Trading Charts"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Portfolio Performance</h2>
            <p className="text-lg text-muted-foreground">
              Key metrics that showcase consistent profitability and risk management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="trading-card card-hover text-center space-y-4">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-2">
                    {stat.title}
                  </div>
                  <div className={`text-sm flex items-center justify-center ${
                    stat.isPositive ? 'text-success' : 'text-destructive'
                  }`}>
                    {stat.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Holdings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Top <span className="text-gradient">Holdings</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Current positions and their performance since entry
            </p>
          </div>

          <div className="grid gap-6">
            {topHoldings.map((stock, index) => (
              <div key={index} className="trading-card card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                      <span className="font-bold text-primary-foreground text-lg">
                        {stock.symbol}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{stock.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Entry: {stock.entryDate}
                        </span>
                        <span>{stock.position} of portfolio</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
                    <div className="text-center md:text-right">
                      <div className="text-sm text-muted-foreground">Entry Price</div>
                      <div className="font-semibold">{stock.entryPrice}</div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-sm text-muted-foreground">Current Price</div>
                      <div className="font-semibold">{stock.currentPrice}</div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-sm text-muted-foreground">Return</div>
                      <div className={`font-bold text-lg flex items-center justify-center md:justify-end ${
                        stock.isPositive ? 'text-success' : 'text-destructive'
                      }`}>
                        {stock.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {stock.return}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Allocation */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sector <span className="text-gradient">Allocation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Diversified portfolio across high-growth sectors with technology focus
              </p>
              
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{sector.name}</span>
                      <span className="text-primary font-semibold">{sector.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500`}
                        style={{ width: `${sector.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="trading-card text-center space-y-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {achievement.value}
                    </div>
                    <div className="font-semibold mb-2">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Disclaimer */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> Past performance does not guarantee future results. 
            All trading involves risk and you should never invest more than you can afford to lose. 
            These results are for educational purposes only.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;