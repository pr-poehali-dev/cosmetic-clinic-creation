import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/c64186ce-db6a-4c98-b4b5-a596517c0035.jpg";
const DOCTOR_IMAGE = "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/d7ce73ca-1388-4945-878b-f088a7f0e699.jpg";
const SKIN_IMAGE = "https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/files/b4ea36fc-150b-4be4-978f-34f43bd5ecec.jpg";

const services = [
  {
    icon: "Smile",
    title: "Чистка лица",
    desc: "Ручная и комбинированная чистка — глубокое очищение пор, устранение воспалений и выравнивание рельефа кожи.",
    price: "по запросу"
  },
  {
    icon: "Syringe",
    title: "Мезотерапия",
    desc: "Инъекционное введение витаминных коктейлей для лица, тела и волосистой части головы — питание, увлажнение, лифтинг.",
    price: "по запросу"
  },
  {
    icon: "Heart",
    title: "Биоревитализация",
    desc: "Введение гиалуроновой кислоты для глубокого увлажнения, восстановления упругости и сияния кожи.",
    price: "по запросу"
  },
  {
    icon: "Zap",
    title: "Ботулинотерапия",
    desc: "Коррекция мимических морщин в области лба, переносицы и вокруг глаз. Натуральный и свежий результат.",
    price: "по запросу"
  },
  {
    icon: "Droplets",
    title: "Капельницы красоты",
    desc: "«Детокс», «Золушка», «Витаминный заряд бодрости», восстановление после праздников — подберём под вашу задачу.",
    price: "по запросу"
  },
  {
    icon: "Sparkles",
    title: "Химические пилинги",
    desc: "Пилинги подбираются строго по типу кожи — обновление, выравнивание тона, устранение пигментации и акне.",
    price: "по запросу"
  },
  {
    icon: "Scissors",
    title: "Эпиляция на лице",
    desc: "Деликатное удаление нежелательных волосков в области лица. Бережно и аккуратно.",
    price: "по запросу"
  },
  {
    icon: "Layers",
    title: "Альгинатные маски",
    desc: "Профессиональные маски, подобранные по типу кожи — питание, успокоение, лифтинг и мгновенное сияние.",
    price: "по запросу"
  },
  {
    icon: "Activity",
    title: "Аппаратная коррекция фигуры",
    desc: "Современные методики для моделирования контуров тела, уменьшения объёмов и улучшения качества кожи.",
    price: "по запросу"
  },
  {
    icon: "Star",
    title: "Фарфоровая куколка",
    desc: "Комплексная процедура для достижения фарфорово-гладкой, сияющей и безупречной кожи лица.",
    price: "по запросу"
  },
  {
    icon: "ShoppingBag",
    title: "Подбор домашнего ухода",
    desc: "Помогу выбрать профессиональную косметику для домашнего использования — с учётом типа кожи и ваших задач.",
    price: "бесплатно"
  },
];

const reviews = [
  {
    name: "Марина К.",
    date: "март 2025",
    text: "Обратилась с проблемой пигментации — за 3 сеанса пилинга кожа стала заметно светлее и ровнее. Профессионализм на высшем уровне, чувствуется огромный опыт.",
    rating: 5
  },
  {
    name: "Елена В.",
    date: "февраль 2025",
    text: "Делала капельницу «Золушка» перед важным мероприятием. Эффект потрясающий — кожа сияла весь вечер! Буду приходить регулярно.",
    rating: 5
  },
  {
    name: "Светлана М.",
    date: "январь 2025",
    text: "Очень аккуратная работа с филлерами. Результат естественный, именно то, что хотела. Подруги спрашивают, что изменилось — говорю, что выспалась!",
    rating: 5
  },
  {
    name: "Ольга Р.",
    date: "декабрь 2024",
    text: "Долго искала специалиста по ботулинотерапии. Здесь нашла — техника безупречная, лицо после процедуры выглядит натурально и свежо. Спасибо огромное!",
    rating: 5
  },
  {
    name: "Наталья Д.",
    date: "ноябрь 2024",
    text: "Прошла курс биоревитализации. Кожа стала упругой, морщинки разгладились. Екатерина — настоящий профессионал с золотыми руками.",
    rating: 5
  },
  {
    name: "Анна С.",
    date: "октябрь 2024",
    text: "Приехала из Электростали специально к Давыдовой — рекомендовали подруги. Не пожалела ни капли! Уже записалась на следующий визит.",
    rating: 5
  },
];

