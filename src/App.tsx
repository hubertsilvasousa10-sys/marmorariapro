import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  LayoutDashboard, 
  MessageSquare, 
  Smartphone, 
  Users, 
  TrendingUp,
  TrendingDown,
  AlertCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ChevronDown,
  MapPin,
  Search,
  Navigation,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#991B1B] rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-black' : 'text-black'}`}>Marmoraria Pro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problemas" className="text-sm font-medium hover:text-[#991B1B] transition-colors">Problemas</a>
          <a href="#para-quem" className="text-sm font-medium hover:text-[#991B1B] transition-colors">Para quem é</a>
          <a href="#funcionalidades" className="text-sm font-medium hover:text-[#991B1B] transition-colors">Funcionalidades</a>
          <a href="#depoimentos" className="text-sm font-medium hover:text-[#991B1B] transition-colors">Depoimentos</a>
          <a href="#faq" className="text-sm font-medium hover:text-[#991B1B] transition-colors">FAQ</a>
          <a 
            href="https://wa.me/5511957217883?text=Quero%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#991B1B] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#7F1D1D] transition-all"
          >
            Começar Teste Grátis Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#problemas" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Problemas</a>
            <a href="#para-quem" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Para quem é</a>
            <a href="#funcionalidades" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Funcionalidades</a>
            <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Depoimentos</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">FAQ</a>
            <a 
              href="https://wa.me/5511957217883?text=Quero%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Começar Teste Grátis Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5511957217883?text=Quero%20saber%20mais"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    id="whatsapp-cta"
  >
    <MessageSquare size={28} fill="currentColor" />
  </motion.a>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#991B1B] transition-colors group"
      >
        <span className="text-lg font-bold pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-[#991B1B] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="font-sans">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden marble-bg-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-black">
              Pare de perder dinheiro por falta de controle. <span className="text-[#991B1B]">Orçamentos em minutos</span>, gestão em um clique.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              O Marmoraria Pro é o sistema mais fácil e intuitivo para transformar sua marmoraria em uma máquina de vendas. Sem planilhas confusas, sem erros de cálculo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5511957217883?text=Quero%20saber%20mais"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Começar Teste Grátis Agora <ArrowRight size={20} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>+500 marmorarias já evoluíram</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Software Mockup" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#991B1B]/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Decorative marble element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 marble-bg-dark rounded-2xl -z-10 opacity-20 blur-sm"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#991B1B] rounded-full -z-10 opacity-10 blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="problemas" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Sua marmoraria está assim hoje?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Sem organização, pedidos se perdem, o atendimento fica lento e oportunidades acabam escapando no dia a dia.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Before - Reality Now */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-red-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <AlertCircle size={120} className="text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <span className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <TrendingDown className="text-red-600" size={20} />
                </span>
                Você está assim agora
              </h3>

              <div className="space-y-6 mb-10">
                {[
                  "Pedidos anotados em papéis que somem",
                  "Atrasos constantes por falta de cronograma",
                  "Dificuldade para saber o lucro real de cada obra",
                  "Vendas perdidas por demora no orçamento"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-red-50 p-1 rounded-full">
                      <AlertCircle size={14} className="text-red-500" />
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* Visual Graph Representation - Confusing */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-48 flex flex-col justify-end">
                <div className="flex items-end gap-2 h-full">
                  {[40, 70, 30, 85, 20, 55, 35, 60].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-red-200 rounded-t-lg opacity-60"
                    />
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Desempenho Irregular</span>
                  <span className="text-red-600 font-bold text-xs">Baixa Eficiência</span>
                </div>
              </div>
            </motion.div>

            {/* After - With Software */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 size={120} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </span>
                Como sua marmoraria pode ficar
              </h3>

              <div className="space-y-6 mb-10">
                {[
                  "Controle total de pedidos em um só lugar",
                  "Cronograma de produção e instalação claro",
                  "Orçamentos profissionais feitos em minutos",
                  "Visão clara do financeiro e lucro real"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/10 p-1 rounded-full">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* Visual Graph Representation - Growing */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-48 flex flex-col justify-end">
                <div className="flex items-end gap-2 h-full">
                  {[20, 30, 45, 55, 65, 80, 90, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-white rounded-t-lg opacity-80"
                    />
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Crescimento Constante</span>
                  <span className="text-white font-bold text-xs">Alta Produtividade</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
              Com mais controle sobre orçamentos, pedidos e produção, sua marmoraria trabalha melhor, atende mais rápido e aproveita muito mais oportunidades de venda.
            </p>
            <div className="w-20 h-1.5 bg-[#991B1B] mx-auto rounded-full mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-24 marble-bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Tudo o que você precisa em uma <span className="text-red-400">única tela.</span>
            </motion.h2>
            
            <div className="space-y-8">
              {[
                { icon: <Clock />, title: "Orçamentos Rápidos", desc: "Gere orçamentos profissionais em menos de 2 minutos com cálculos automáticos." },
                { icon: <Users />, title: "Gestão de Clientes", desc: "Cadastro completo com histórico de pedidos, medidas e preferências." },
                { icon: <DollarSign />, title: "Controle Financeiro", desc: "Saiba exatamente quanto está ganhando em cada projeto com DRE automático." },
                { icon: <Smartphone />, title: "Fácil de Mexer", desc: "Interface pensada para quem não tem tempo a perder com sistemas complexos." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2340" 
                alt="Dashboard Preview" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#991B1B] p-4 sm:p-6 rounded-2xl shadow-xl border border-white/10 z-20">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-red-200 uppercase tracking-wider font-bold">Produtividade</p>
                  <p className="text-lg sm:text-2xl font-bold text-white">+45% de agilidade</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="para-quem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Para quem é o Marmoraria Pro?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Não importa o tamanho da sua empresa, temos a solução ideal para o seu momento.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pequenas Marmorarias",
                desc: "Para quem está começando e quer organizar os primeiros pedidos sem complicação.",
                icon: <Smartphone className="text-[#991B1B]" size={32} />
              },
              {
                title: "Marmorarias em Crescimento",
                desc: "Para quem já tem volume e precisa de controle financeiro e agilidade nos orçamentos.",
                icon: <TrendingUp className="text-[#991B1B]" size={32} />
              },
              {
                title: "Grandes Operações",
                desc: "Para quem busca gestão profissional, controle de equipe e máxima lucratividade.",
                icon: <LayoutDashboard className="text-[#991B1B]" size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#991B1B]/10 text-[#991B1B] rounded-full text-sm font-bold mb-6">O PULO DO GATO</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Feito para ser simples. <br />Feito para ser um adianto.</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Diferente de sistemas genéricos, o Marmoraria Pro foi desenhado para o fluxo real de uma marmoraria. É tão fácil que sua equipe começa a usar no primeiro dia, sem necessidade de treinamentos longos.
            </p>

            <div className="mb-16 relative group/slider max-w-6xl mx-auto">
              {/* Navigation Buttons */}
              <button 
                onClick={(e) => {
                  const container = e.currentTarget.parentElement?.querySelector('.scroll-container');
                  container?.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center border border-gray-100"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} className="text-[#991B1B]" />
              </button>
              
              <button 
                onClick={(e) => {
                  const container = e.currentTarget.parentElement?.querySelector('.scroll-container');
                  container?.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center border border-gray-100"
                aria-label="Próximo"
              >
                <ChevronRight size={24} className="text-[#991B1B]" />
              </button>

              <div className="scroll-container flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth cursor-grab active:cursor-grabbing">
                {[
                  { src: "https://imgur.com/X0LwMSC.jpg", label: "Dashboard Intuitivo" },
                  { src: "https://imgur.com/8dWoTA4.jpg", label: "Gestão de Orçamentos" },
                  { src: "https://imgur.com/ixw6MgB.jpg", label: "Controle de Produção" }
                ].map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="min-w-[92%] md:min-w-[85%] lg:min-w-[100%] snap-center"
                  >
                    <div 
                      className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white cursor-zoom-in group/img"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <img 
                        src={img.src} 
                        alt={img.label} 
                        className="w-full h-auto object-contain block transition-transform duration-500 group-hover/img:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                        <ZoomIn className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" size={48} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-left">
                        <p className="text-white font-bold text-lg md:text-xl">{img.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center gap-3 mt-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-gray-200 transition-colors group-hover/slider:bg-gray-300"></div>
                ))}
              </div>
              
              <p className="md:hidden text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest">← Deslize para ver mais →</p>
            </div>

            <a 
              href="https://wa.me/5511957217883?text=Quero%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Começar Teste Grátis Agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
            <div className="w-20 h-1.5 bg-[#991B1B] mx-auto rounded-full"></div>
          </div>

          <div className="relative group/testimonials-slider">
            {/* Navigation Buttons */}
            <button 
              onClick={(e) => {
                const container = e.currentTarget.parentElement?.querySelector('.testimonials-scroll');
                container?.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center border border-gray-100"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-[#991B1B]" />
            </button>
            
            <button 
              onClick={(e) => {
                const container = e.currentTarget.parentElement?.querySelector('.testimonials-scroll');
                container?.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center border border-gray-100"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="text-[#991B1B]" />
            </button>

            <div className="testimonials-scroll flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth cursor-grab active:cursor-grabbing">
              {[
                { name: "Ricardo Silva", role: "Dono da Granitos & Cia", text: "O fechamento de orçamentos ficou 3x mais rápido. O que eu levava horas pra calcular, agora faço em minutos na frente do cliente." },
                { name: "Ana Paula", role: "Gerente da Marmoraria Lux", text: "A organização do estoque mudou nosso jogo. Hoje sabemos exatamente o que temos de sobra e o que precisamos comprar." },
                { name: "Marcos Oliveira", role: "Proprietário da ArtPedras", text: "Interface muito intuitiva. Meus funcionários aprenderam a usar sozinhos. O suporte também é nota 10." },
                { name: "Juliano Costa", role: "PROPRIETÁRIO DA ROCHA NOBRE", text: "Antes a gente se perdia entre papel, WhatsApp e anotações soltas. Com o sistema, ficou muito mais fácil acompanhar cada pedido sem esquecer etapa nenhuma." },
                { name: "Fernanda Alves", role: "GERENTE COMERCIAL DA MARMORARIA IMPÉRIO", text: "O tempo que a gente gastava montando orçamento caiu bastante. Hoje consigo atender mais clientes no dia sem aquela correria de ficar procurando informação." },
                { name: "Paulo Henrique", role: "DONO DA GRANMÁRMORES", text: "O que mais gostei foi a organização dos pedidos. Agora sabemos o que já foi vendido, o que está em produção e o que ainda precisa ser instalado." },
                { name: "Camila Rocha", role: "ADMINISTRATIVO DA ELEGANCE STONE", text: "No começo achei que seria difícil da equipe se adaptar, mas foi bem tranquilo. Em poucos dias todo mundo já estava usando e o atendimento melhorou bastante." },
                { name: "Leandro Martins", role: "PROPRIETÁRIO DA MARMORARIA CRISTAL", text: "O sistema trouxe mais controle para a operação. Hoje temos mais clareza sobre os prazos e conseguimos passar mais segurança para o cliente durante o serviço." }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-center p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all relative"
                >
                  <Quote className="absolute top-6 right-8 text-gray-100 w-12 h-12" />
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#FFD700" color="#FFD700" />)}
                  </div>
                  <p className="text-gray-600 italic mb-8 relative z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/client${idx}/100/100`} alt={testimonial.name} referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="md:hidden text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest text-center">← Deslize para ver mais →</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="w-20 h-1.5 bg-[#991B1B] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {[
              {
                question: "O sistema funciona no celular?",
                answer: "Sim! O Marmoraria Pro é 100% responsivo e funciona perfeitamente em smartphones, tablets e computadores. Você pode gerenciar sua marmoraria de onde estiver."
              },
              {
                question: "Preciso instalar alguma coisa?",
                answer: "Não. O sistema é baseado na nuvem (SaaS), o que significa que você só precisa de um navegador e conexão com a internet para acessar. Sem instalações complicadas ou atualizações manuais."
              },
              {
                question: "Como funciona o suporte?",
                answer: "Nosso suporte é humanizado e realizado diretamente via WhatsApp. Temos uma equipe técnica pronta para ajudar você e seus funcionários em qualquer dúvida ou dificuldade."
              },
              {
                question: "Posso cancelar a qualquer momento?",
                answer: "Com certeza. Não trabalhamos com contratos de fidelidade. Você paga mensalmente e pode cancelar quando quiser, sem multas ou burocracia."
              },
              {
                question: "O sistema calcula o m² automaticamente?",
                answer: "Sim. Basta inserir as medidas das peças e o sistema calcula a área total, o valor dos acabamentos e o preço final do orçamento instantaneamente, evitando erros manuais."
              },
              {
                question: "Meus dados estão seguros?",
                answer: "Segurança é nossa prioridade. Utilizamos criptografia de ponta e servidores de alta confiabilidade para garantir que todas as suas informações de clientes e financeiro estejam sempre protegidas."
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Ainda tem alguma dúvida?</p>
            <a 
              href="https://wa.me/5511957217883?text=Tenho%20uma%20duvida%20sobre%20o%20sistema"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#991B1B] font-bold hover:underline flex items-center justify-center gap-2"
            >
              Falar com um consultor no WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Service Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#141414] rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <MapPin size={240} className="text-white" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Serviço Complementar</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Sua marmoraria está fácil de encontrar no Google?
                  </h2>
                  <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                    Além do sistema, também oferecemos o serviço de configuração da sua empresa no Google Maps para aumentar sua presença online e facilitar o contato de novos clientes.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: <Search size={20} />, text: "Mais facilidade para ser encontrado na sua região" },
                    { icon: <Star size={20} />, text: "Mais credibilidade para sua empresa" },
                    { icon: <Smartphone size={20} />, text: "Mais facilidade para o cliente entrar em contato" },
                    { icon: <TrendingUp size={20} />, text: "Mais chances de receber novos pedidos" },
                    { icon: <Navigation size={20} />, text: "Localização mais clara para visitas e atendimento" }
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm"
              >
                <div className="mb-8">
                  <p className="text-[#991B1B] font-bold text-xl mb-4 italic">"Quem não é encontrado, quase sempre é esquecido."</p>
                  <p className="text-gray-400 leading-relaxed">
                    Muitas vezes o cliente está procurando exatamente pelo seu serviço, mas acaba encontrando outra empresa primeiro. Estar presente no Google ajuda sua marmoraria a ser vista, localizada e lembrada com mais facilidade.
                  </p>
                </div>

                <a 
                  href="https://wa.me/5511957217883?text=Olá!%20Quero%20saber%20como%20funciona%20o%20serviço%20para%20colocar%20minha%20empresa%20no%20Google%20Maps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all group/btn"
                >
                  <Globe size={20} className="group-hover/btn:rotate-12 transition-transform" />
                  Quero colocar minha empresa no Google
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#991B1B] rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
              <span className="text-2xl font-bold tracking-tight">Marmoraria Pro</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              A evolução da sua gestão. O sistema definitivo para marmorarias que buscam luxo, agilidade e controle total.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#991B1B] transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Links Úteis</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><MessageSquare size={18} /> contato@marmorariapro.com</li>
              <li className="flex items-center gap-3"><Smartphone size={18} /> (11) 95721-7883</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 Marmoraria Pro. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
