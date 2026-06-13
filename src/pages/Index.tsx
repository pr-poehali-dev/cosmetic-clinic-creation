import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IMG = {
  hero: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/711baf49-3d39-4e75-bc93-3f4575a77bfe.jpg",
  doctor: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/d7ce73ca-1388-4945-878b-f088a7f0e699.jpg",
  woman: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/1c7169e2-d946-4957-bebe-0e1928038e48.jpg",
  man: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/34b6b62b-b464-4bc4-984e-9c3052e5f042.jpg",
  p1: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/182b8fd7-8e24-4b4a-beac-cc018d2bfe2d.jpg",
  p2: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/4ba0f812-3b6b-430d-ba41-175e5da3f6c2.jpg",
  p3: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/6c13264b-ff06-4dbb-bc5d-36b6f6ce120c.jpg",
  p4: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/67723e31-4eaf-4452-9d4b-3d74b96a3655.jpg",
  p5: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/e924cc24-cb6f-4938-be89-31113ac90a5a.jpg",
  p6: "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/7224445c-c83e-4491-a676-e15f0636e846.jpg",
};

const services = [
  { icon: "Smile", title: "Чистка лица", sub: "ручная · комбинированная", desc: "Глубокое очищение пор, устранение воспалений и выравнивание рельефа кожи. Для мужчин и женщин.", tag: "Хит" },
  { icon: "Syringe", title: "Мезотерапия", sub: "лицо · тело · голова", desc: "Витаминные коктейли вводятся точечно — питание, лифтинг и сияние без операций.", tag: "" },
  { icon: "Heart", title: "Биоревитализация", sub: "гиалуроновая кислота", desc: "Глубокое увлажнение и восстановление упругости. Кожа «пьёт» влагу изнутри.", tag: "" },
  { icon: "Zap", title: "Ботулинотерапия", sub: "лоб · переносица · глаза", desc: "Коррекция мимических морщин. Результат — свежий и естественный, без «маски».", tag: "Популярно" },
  { icon: "Droplets", title: "Капельницы красоты", sub: "детокс · золушка · витамины", desc: "«Детокс», «Золушка», «Витаминный заряд бодрости», восстановление после праздников.", tag: "" },
  { icon: "Sparkles", title: "Химические пилинги", sub: "по типу кожи", desc: "Обновление, выравнивание тона, устранение пигментации. Подбираются индивидуально.", tag: "" },
  { icon: "Star", title: "Фарфоровая куколка", sub: "комплексная процедура", desc: "Фарфорово-гладкая, сияющая и безупречная кожа лица — в одном сеансе.", tag: "Новинка" },
  { icon: "Activity", title: "Коррекция фигуры", sub: "аппаратные методики", desc: "Моделирование контуров тела, уменьшение объёмов и улучшение качества кожи.", tag: "" },
  { icon: "Layers", title: "Альгинатные маски", sub: "по типу кожи", desc: "Питание, успокоение и лифтинг за один сеанс. Идеально после агрессивных процедур.", tag: "" },
  { icon: "Scissors", title: "Эпиляция на лице", sub: "деликатное удаление", desc: "Бережное удаление нежелательных волосков в области лица. Быстро и аккуратно.", tag: "" },
  { icon: "ShoppingBag", title: "Домашний уход", sub: "профессиональный подбор", desc: "Подберу профессиональную косметику под ваш тип кожи и задачи.", tag: "Бесплатно" },
];

const reviews = [
  { name: "Марина К.", date: "март 2025", text: "За 3 сеанса пилинга кожа стала заметно светлее и ровнее. Чувствуется огромный опыт и профессионализм.", rating: 5, gender: "f" },
  { name: "Алексей М.", date: "апрель 2025", text: "Сделал чистку и мезотерапию — результат ощутимый. Кожа стала лучше выглядеть, коллеги заметили. Буду ходить.", rating: 5, gender: "m" },
  { name: "Елена В.", date: "февраль 2025", text: "Делала капельницу «Золушка» перед важным мероприятием. Кожа сияла весь вечер! Эффект потрясающий.", rating: 5, gender: "f" },
  { name: "Дмитрий К.", date: "март 2025", text: "Капельница «Витаминный заряд» — прилив сил уже на следующее утро. Профессионал своего дела.", rating: 5, gender: "m" },
  { name: "Ольга Р.", date: "декабрь 2024", text: "Техника безупречная, лицо после ботулинотерапии выглядит натурально и свежо. Спасибо огромное!", rating: 5, gender: "f" },
  { name: "Наталья Д.", date: "ноябрь 2024", text: "Кожа стала упругой, морщинки разгладились. Екатерина — профессионал с золотыми руками.", rating: 5, gender: "f" },
];

