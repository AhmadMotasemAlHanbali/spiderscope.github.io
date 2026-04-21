/* ========================================
   SpiderScope - Main JavaScript File
   Language Switcher (EN → AR)
   ======================================== */

// Language translations
const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_blog: "Blog",
        nav_contact: "Contact",
        hero_badge: "Secure by Design",
        hero_title1: "Secure Connections,",
        hero_title2: "Smart Control",
        hero_desc: "Secure IoT Solutions | Smart Home | Security Cameras | Smart Irrigation | Cyber Security",
        hero_btn1: "Discover Services",
        hero_btn2: "Request Consultation",
        services_title: "Our",
        services_title_highlight: "Services",
        services_sub: "We provide integrated and secure solutions tailored to your needs",
        service1_title: "Smart Home",
        service1_desc: "Smart control of lighting, AC, curtains, and all home appliances with highest security standards.",
        service2_title: "Smart Irrigation",
        service2_desc: "Remote smart irrigation system with moisture sensors and automated scheduling to save up to 50% water.",
        service3_title: "Security Cameras",
        service3_desc: "4K high-resolution security cameras with full encryption against hacking and instant alert system.",
        service4_title: "IoT Security",
        service4_desc: "Security assessment for IoT devices, vulnerability prevention, and network protection.",
        service5_title: "Cloud Security",
        service5_desc: "Secure cloud infrastructure for your IoT devices with end-to-end encryption.",
        service6_title: "AI Threat Detection",
        service6_desc: "AI-powered threat detection and automated incident response systems.",
        stat1: "Projects Completed",
        stat2: "Happy Clients",
        stat3: "Security Experts",
        stat4: "Client Satisfaction",
        footer_desc: "Secure IoT & Cyber Security Solutions. Protecting your smart world.",
        quick_links: "Quick Links",
        follow_us: "Follow Us",
        copyright: "All Rights Reserved",
        services_page_title: "Our",
        services_page_desc: "Comprehensive security and IoT solutions for modern challenges",
        about_page_title: "About",
        about_page_desc: "Your trusted partner in IoT and Cyber Security",
        contact_page_title: "Contact",
        contact_page_desc: "Get in touch with our team for consultations and support",
        blog_page_title: "Our",
        blog_page_desc: "Latest insights on IoT security and smart technology",
        location: "Our Location",
        email: "Email",
        phone: "Phone",
        hours: "Working Hours",
        read_more: "Read More →",
        blog1_title: "Top 5 IoT Security Threats in 2026",
        blog1_excerpt: "Learn about the most common security vulnerabilities in IoT devices...",
        blog2_title: "Building a Secure Smart Home Ecosystem",
        blog2_excerpt: "Best practices for securing your smart home devices...",
        blog3_title: "Zero Trust Architecture for IoT",
        blog3_excerpt: "Implementing zero trust principles to protect your IoT infrastructure...",
        about_who: "Who",
        about_p1: "SpiderScope is a team of experienced computer engineers, cybersecurity specialists, and developers dedicated to delivering secure IoT solutions from design to deployment.",
        about_p2: "We believe that security is not an add-on but the foundation of any smart system. That's why all our solutions are built according to international standards including IEC 62443 and ISO 27001.",
        about_p3: "Our mission is to make smart technology accessible, reliable, and secure for homes, businesses, and critical infrastructure.",
        our_values: "Our",
        value1_title: "Security First",
        value1_desc: "Security is embedded in every layer of our solutions.",
        value2_title: "Innovation",
        value2_desc: "We continuously adopt cutting-edge technologies.",
        value3_title: "Trust",
        value3_desc: "Building long-term relationships through transparency.",
        value4_title: "Excellence",
        value4_desc: "Delivering highest quality solutions and support.",
        service1_long: "Complete home automation solution including lighting control, climate control, motorized blinds, and appliance management. All controlled via a single secure app with voice assistant integration.",
        service2_long: "Weather-based smart irrigation controllers that automatically adjust watering schedules based on real-time weather data, soil moisture levels, and plant types.",
        service3_long: "Professional 4K security camera systems with AI-powered motion detection, facial recognition, and end-to-end encryption to prevent unauthorized access.",
        service4_long: "Comprehensive security auditing for IoT ecosystems, identifying vulnerabilities and implementing robust protection measures against cyber threats."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_about: "من نحن",
        nav_blog: "المدونة",
        nav_contact: "اتصل بنا",
        hero_badge: "آمن بالتصميم",
        hero_title1: "اتصالات آمنة،",
        hero_title2: "تحكم ذكي",
        hero_desc: "حلول إنترنت الأشياء الآمنة | سمارت هوم | كاميرات مراقبة | ري عن بعد | أمن سيبراني",
        hero_btn1: "اكتشف خدماتنا",
        hero_btn2: "اطلب استشارة",
        services_title: "خدماتنا",
        services_title_highlight: "المتميزة",
        services_sub: "نقدم حلولاً متكاملة وآمنة تناسب احتياجاتك",
        service1_title: "المنزل الذكي",
        service1_desc: "تحكم ذكي بالإضاءة والتكييف والستائر والأجهزة المنزلية بالكامل، مع أعلى معايير الأمان والتشفير.",
        service2_title: "الري الذكي",
        service2_desc: "نظام ري ذكي عن بعد مع حساسات رطوبة وجدولة آلية لتوفير المياه بنسبة تصل إلى 50%.",
        service3_title: "كاميرات المراقبة",
        service3_desc: "كاميرات مراقبة عالية الوضوح 4K مع تشفير شامل ضد الاختراق، ونظام إنذار فوري.",
        service4_title: "أمن إنترنت الأشياء",
        service4_desc: "تقييم أمني لأجهزة IoT ومنع الثغرات وحماية الشبكات من الهجمات السيبرانية.",
        service5_title: "أمن السحابة",
        service5_desc: "بنية تحتية سحابية آمنة لأجهزة IoT مع تشفير شامل.",
        service6_title: "كشف التهديدات بالذكاء الاصطناعي",
        service6_desc: "كشف التهديدات بالذكاء الاصطناعي وأنظمة الاستجابة التلقائية للحوادث.",
        stat1: "مشروع مكتمل",
        stat2: "عميل سعيد",
        stat3: "خبير أمني",
        stat4: "رضا العملاء",
        footer_desc: "حلول آمنة لإنترنت الأشياء والأمن السيبراني. نحمي عالمك الذكي.",
        quick_links: "روابط سريعة",
        follow_us: "تابعنا",
        copyright: "جميع الحقوق محفوظة",
        services_page_title: "خدماتنا",
        services_page_desc: "حلول أمنية شاملة لإنترنت الأشياء للتحديات الحديثة",
        about_page_title: "من نحن",
        about_page_desc: "شريكك الموثوق في إنترنت الأشياء والأمن السيبراني",
        contact_page_title: "اتصل",
        contact_page_desc: "تواصل مع فريقنا للاستشارات والدعم",
        blog_page_title: "مدونتنا",
        blog_page_desc: "أحدث الأفكار حول أمن إنترنت الأشياء والتكنولوجيا الذكية",
        location: "موقعنا",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        hours: "ساعات العمل",
        read_more: "اقرأ المزيد ←",
        blog1_title: "أهم 5 تهديدات لأمن إنترنت الأشياء في 2026",
        blog1_excerpt: "تعرف على أكثر ثغرات الأمان شيوعاً في أجهزة إنترنت الأشياء...",
        blog2_title: "بناء نظام بيئي آمن للمنزل الذكي",
        blog2_excerpt: "أفضل الممارسات لتأمين أجهزة المنزل الذكي...",
        blog3_title: "بنية الثقة الصفرية لإنترنت الأشياء",
        blog3_excerpt: "تطبيق مبادئ الثقة الصفرية لحماية بنيتك التحتية لإنترنت الأشياء...",
        about_who: "من",
        about_p1: "نحن SpiderScope، فريق متكامل من مهندسي الحاسوب ومختصي الأمن السيبراني والمبرمجين. نقدم حلول إنترنت الأشياء الآمنة من التصميم وحتى التشغيل.",
        about_p2: "نؤمن بأن الأمن ليس إضافة، بل هو الأساس في أي نظام ذكي. لذلك نبني جميع حلولنا وفق أعلى المعايير العالمية مثل IEC 62443 و ISO 27001.",
        about_p3: "مهمتنا هي جعل التكنولوجيا الذكية متاحة وموثوقة وآمنة للمنازل والشركات والبنية التحتية الحيوية.",
        our_values: "قيمنا",
        value1_title: "الأمن أولاً",
        value1_desc: "الأمن مضمن في كل طبقة من حلولنا.",
        value2_title: "الابتكار",
        value2_desc: "نعتمد باستمرار أحدث التقنيات.",
        value3_title: "الثقة",
        value3_desc: "بناء علاقات طويلة الأمد من خلال الشفافية.",
        value4_title: "التميز",
        value4_desc: "تقديم حلول ودعم بأعلى جودة.",
        service1_long: "حل أتمتة منزلي كامل يشمل التحكم في الإضاءة والتحكم في المناخ والستائر الآلية وإدارة الأجهزة. كل ذلك يتم التحكم فيه عبر تطبيق آمن واحد مع دمج المساعد الصوتي.",
        service2_long: "وحدات تحكم ري ذكية تعتمد على الطقس تقوم بضبط جداول الري تلقائياً بناءً على بيانات الطقس الفعلية ومستويات رطوبة التربة وأنواع النباتات.",
        service3_long: "أنظمة كاميرات مراقبة احترافية بدقة 4K مع كشف حركة مدعوم بالذكاء الاصطناعي والتعرف على الوجوه والتشفير الشامل لمنع الوصول غير المصرح به.",
        service4_long: "تدقيق أمني شامل لأنظمة إنترنت الأشياء، وتحديد الثغرات وتنفيذ تدابير حماية قوية ضد التهديدات السيبرانية."
    }
};