const portfolioItems = [
  { label: "Пилинг. Выравнивание тона", src: SKIN_IMAGE },
  { label: "Контурная коррекция губ", src: HERO_IMAGE },
  { label: "Омоложение. Капельница «Монако»", src: SKIN_IMAGE },
  { label: "Биоревитализация. Сияние кожи", src: HERO_IMAGE },
  { label: "Мезотерапия. Лифтинг", src: SKIN_IMAGE },
  { label: "Ботулинотерапия. Натуральный результат", src: HERO_IMAGE },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="no-select" onContextMenu={(e) => e.preventDefault()}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(26, 46, 34, 0.97)"
            : "linear-gradient(to bottom, rgba(26,46,34,0.8), transparent)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="text-xl text-white tracking-wide" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}>
              Екатерина Давыдова
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Услуги", id: "services" },
              { label: "О центре", id: "about" },
              { label: "Портфолио", id: "portfolio" },
              { label: "Отзывы", id: "reviews" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link bg-transparent border-none cursor-pointer">
                {item.label}
              </button>
            ))}
          </div>

          <a href="tel:+79037808734"
            className="hidden md:flex btn-gold px-6 py-2.5 text-sm rounded-sm cursor-pointer items-center gap-2"
            style={{ textDecoration: "none" }}>
            <Icon name="Phone" size={14} />
            +7 (903) 780-87-34
          </a>

          <button
            className="md:hidden text-white p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(26,46,34,0.98)" }}>
            {[
              { label: "Услуги", id: "services" },
              { label: "О центре", id: "about" },
              { label: "Портфолио", id: "portfolio" },
              { label: "Отзывы", id: "reviews" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="nav-link bg-transparent border-none cursor-pointer text-left py-2 border-b border-white/10">
                {item.label}
              </button>
            ))}
            <button className="btn-gold px-6 py-3 text-sm rounded-sm w-full mt-2 cursor-pointer"
              onClick={() => scrollTo("contacts")}>
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Центр эстетической медицины" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(26,46,34,0.85) 0%, rgba(26,46,34,0.6) 50%, rgba(26,46,34,0.75) 100%)"
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 50%)"
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <p className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase mb-6 font-light"
              style={{ fontFamily: "Golos Text, sans-serif" }}>
              Павловский Посад · cosmetology & aesthetic
            </p>
          </div>

          <div className="animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
            <h1 className="text-white mb-2 leading-tight" style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300
            }}>
              Центр косметологии
            </h1>
            <h1 className="mb-8 leading-tight" style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              color: "var(--brand-gold-light)"
            }}>
              Екатерины Давыдовой
            </h1>
          </div>

          <div className="animate-fade-in-up opacity-0 delay-400" style={{ animationFillMode: "forwards" }}>
            <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
              Более 20 лет опыта в сфере здоровья и красоты. Индивидуальный подход,
              современные методики и искреннее внимание к каждому клиенту.
            </p>
          </div>

          <div className="animate-fade-in-up opacity-0 delay-500 flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationFillMode: "forwards" }}>
            <button className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase cursor-pointer"
              onClick={() => scrollTo("contacts")}>
              Записаться на консультацию
            </button>
            <button className="btn-outline-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase cursor-pointer"
              onClick={() => scrollTo("services")}>
              Наши услуги
            </button>
          </div>

          <div className="animate-fade-in-up opacity-0 delay-600 mt-16 flex items-center justify-center gap-12"
            style={{ animationFillMode: "forwards" }}>
            {[
              { num: "20+", label: "лет опыта" },
              { num: "1200+", label: "довольных клиентов" },
              { num: "30+", label: "видов процедур" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-light text-[var(--brand-gold)]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {stat.num}
                </div>
                <div className="text-white/60 text-xs tracking-wider mt-1"
                  style={{ fontFamily: "Golos Text, sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-[var(--brand-gold)] opacity-60" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase mb-4"
              style={{ fontFamily: "Golos Text, sans-serif" }}>
              Что мы предлагаем
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--brand-dark)]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
              Наши процедуры
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-500 max-w-xl mx-auto"
              style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
              Каждая процедура подбирается индивидуально после личной консультации
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-service p-8 rounded-sm">
                <div className="mb-5 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.1)" }}>
                  <Icon name={s.icon} fallback="Sparkles" size={22} style={{ color: "var(--brand-gold)" }} />
                </div>
                <h3 className="text-xl mb-3 text-[var(--brand-dark)]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--brand-gold)] font-medium text-sm"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>
                    {s.price}
                  </span>
                  <button
                    className="text-[var(--brand-green)] text-xs tracking-wider uppercase underline-offset-2 hover:underline cursor-pointer bg-transparent border-none"
                    onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                    style={{ fontFamily: "Golos Text, sans-serif" }}
                  >
                    Записаться →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--brand-gold)] opacity-20 rounded-sm" />
              <img src={DOCTOR_IMAGE} alt="Екатерина Давыдова" className="w-full rounded-sm relative z-10 object-cover"
                style={{ maxHeight: "600px" }} />
              <div className="absolute bottom-6 right-6 z-20 text-white text-center px-6 py-4 rounded-sm"
                style={{ background: "rgba(26,46,34,0.92)", backdropFilter: "blur(8px)" }}>
                <div className="text-2xl font-light text-[var(--brand-gold)]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}>20+</div>
                <div className="text-xs tracking-wider opacity-80"
                  style={{ fontFamily: "Golos Text, sans-serif" }}>лет клинического опыта</div>
              </div>
            </div>

            <div>
              <p className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase mb-4"
                style={{ fontFamily: "Golos Text, sans-serif" }}>
                О центре
              </p>
              <h2 className="text-4xl md:text-5xl mb-6 text-[var(--brand-dark)] leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
                Екатерина Давыдова
              </h2>
              <div className="section-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

              <p className="text-gray-600 leading-relaxed mb-6"
                style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
                Более 20 лет Екатерина работает в сфере здоровья и красоты. За эти годы она накопила
                глубокие знания физиологии кожи и человеческого организма, которые лежат в основе
                каждой процедуры. Это даёт уверенность — вы в надёжных руках.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
                Центр косметологии в Павловском Посаде — камерное пространство, где каждый клиент
                получает персональный подход, честную консультацию и результат, который говорит сам за себя.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: "Award", text: "Глубокие медицинские знания" },
                  { icon: "Users", text: "Индивидуальный подход" },
                  { icon: "Shield", text: "Безопасность превыше всего" },
                  { icon: "MapPin", text: "Павловский Посад" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Icon name={item.icon} fallback="Star" size={16} style={{ color: "var(--brand-gold)" }} />
                    </div>
                    <span className="text-sm text-gray-600"
                      style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase cursor-pointer"
                onClick={() => scrollTo("contacts")}>
                Записаться к Екатерине
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase mb-4"
              style={{ fontFamily: "Golos Text, sans-serif" }}>
              Результаты работы
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 text-white"
              style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
              Портфолио
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-white/50 max-w-xl mx-auto"
              style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
              Реальные результаты наших клиентов — публикуются с их согласия
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-item rounded-sm cursor-pointer" style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                <div className="portfolio-overlay">
                  <p className="text-white font-light" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6" style={{ background: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase mb-4"
              style={{ fontFamily: "Golos Text, sans-serif" }}>
              Мнения клиентов
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--brand-dark)]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
              Отзывы
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="review-card p-6 rounded-sm">
                <div className="flex items-center gap-1 mb-4">
                  {Array(r.rating).fill(0).map((_, j) => (
                    <span key={j} style={{ color: "var(--brand-gold)" }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 italic"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--brand-dark)] text-sm"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>
                    {r.name}
                  </span>
                  <span className="text-gray-400 text-xs" style={{ fontFamily: "Golos Text, sans-serif" }}>
                    {r.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--brand-gold)] tracking-[0.3em] text-xs uppercase mb-4"
              style={{ fontFamily: "Golos Text, sans-serif" }}>
              Свяжитесь с нами
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--brand-dark)]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
              Запись и контакты
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-500 max-w-xl mx-auto"
              style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
              Напишите или позвоните — ответим в течение нескольких минут и подберём удобное время
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <a href="tel:+79037808734"
                className="flex items-center gap-5 p-5 rounded-sm border transition-all group"
                style={{ textDecoration: "none", borderColor: "rgba(201,168,76,0.2)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)" }}>
                  <Icon name="Phone" size={18} style={{ color: "var(--brand-gold)" }} />
                </div>
                <div>
                  <div className="text-xs tracking-wider text-gray-400 uppercase mb-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Телефон</div>
                  <div className="text-[var(--brand-dark)] font-medium"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>+7 (903) 780-87-34</div>
                  <div className="text-gray-400 text-xs mt-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Пн–Сб: 9:00–20:00</div>
                </div>
              </a>

              <a href="https://t.me/+79037808734" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-sm border transition-all"
                style={{ textDecoration: "none", borderColor: "rgba(201,168,76,0.2)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(34,158,217,0.12)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#229ED9">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs tracking-wider text-gray-400 uppercase mb-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Telegram</div>
                  <div className="text-[var(--brand-dark)] font-medium"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>+7 (903) 780-87-34</div>
                  <div className="text-gray-400 text-xs mt-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Ответим быстро</div>
                </div>
              </a>

              <a href="https://wa.me/79037808734" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-sm border transition-all"
                style={{ textDecoration: "none", borderColor: "rgba(201,168,76,0.2)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,211,102,0.12)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs tracking-wider text-gray-400 uppercase mb-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>WhatsApp</div>
                  <div className="text-[var(--brand-dark)] font-medium"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>+7 (903) 780-87-34</div>
                  <div className="text-gray-400 text-xs mt-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Напишите удобным способом</div>
                </div>
              </a>

              <a href="https://max.ru/+79037808734" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-sm border transition-all"
                style={{ textDecoration: "none", borderColor: "rgba(201,168,76,0.2)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,119,255,0.12)" }}>
                  <img src="https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/bucket/20f5bc99-99d1-414c-85bf-145e9d767e6d.jpg"
                    alt="Max" style={{ width: 28, height: 28, borderRadius: "6px" }} />
                </div>
                <div>
                  <div className="text-xs tracking-wider text-gray-400 uppercase mb-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Макс (Max)</div>
                  <div className="text-[var(--brand-dark)] font-medium"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>+7 (903) 780-87-34</div>
                  <div className="text-gray-400 text-xs mt-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>ВКонтакте Мессенджер</div>
                </div>
              </a>

              <div className="flex items-start gap-5 p-5 rounded-sm"
                style={{ background: "var(--brand-cream)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)" }}>
                  <Icon name="MapPin" size={18} style={{ color: "var(--brand-gold)" }} />
                </div>
                <div>
                  <div className="text-xs tracking-wider text-gray-400 uppercase mb-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Адрес</div>
                  <div className="text-[var(--brand-dark)] font-medium"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>г. Павловский Посад</div>
                  <div className="text-gray-400 text-xs mt-0.5"
                    style={{ fontFamily: "Golos Text, sans-serif" }}>Точный адрес — при записи</div>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden" style={{ background: "var(--brand-dark)", padding: "48px" }}>
              <h3 className="text-white text-3xl mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
                Запись на консультацию
              </h3>
              <p className="text-white/50 mb-8 text-sm"
                style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300 }}>
                Первичная консультация — бесплатно. Обсудим ваши пожелания и подберём оптимальные процедуры.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-5 py-4 text-sm rounded-sm bg-transparent placeholder-white/30 outline-none"
                  style={{
                    fontFamily: "Golos Text, sans-serif",
                    fontWeight: 300,
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "white"
                  }}
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="w-full px-5 py-4 text-sm rounded-sm bg-transparent placeholder-white/30 outline-none"
                  style={{
                    fontFamily: "Golos Text, sans-serif",
                    fontWeight: 300,
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "white"
                  }}
                />
                <select
                  className="w-full px-5 py-4 text-sm rounded-sm outline-none appearance-none"
                  style={{
                    fontFamily: "Golos Text, sans-serif",
                    fontWeight: 300,
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "rgba(255,255,255,0.5)",
                    background: "var(--brand-dark)"
                  }}
                >
                  <option value="">Интересующая процедура</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}
                      style={{ background: "var(--brand-dark)", color: "white" }}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <button className="btn-gold w-full py-4 text-sm rounded-sm tracking-widest uppercase cursor-pointer">
                  Записаться на консультацию
                </button>
              </div>
              <p className="text-white/25 text-xs mt-4 text-center"
                style={{ fontFamily: "Golos Text, sans-serif" }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center"
        style={{ background: "var(--brand-dark)", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-[var(--brand-gold)] text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "Golos Text, sans-serif" }}>
            Центр косметологии
          </div>
          <div className="text-white text-xl mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
            Екатерины Давыдовой
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "Golos Text, sans-serif" }}>
            © 2025 · Павловский Посад · Все права защищены
          </div>
        </div>
      </footer>

      {/* FLOATING CONTACTS */}
      <div className="floating-contact">
        <a href="tel:+79037808734" className="contact-btn" style={{ background: "#2d4a35" }}
          title="Позвонить">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
        </a>
        <a href="https://t.me/+79037808734" target="_blank" rel="noopener noreferrer"
          className="contact-btn" style={{ background: "#229ED9" }} title="Telegram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a href="https://wa.me/79037808734" target="_blank" rel="noopener noreferrer"
          className="contact-btn" style={{ background: "#25D366" }} title="WhatsApp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
        <a href="https://max.ru/+79037808734" target="_blank" rel="noopener noreferrer"
          className="contact-btn" style={{ background: "none", padding: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }} title="Max">
          <img src="https://cdn.poehali.dev/projects/4a1b1793-1bde-4476-a16b-45471d2a62ec/bucket/20f5bc99-99d1-414c-85bf-145e9d767e6d.jpg"
            alt="Max" style={{ width: 52, height: 52, borderRadius: "50%", display: "block" }} />
        </a>
      </div>

    </div>
  );
}