const portfolio = [
  { label: "Чистка лица", sub: "глубокое очищение", src: IMG.p1 },
  { label: "Мезотерапия", sub: "питание и сияние", src: IMG.p2 },
  { label: "Капельница красоты", sub: "изнутри наружу", src: IMG.p3 },
  { label: "Химический пилинг", sub: "обновление кожи", src: IMG.p4 },
  { label: "Ботулинотерапия", sub: "естественная свежесть", src: IMG.p5 },
  { label: "Уход для мужчин", sub: "кожа в лучшей форме", src: IMG.p6 },
];

const TG = "https://t.me/+79037808734";
const WA = "https://wa.me/79037808734";
const MAX_URL = "https://max.ru/+79037808734";
const MAX_ICON = "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/bucket/20f5bc99-99d1-414c-85bf-145e9d767e6d.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Услуги", id: "services" },
    { label: "О нас", id: "about" },
    { label: "Портфолио", id: "portfolio" },
    { label: "Отзывы", id: "reviews" },
    { label: "Контакты", id: "contacts" },
  ];

  return (
    <div className="no-select" onContextMenu={(e) => e.preventDefault()}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{
        background: scrolled ? "rgba(10,18,12,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="w-8" />

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link bg-transparent border-none cursor-pointer">
                {item.label}
              </button>
            ))}
          </div>

          <a href={TG} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase cursor-pointer"
            style={{
              textDecoration: "none",
              color: "var(--brand-gold)",
              fontFamily: "Golos Text, sans-serif",
              border: "1px solid rgba(201,168,76,0.4)",
              padding: "8px 18px",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            Записаться
          </a>

          <button className="md:hidden text-white p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-8 pt-2 flex flex-col gap-5" style={{ background: "rgba(10,18,12,0.98)" }}>
            {navLinks.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="nav-link bg-transparent border-none cursor-pointer text-left text-lg py-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {item.label}
              </button>
            ))}
            <a href={TG} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-6 py-4 text-sm rounded-sm text-center tracking-widest uppercase mt-2"
              style={{ textDecoration: "none" }}>
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="" className="w-full h-full object-cover" style={{ transform: "scale(1.05)" }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to top, rgba(8,16,10,0.97) 0%, rgba(8,16,10,0.5) 50%, rgba(8,16,10,0.15) 100%)"
          }} />
        </div>

        {/* Floating portraits */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
          <div className="rounded-sm overflow-hidden shadow-2xl" style={{ width: 180, height: 220, border: "1px solid rgba(201,168,76,0.2)" }}>
            <img src={IMG.woman} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-sm overflow-hidden shadow-2xl" style={{ width: 180, height: 220, border: "1px solid rgba(201,168,76,0.2)" }}>
            <img src={IMG.man} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-3 mb-8">
                <span style={{ width: 40, height: 1, background: "var(--brand-gold)", display: "inline-block" }} />
                <span className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase"
                  style={{ fontFamily: "Golos Text, sans-serif" }}>
                  Павловский Посад · cosmetology & aesthetic
                </span>
              </span>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              <h1 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "white",
                marginBottom: "0.3em",
              }}>
                Красота,<br />
                <em style={{ color: "var(--brand-gold-light)", fontStyle: "italic" }}>которую видно</em>
              </h1>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
              <p style={{
                fontFamily: "Golos Text, sans-serif",
                fontWeight: 300,
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.65)",
                maxWidth: 480,
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                marginTop: "1.5rem",
              }}>
                Центр косметологии Екатерины Давыдовой — для тех, кто ценит результат.
                Более 20 лет опыта. Для женщин и мужчин.
              </p>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4" style={{ animationFillMode: "forwards" }}>
              <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase cursor-pointer flex items-center justify-center gap-3" style={{ textDecoration: "none" }}>
                Записаться бесплатно
              </a>
              <button onClick={() => scrollTo("services")} className="btn-outline-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase cursor-pointer">
                Все процедуры
              </button>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-500 flex items-center gap-10 mt-14 pt-10"
              style={{ animationFillMode: "forwards", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { n: "20+", t: "лет опыта" },
                { n: "1200+", t: "клиентов" },
                { n: "11", t: "процедур" },
                { n: "5★", t: "оценка" },
              ].map(s => (
                <div key={s.t}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400, color: "var(--brand-gold)" }}>{s.n}</div>
                  <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{s.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <Icon name="ChevronDown" size={20} style={{ color: "rgba(201,168,76,0.5)" }} />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: "var(--brand-dark)", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { icon: "ShieldCheck", text: "Безопасные методики" },
            { icon: "Award", text: "20+ лет в медицине" },
            { icon: "Users", text: "Для женщин и мужчин" },
            { icon: "Clock", text: "Без ожиданий, по записи" },
            { icon: "MessageCircle", text: "Отвечаю лично" },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2.5">
              <Icon name={item.icon} size={16} style={{ color: "var(--brand-gold)", flexShrink: 0 }} />
              <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6" style={{ background: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 16 }}>
              Что мы предлагаем
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--brand-dark)", marginBottom: 20 }}>
              Процедуры
            </h2>
            <div className="section-divider" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.04}>
                <div
                  className="card-service rounded-sm cursor-pointer h-full"
                  style={{ padding: "28px 28px 24px" }}
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: activeService === i ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.08)", transition: "background 0.3s" }}>
                      <Icon name={s.icon} fallback="Sparkles" size={20} style={{ color: "var(--brand-gold)" }} />
                    </div>
                    {s.tag && (
                      <span style={{
                        fontFamily: "Golos Text, sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--brand-dark)",
                        background: "rgba(201,168,76,0.2)",
                        padding: "3px 10px",
                        borderRadius: "2px",
                      }}>{s.tag}</span>
                    )}
                  </div>

                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 500, color: "var(--brand-dark)", marginBottom: 4 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", color: "var(--brand-gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, fontWeight: 400 }}>
                    {s.sub}
                  </p>
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
                    {s.desc}
                  </p>

                  <button
                    onClick={() => scrollTo("contacts")}
                    className="bg-transparent border-none cursor-pointer flex items-center gap-2"
                    style={{
                      fontFamily: "Golos Text, sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--brand-green)",
                      padding: 0,
                    }}>
                    Узнать подробнее
                    <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 overflow-hidden" style={{ background: "#0a120c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <div className="relative">
                <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                  <img src={IMG.doctor} alt="Екатерина Давыдова" className="w-full object-cover" style={{ maxHeight: 620 }} />
                </div>
                {/* Gold frame accent */}
                <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 rounded-sm" style={{ border: "1px solid rgba(201,168,76,0.2)", zIndex: -1 }} />

                {/* Floating stat */}
                <div className="absolute top-8 -left-6 px-6 py-5 rounded-sm shadow-2xl" style={{ background: "rgba(201,168,76,0.95)" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 400, color: "var(--brand-dark)", lineHeight: 1 }}>20+</div>
                  <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.65rem", color: "var(--brand-dark)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4, opacity: 0.8 }}>лет опыта</div>
                </div>

                <div className="absolute bottom-8 -right-0 px-6 py-5 rounded-sm shadow-2xl" style={{ background: "rgba(10,18,12,0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 400, color: "var(--brand-gold)", lineHeight: 1 }}>1200+</div>
                  <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>клиентов</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 20 }}>
                О нас
              </p>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem,5vw,3.8rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: 8 }}>
                Екатерина<br /><em style={{ color: "var(--brand-gold-light)", fontStyle: "italic" }}>Давыдова</em>
              </h2>
              <div style={{ width: 50, height: 1, background: "linear-gradient(90deg, var(--brand-gold), transparent)", margin: "24px 0" }} />

              <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 20, fontSize: "0.95rem" }}>
                Более 20 лет работы в сфере здоровья дали Екатерине уникальное понимание физиологии кожи и организма в целом. Каждая процедура — это не просто косметология, а работа с осознанием биологии процессов.
              </p>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 36, fontSize: "0.95rem" }}>
                Камерный кабинет в Павловском Посаде — место, где вас ждут без очередей, слышат без спешки и подбирают процедуры честно, а не по прейскуранту.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "ShieldCheck", text: "Безопасность — приоритет" },
                  { icon: "UserCheck", text: "Работаю для женщин и мужчин" },
                  { icon: "Zap", text: "Результат виден сразу" },
                  { icon: "MapPin", text: "Павловский Посад" },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} size={15} style={{ color: "var(--brand-gold)", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <a href={TG} target="_blank" rel="noopener noreferrer"
                className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase inline-flex items-center gap-3"
                style={{ textDecoration: "none" }}>
                Записаться на консультацию
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOR EVERYONE BAND ── */}
      <section style={{ background: "var(--brand-gold)", padding: "60px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex items-center gap-8 md:border-r md:border-[rgba(0,0,0,0.1)] md:pr-16 mb-10 md:mb-0">
              <img src={IMG.woman} alt="Для женщин" className="rounded-sm object-cover flex-shrink-0"
                style={{ width: 90, height: 110, filter: "saturate(0.9)" }} />
              <div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400, color: "var(--brand-dark)", marginBottom: 8 }}>
                  Для женщин
                </h3>
                <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.85rem", color: "rgba(26,46,34,0.7)", lineHeight: 1.7, fontWeight: 300 }}>
                  Чистка, пилинги, инъекции, биоревитализация, маски — полный спектр ухода за кожей лица и тела.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 md:pl-16">
              <img src={IMG.man} alt="Для мужчин" className="rounded-sm object-cover flex-shrink-0"
                style={{ width: 90, height: 110, filter: "saturate(0.9)" }} />
              <div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400, color: "var(--brand-dark)", marginBottom: 8 }}>
                  Для мужчин
                </h3>
                <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.85rem", color: "rgba(26,46,34,0.7)", lineHeight: 1.7, fontWeight: 300 }}>
                  Чистка, мезотерапия, капельницы, коррекция морщин — без пафоса, с конкретным результатом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-28 px-6" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 16 }}>
              Наши работы
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "white", marginBottom: 20 }}>
              Портфолио
            </h2>
            <div className="section-divider mb-4" />
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              Публикуется с согласия клиентов
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {portfolio.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="portfolio-item group relative" style={{ aspectRatio: "4/3", overflow: "hidden", cursor: "pointer" }}>
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover"
                    style={{ transition: "transform 0.7s ease" }} />
                  <div className="portfolio-overlay" style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(8,16,10,0.9) 0%, rgba(8,16,10,0.2) 50%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "28px",
                  }}>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "white", fontWeight: 400, marginBottom: 4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", color: "var(--brand-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-28 px-6" style={{ background: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 16 }}>
              Говорят клиенты
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--brand-dark)", marginBottom: 20 }}>
              Отзывы
            </h2>
            <div className="section-divider" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="review-card h-full rounded-sm" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
                  <div className="flex items-center gap-1 mb-5">
                    {Array(r.rating).fill(0).map((_, j) => (
                      <span key={j} style={{ color: "var(--brand-gold)", fontSize: "0.9rem" }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.8, fontStyle: "italic", flex: 1, marginBottom: 24 }}>
                    «{r.text}»
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: r.gender === "m" ? "rgba(45,74,53,0.12)" : "rgba(201,168,76,0.12)" }}>
                      <Icon name={r.gender === "m" ? "User" : "User"} size={18}
                        style={{ color: r.gender === "m" ? "var(--brand-green)" : "var(--brand-gold)" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "var(--brand-dark)" }}>
                        {r.name}
                      </div>
                      <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.72rem", color: "#9ca3af" }}>
                        {r.date}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.1) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(45,74,53,0.3) 0%, transparent 50%)"
        }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 20 }}>
              Сделайте первый шаг
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
              Кожа, которой вы<br />
              <em style={{ color: "var(--brand-gold-light)", fontStyle: "italic" }}>будете гордиться</em>
            </h2>
            <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: 40, lineHeight: 1.8 }}>
              Первичная консультация бесплатна.<br />
              Напишите — отвечу лично и быстро.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TG} target="_blank" rel="noopener noreferrer"
                className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase flex items-center justify-center gap-3"
                style={{ textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-outline-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase flex items-center justify-center gap-3"
                style={{ textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 16 }}>
              Связаться
            </p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--brand-dark)", marginBottom: 20 }}>
              Контакты
            </h2>
            <div className="section-divider mb-6" />
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.95rem", color: "#6b7280", fontWeight: 300 }}>
              Напишите в удобный мессенджер — отвечу лично в течение нескольких минут
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: TG, label: "Telegram", sub: "Ответим быстро",
                  bg: "rgba(34,158,217,0.08)", border: "rgba(34,158,217,0.2)",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#229ED9"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                },
                {
                  href: WA, label: "WhatsApp", sub: "Напишите удобным способом",
                  bg: "rgba(37,211,102,0.08)", border: "rgba(37,211,102,0.2)",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                },
                {
                  href: MAX_URL, label: "Макс (Max)", sub: "ВКонтакте Мессенджер",
                  bg: "rgba(0,119,255,0.08)", border: "rgba(0,119,255,0.2)",
                  icon: <img src={MAX_ICON} alt="Max" style={{ width: 22, height: 22, borderRadius: 5 }} />
                },
                {
                  href: "tel:+79037808734", label: "Позвонить", sub: "Пн–Сб: 9:00–20:00",
                  bg: "rgba(201,168,76,0.08)", border: "rgba(201,168,76,0.2)",
                  icon: <Icon name="Phone" size={20} style={{ color: "var(--brand-gold)" }} />
                },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-sm transition-all"
                  style={{
                    textDecoration: "none",
                    padding: "24px 28px",
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "var(--brand-dark)", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.78rem", color: "#9ca3af", fontWeight: 300 }}>{c.sub}</div>
                  </div>
                  <Icon name="ArrowRight" size={16} style={{ color: "#d1d5db", marginLeft: "auto" }} />
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-sm text-center" style={{ background: "var(--brand-cream)" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="MapPin" size={16} style={{ color: "var(--brand-gold)" }} />
                <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "var(--brand-dark)" }}>
                  г. Павловский Посад
                </span>
              </div>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.8rem", color: "#9ca3af", fontWeight: 300 }}>
                Точный адрес кабинета — при записи
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#060e08", borderTop: "1px solid rgba(201,168,76,0.12)", padding: "48px 24px" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 400, color: "white", marginBottom: 4 }}>
              Екатерина Давыдова
            </div>
            <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
              cosmetology & aesthetic · Павловский Посад
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[
              { href: TG, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>, color: "#229ED9" },
              { href: WA, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>, color: "#25D366" },
              { href: MAX_URL, icon: <img src={MAX_ICON} alt="Max" style={{ width: 16, height: 16, borderRadius: 3 }} />, color: "#0077FF" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.06)", color: s.color, textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"}>
                {s.icon}
              </a>
            ))}
          </div>
          <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.2)" }}>
            © 2025 · Все права защищены
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ── */}
      <div className="floating-contact">
        <a href="tel:+79037808734" className="contact-btn" style={{ background: "var(--brand-green)" }} title="Позвонить">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
        </a>
        <a href={TG} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ background: "#229ED9" }} title="Telegram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ background: "#25D366" }} title="WhatsApp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
        <a href={MAX_URL} target="_blank" rel="noopener noreferrer"
          className="contact-btn" style={{ background: "none", padding: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }} title="Max">
          <img src={MAX_ICON} alt="Max" style={{ width: 52, height: 52, borderRadius: "50%", display: "block" }} />
        </a>
      </div>

    </div>
  );
}
