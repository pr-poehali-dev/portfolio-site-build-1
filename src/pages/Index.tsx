import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Продвижение IT-стартапа',
      category: 'SMM',
      description: 'Рост подписчиков на 300% за 3 месяца через креативный контент',
      image: 'https://cdn.poehali.dev/projects/4e1d4e04-1c60-44c8-9a6e-0e7d32a4e502/files/057b9f88-b73f-488c-96ec-cbc2c88d93e0.jpg',
      metrics: { reach: '+250%', engagement: '+180%', followers: '+300%' }
    },
    {
      id: 2,
      title: 'Ребрендинг fashion-бренда',
      category: 'Branding',
      description: 'Полное обновление визуальной идентичности с увеличением узнаваемости',
      image: 'https://cdn.poehali.dev/projects/4e1d4e04-1c60-44c8-9a6e-0e7d32a4e502/files/1e9195b7-de73-4fef-a836-8605a78350c9.jpg',
      metrics: { recognition: '+400%', sales: '+220%', loyalty: '+150%' }
    },
    {
      id: 3,
      title: 'Аналитика e-commerce',
      category: 'Analytics',
      description: 'Внедрение системы аналитики с повышением конверсии на 120%',
      image: 'https://cdn.poehali.dev/projects/4e1d4e04-1c60-44c8-9a6e-0e7d32a4e502/files/d31df1c4-9fe4-4b20-a732-5ba442fa6524.jpg',
      metrics: { conversion: '+120%', roi: '+280%', traffic: '+190%' }
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Тренды маркетинга 2025: что работает сейчас',
      excerpt: 'Разбираем актуальные стратегии и подходы, которые приносят результат',
      date: '15 ноября 2024',
      readTime: '5 мин',
      tags: ['Тренды', 'Стратегия']
    },
    {
      id: 2,
      title: 'Как создать вирусный контент для соцсетей',
      excerpt: 'Практические советы по созданию контента, который расшарят',
      date: '10 ноября 2024',
      readTime: '7 мин',
      tags: ['SMM', 'Контент']
    },
    {
      id: 3,
      title: 'ROI в digital-рекламе: измеряем правильно',
      excerpt: 'Как считать эффективность рекламных кампаний без ошибок',
      date: '5 ноября 2024',
      readTime: '6 мин',
      tags: ['Аналитика', 'Реклама']
    }
  ];

  const categories = ['all', 'SMM', 'Branding', 'Analytics'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Portfolio</div>
          <div className="flex gap-8 items-center">
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10 blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/50">
              Маркетолог · Стратег · Аналитик
            </Badge>
            <h1 className="text-7xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
              Превращаю бренды в лидеров рынка
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Комплексное продвижение в интернете с фокусом на результат. 
              Работаю с данными, создаю стратегии, которые работают.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-bg hover-scale text-lg px-8 py-6">
                <Icon name="Rocket" className="mr-2" size={20} />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-glow">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Кейсы с измеримыми результатами</p>
          </div>

          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeFilter === cat ? 'default' : 'outline'}
                onClick={() => setActiveFilter(cat)}
                className={activeFilter === cat ? 'gradient-bg' : 'hover-glow'}
              >
                {cat === 'all' ? 'Все' : cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-border bg-card hover-scale hover-glow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/50">{item.category}</Badge>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex gap-4 flex-wrap">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-accent font-semibold">{value}</span>
                        <span className="text-muted-foreground ml-1">{key}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Блог</h2>
            <p className="text-xl text-muted-foreground">Делюсь опытом и инсайтами</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Card 
                key={post.id} 
                className="group border-border bg-card hover-scale hover-glow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover-glow">
              Все статьи
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5 blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-slide-up">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Готовы к росту?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Напишите мне, обсудим ваш проект и найдем решение
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gradient-bg hover-scale text-lg px-8 py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-6">
                <Icon name="Mail" className="mr-2" size={20} />
                Email
              </Button>
              <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-6">
                <Icon name="Linkedin" className="mr-2" size={20} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-4">© 2024 Portfolio. Все права защищены.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Github" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
