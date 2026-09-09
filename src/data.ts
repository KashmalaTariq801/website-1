import { BlogPost, HowStep, Service, WhyChooseItem } from './types';

export const services: Service[] = [
  {
    title: 'Card Design & Printing',
    description:
      'Professional card design and high-quality printing for businesses, organizations, and individuals.',
    icon: '🪪',
  },
  {
    title: 'Brochure Printing',
    description:
      'Attractive and professional brochures for businesses, promotions, products, and services.',
    icon: '📘',
  },
  {
    title: 'Business Card Printing',
    description:
      'High-quality business cards with professional designs that help businesses make a strong first impression.',
    icon: '💼',
  },
  {
    title: 'Banner Printing',
    description:
      'Durable and eye-catching banners for businesses, advertisements, events, promotions, and campaigns.',
    icon: '🎯',
  },
  {
    title: 'Flyer Printing',
    description:
      'Affordable and attractive flyers for marketing, promotions, announcements, and events.',
    icon: '📰',
  },
  {
    title: 'Poster Printing',
    description:
      'High-quality posters suitable for advertising, events, educational purposes, and promotions.',
    icon: '📜',
  },
  {
    title: 'Invitation Card Printing',
    description:
      'Beautiful invitation cards for weddings, parties, birthdays, ceremonies, and special occasions.',
    icon: '💌',
  },
];

export const reasons: WhyChooseItem[] = [
  {
    title: '5+ Years Experience',
    description: 'Trusted by local businesses and individuals across Umerzai with consistent results.',
    icon: '🏆',
  },
  {
    title: 'High-Quality Printing',
    description: 'We focus on clean output, durable materials, and sharp finishing for every order.',
    icon: '🖨️',
  },
  {
    title: 'Professional Designs',
    description: 'Our design approach helps your prints look polished, clear, and effective.',
    icon: '✨',
  },
  {
    title: 'Reliable Service',
    description: 'Clear communication, timely support, and dependable service from start to finish.',
    icon: '🤝',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We value long-term relationships and make sure you are satisfied with the final result.',
    icon: '😊',
  },
];

export const howItWorks: HowStep[] = [
  {
    title: 'Contact Us',
    description: 'Send us your requirements through WhatsApp or phone.',
  },
  {
    title: 'Choose Your Design',
    description: 'Provide your design or ask us to create a professional design.',
  },
  {
    title: 'Approve Your Order',
    description: 'Review and approve the final design.',
  },
  {
    title: 'Get Your Printing',
    description: 'We print your order with high-quality materials and professional finishing.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Tips for Designing an Effective Business Card',
    excerpt:
      'Learn the essentials of business card design, layout balance, and impactful branding for local growth.',
    date: 'April 12, 2026',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    slug: '5-tips-for-designing-an-effective-business-card',
  },
  {
    id: 2,
    title: 'Why Professional Printing Matters for Your Business',
    excerpt:
      'Professional printing creates a lasting impression and helps your brand communicate quality with confidence.',
    date: 'April 18, 2026',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    slug: 'why-professional-printing-matters-for-your-business',
  },
  {
    id: 3,
    title: 'How to Choose the Right Banner for Your Business',
    excerpt:
      'From size selection to design readability, these tips help you choose the right banner for visibility.',
    date: 'May 02, 2026',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    slug: 'how-to-choose-the-right-banner-for-your-business',
  },
  {
    id: 4,
    title: 'Flyers vs Posters: Which Is Better for Advertising?',
    excerpt:
      'Compare flyers and posters to understand which marketing format is better for your goals and audience.',
    date: 'May 15, 2026',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    slug: 'flyers-vs-posters-which-is-better-for-advertising',
  },
  {
    id: 5,
    title: 'How Professional Brochures Can Promote Your Business',
    excerpt:
      'Printed brochures remain an effective way to present your services, values, and offerings in a memorable format.',
    date: 'May 26, 2026',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    slug: 'how-professional-brochures-can-promote-your-business',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];