let currentLang = 'en';

// Function to update page content
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML direction
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl');
    }
    
    // Update button text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'en' ? '🇸🇦 العربية' : '🇬🇧 English';
    }
    
    localStorage.setItem('spiderscope_lang', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language
    const savedLang = localStorage.getItem('spiderscope_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    } else {
        updateLanguage('en');
    }
    
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguage(currentLang);
        });
    }
    
    // Loader
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hide'), 500);
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
    
    // Mobile menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Scroll to top
    const scrollTop = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) scrollTop.classList.add('show');
        else scrollTop.classList.remove('show');
    });
    scrollTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Fade up animation
    const fadeElements = document.querySelectorAll('.service-card, .stat-card, .blog-card, .value-card');
    function checkFade() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('show');
            }
        });
    }
    fadeElements.forEach(el => el.classList.add('fade-up'));
    window.addEventListener('scroll', checkFade);
    checkFade();
    
    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;
    function animateCounters() {
        if (animated) return;
        const statsSection = document.querySelector('.stats-section');
        if (statsSection && statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            });
            animated = true;
        }
    }
    window.addEventListener('scroll', animateCounters);
    animateCounters();
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;
            
            if (!name || !email || !message) {
                showNotification('Please fill all fields', 'error');
                return;
            }
            
            showNotification('Message sent successfully! We will contact you soon.', 'success');
            contactForm.reset();
        });
    }
    
    // Notification function
    function showNotification(message, type) {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `<span>${message}</span><button class="notification-close">&times;</button>`;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#00B4D8' : '#e94560'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 10000;
            font-weight: 500;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(notification);
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `background: none; border: none; color: white; font-size: 20px; cursor: pointer; margin-left: 15px;`;
        closeBtn.addEventListener('click', () => notification.remove());
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
});