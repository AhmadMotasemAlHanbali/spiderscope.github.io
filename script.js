/* ========================================
   SpiderScope - Main JavaScript File
   Language Switcher (EN ↔ AR)
   EmailJS Contact Form (sends to infospiderscope@gmail.com)
   ======================================== */

// ========================================
// TRANSLATIONS (English + Arabic)
// ========================================

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_blog: "Blog",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "MVP Ready | In-House Manufacturing",
        hero_title1: "Custom IoT Hardware",
        hero_title2: "From ESP32 to Camera to Cloud",
        hero_desc: "We design, brand, and manufacture bespoke IoT devices for factories, farms, and vehicles. PCB design with KiCad, 3D printed enclosures, ESP32-S3, and camera integration.",
        hero_btn1: "Get Started",
        hero_btn2: "Our Services",
        
        // Capabilities Section
        cap_title: "In-House",
        cap_title_highlight: "Capabilities",
        cap_sub: "We own the entire hardware pipeline. No outsourcing.",
        cap1_title: "PCB Design with KiCad",
        cap1_desc: "Professional PCB design with 3D visualization. We brand your boards with logo on silkscreen. ESP32, STM32, or custom MCUs.",
        cap2_title: "ESP32 & Camera Solutions",
        cap2_desc: "ESP32-S3, ESP32-CAM from Espressif. OV2640/OV5640 cameras. WiFi, BLE, AI, and video streaming.",
        cap3_title: "3D Printing & Enclosures",
        cap3_desc: "FDM and Resin 3D printers. Custom enclosures for any PCB. Your logo embossed on the case.",
        cap4_title: "Firmware & Cloud",
        cap4_desc: "ESP-IDF, Arduino, MicroPython. MQTT, HTTP, LoRa. Custom dashboards for remote monitoring.",
        
        // MVP Section
        mvp_title: "Our MVP is",
        mvp_desc: "We have a working prototype: ESP32-S3 + OV2640 camera + custom KiCad PCB + 3D printed enclosure + cloud streaming. Not a promise. A working product.",
        
        // Stats
        stat1: "Hour Prototype",
        stat2: "In-House %",
        stat3: "Engineers",
        stat4: "3D Printers",
        
        // Footer
        footer_desc: "Custom IoT hardware from PCB to product. In-house manufacturing with 3D printing and ESP32. Branded devices for factories, farms, and vehicles.",
        quick_links: "Quick Links",
        footer_contact: "Contact Us",
        copyright: "All Rights Reserved",
        
        // Services Page
        services_page_title: "Our",
        services_page_desc: "End-to-end IoT hardware solutions from PCB to product",
        service1_title: "Custom PCB Design with KiCad",
        service1_desc: "Professional PCB design using KiCad (open-source, 3D enabled). We create branded boards with your logo on the silkscreen layer. Compatible with ESP32, STM32, and custom MCUs. We export STEP files for perfect 3D printed enclosure fit.",
        service2_title: "ESP32 Camera Solutions",
        service2_desc: "ESP32-S3 and ESP32-CAM from Espressif. OV2640 and OV5640 cameras. Perfect for industrial vision, farm monitoring, and vehicle cameras. Video streaming, motion detection, and AI on the edge.",
        service3_title: "3D Printed Enclosures",
        service3_desc: "In-house 3D printing with FDM and Resin printers. We design custom enclosures that perfectly fit your PCB and camera modules. Your logo embossed or printed on the case. Rapid prototyping within 24 hours.",
        service4_title: "Firmware & Cloud Integration",
        service4_desc: "We write custom firmware for ESP32 using ESP-IDF, Arduino, or MicroPython. Connect your devices to any cloud platform via MQTT, HTTP, or LoRa. Custom dashboards for remote monitoring and control.",
        service5_title: "Full Branding (PCB + Case)",
        service5_desc: "We don't just assemble. We brand every device with your company logo on both the PCB silkscreen and the 3D printed enclosure. Your customers receive a professional, branded product ready for market.",
        
        // About Page
        about_page_title: "About",
        about_page_desc: "From PCB to Product - All under one roof",
        about_who: "Who",
        about_p1: "SpiderScope is a hardware-focused IoT startup. We design and manufacture custom IoT devices for factories, farms, and vehicles. We own the entire pipeline: PCB design with KiCad, 3D printing, firmware development, and cloud integration.",
        about_p2: "We are not a PowerPoint company. We have an office, a car for logistics, 3D printers (FDM & Resin), and in-house hardware engineers. Our MVP is ready: an ESP32-S3 camera module with custom PCB and 3D printed enclosure.",
        about_p3: "Our mission: Make custom IoT hardware accessible, branded, and deployable within 48 hours.",
        readiness_title: "Why We Are",
        readiness1_title: "In-House Engineers",
        readiness1_desc: "Hardware, firmware, and 3D design experts on staff.",
        readiness2_title: "Office Space",
        readiness2_desc: "Dedicated workspace for assembly, testing, and prototyping.",
        readiness3_title: "Company Car",
        readiness3_desc: "Logistics and on-site field testing for client deployments.",
        readiness4_title: "3D Printers",
        readiness4_desc: "FDM for prototypes, Resin for final product enclosures.",
        readiness5_title: "PCB Lab",
        readiness5_desc: "KiCad, soldering stations, oscilloscopes, and testing equipment.",
        readiness6_title: "ESP32 Expertise",
        readiness6_desc: "Official Espressif partners. ESP32-S3, ESP32-CAM, ESP-IDF.",
        
        // Blog Page
        blog_page_title: "Our",
        blog_page_desc: "Insights on custom IoT hardware, ESP32, KiCad, and 3D printing",
        read_more: "Read More →",
        blog1_title: "How to Design a Branded PCB with KiCad",
        blog1_excerpt: "Learn how to add your logo to the silkscreen layer in KiCad and export 3D models for perfect enclosure fit...",
        blog2_title: "ESP32-S3 vs ESP32-CAM: Which One for Your IoT Project?",
        blog2_excerpt: "Compare Espressif's camera modules. Learn about OV2640, OV5640, WiFi, BLE, and AI capabilities...",
        blog3_title: "Designing 3D Printed Enclosures for ESP32 and Cameras",
        blog3_excerpt: "Best practices for designing enclosures that fit perfectly with your PCB. FDM vs Resin for IoT devices...",
        blog4_title: "Streaming Video from ESP32-CAM to Cloud (MQTT & HTTP)",
        blog4_excerpt: "Step-by-step guide to stream video from ESP32-CAM to your custom dashboard. Perfect for industrial monitoring...",
        blog5_title: "Why Branding Your IoT Hardware Matters for Startups",
        blog5_excerpt: "How PCB silkscreen logos and embossed 3D printed cases build trust with customers and investors...",
        blog6_title: "KiCad 3D Viewer: How to Design PCBs That Fit Perfectly in Enclosures",
        blog6_excerpt: "Use KiCad's 3D visualization and STEP export to eliminate design errors before printing...",
        
        // Contact Page
        contact_page_title: "Contact",
        contact_page_desc: "Get a quote for custom PCB, ESP32 cameras, or 3D printed enclosures",
        location: "Our Location",
        email: "Email",
        phone: "Phone",
        hours: "Working Hours"
    },
    
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_blog: "المدونة",
        nav_contact: "اتصل بنا",
        
        // Hero Section
        hero_badge: "المنتج جاهز | تصنيع داخلي",
        hero_title1: "أجهزة إنترنت الأشياء",
        hero_title2: "المخصصة من ESP32 إلى الكاميرا إلى السحابة",
        hero_desc: "نصمم ونصنع أجهزة إنترنت الأشياء حسب الطلب للمصانع والمزارع والمركبات. تصميم PCBs باستخدام KiCad، طباعة ثلاثية الأبعاد، ESP32-S3، وكاميرات.",
        hero_btn1: "ابدأ الآن",
        hero_btn2: "خدماتنا",
        
        // Capabilities Section
        cap_title: "قدراتنا",
        cap_title_highlight: "الداخلية",
        cap_sub: "نمتلك خط الإنتاج بالكامل. لا استعانة بمصادر خارجية.",
        cap1_title: "تصميم PCBs بـ KiCad",
        cap1_desc: "تصميم PCBs احترافي مع تصور ثلاثي الأبعاد. نضع شعارك على اللوحة. ESP32، STM32، أو وحدات تحكم مخصصة.",
        cap2_title: "حلول ESP32 والكاميرات",
        cap2_desc: "ESP32-S3 و ESP32-CAM من Espressif. كاميرات OV2640 و OV5640. واي فاي، بلوتوث، ذكاء اصطناعي، وبث فيديو.",
        cap3_title: "طباعة ثلاثية الأبعاد",
        cap3_desc: "طابعات FDM و Resin. أغلفة مخصصة لأي PCB. شعارك محفور على العلبة.",
        cap4_title: "البرمجيات والسحابة",
        cap4_desc: "ESP-IDF، Arduino، MicroPython. MQTT، HTTP، LoRa. لوحات تحكم مخصصة للمراقبة عن بعد.",
        
        // MVP Section
        mvp_title: "المنتج جاهز",
        mvp_desc: "لدينا نموذج عملي: ESP32-S3 + كاميرا OV2640 + PCB مخصص بـ KiCad + غلاف مطبوع ثلاثي الأبعاد + بث فيديو للسحابة. ليس وعداً. منتج حقيقي.",
        
        // Stats
        stat1: "نموذج أولي بـ 24 ساعة",
        stat2: "تصنيع داخلي 100%",
        stat3: "مهندسين",
        stat4: "طابعة ثلاثية الأبعاد",
        
        // Footer
        footer_desc: "أجهزة إنترنت الأشياء المخصصة من PCB إلى المنتج النهائي. تصنيع داخلي بالكامل مع طباعة ثلاثية الأبعاد و ESP32.",
        quick_links: "روابط سريعة",
        footer_contact: "اتصل بنا",
        copyright: "جميع الحقوق محفوظة",
        
        // Services Page
        services_page_title: "خدماتنا",
        services_page_desc: "حلول أجهزة إنترنت الأشياء المتكاملة من PCB إلى المنتج",
        service1_title: "تصميم PCBs مخصص بـ KiCad",
        service1_desc: "تصميم PCBs احترافي باستخدام KiCad. نصنع لوحات تحمل شعارك على طباعة الشاشة. متوافق مع ESP32 و STM32. نصدر ملفات STEP لطباعة الأغلفة بدقة.",
        service2_title: "حلول كاميرات ESP32",
        service2_desc: "ESP32-S3 و ESP32-CAM من Espressif. كاميرات OV2640 و OV5640. مثالية للرؤية الصناعية ومراقبة المزارع وكاميرات المركبات.",
        service3_title: "أغلفة مطبوعة ثلاثية الأبعاد",
        service3_desc: "طباعة ثلاثية الأبعاد داخلية بطابعات FDM و Resin. نصمم أغلفة مخصصة تناسب PCB ووحدات الكاميرا. شعارك محفور على العلبة.",
        service4_title: "برمجيات وتكامل سحابي",
        service4_desc: "نكتب برمجيات مخصصة لـ ESP32 باستخدام ESP-IDF أو Arduino أو MicroPython. ربط أجهزتك بأي منصة سحابية عبر MQTT أو HTTP.",
        service5_title: "علامة تجارية كاملة (PCB + غلاف)",
        service5_desc: "لا نجمّع فقط. نصنع علامتك التجارية على كل جهاز مع شعارك على PCB والغلاف المطبوع ثلاثي الأبعاد.",
        
        // About Page
        about_page_title: "من نحن",
        about_page_desc: "من PCB إلى المنتج - كل شيء تحت سقف واحد",
        about_who: "من",
        about_p1: "SpiderScope شركة ناشئة متخصصة في أجهزة إنترنت الأشياء. نصمم ونصنع أجهزة مخصصة للمصانع والمزارع والمركبات. نمتلك خط الإنتاج بالكامل.",
        about_p2: "لسنا شركة عروض تقديمية. لدينا مكتب، سيارة، طابعات ثلاثية الأبعاد، ومهندسين. منتجنا جاهز: ESP32-S3 مع كاميرا و PCB مخصص.",
        about_p3: "مهمتنا: جعل أجهزة إنترنت الأشياء المخصصة متاحة وموثوقة وقابلة للتسليم خلال 48 ساعة.",
        readiness_title: "لماذا نحن",
        readiness1_title: "مهندسون داخليون",
        readiness1_desc: "خبراء في تصميم PCBs والبرمجيات والطباعة ثلاثية الأبعاد.",
        readiness2_title: "مكتب",
        readiness2_desc: "مساحة عمل مخصصة للتجميع والاختبار.",
        readiness3_title: "سيارة",
        readiness3_desc: "لوجستيات واختبار ميداني لعملائنا.",
        readiness4_title: "طابعات ثلاثية الأبعاد",
        readiness4_desc: "FDM للنماذج الأولية و Resin للمنتجات النهائية.",
        readiness5_title: "مختبر PCBs",
        readiness5_desc: "KiCad، محطات لحام، راسمات إشارة، ومعدات اختبار.",
        readiness6_title: "خبراء ESP32",
        readiness6_desc: "شركاء مع Espressif. ESP32-S3، ESP32-CAM، ESP-IDF.",
        
        // Blog Page
        blog_page_title: "مدونتنا",
        blog_page_desc: "أفكار حول أجهزة إنترنت الأشياء المخصصة و ESP32 و KiCad والطباعة ثلاثية الأبعاد",
        read_more: "اقرأ المزيد ←",
        blog1_title: "كيف تصمم PCB بشعارك باستخدام KiCad",
        blog1_excerpt: "تعلم كيفية إضافة شعارك إلى طبقة الشاشة في KiCad وتصدير نماذج ثلاثية الأبعاد...",
        blog2_title: "ESP32-S3 ضد ESP32-CAM: أيهما لمشروعك؟",
        blog2_excerpt: "مقارنة بين وحدات الكاميرا من Espressif. تعرف على OV2640، OV5640، WiFi، BLE، والذكاء الاصطناعي...",
        blog3_title: "تصميم أغلفة مطبوعة ثلاثية الأبعاد لـ ESP32 والكاميرات",
        blog3_excerpt: "أفضل الممارسات لتصميم أغلفة تناسب PCB بشكل مثالي...",
        blog4_title: "بث الفيديو من ESP32-CAM إلى السحابة",
        blog4_excerpt: "دليل خطوة بخطوة لبث الفيديو من ESP32-CAM إلى لوحة التحكم الخاصة بك...",
        blog5_title: "لماذا العلامة التجارية لأجهزة إنترنت الأشياء مهمة للشركات الناشئة",
        blog5_excerpt: "كيف تبني شعارات PCB والأغلفة المطبوعة الثقة مع العملاء والمستثمرين...",
        blog6_title: "عارض KiCad ثلاثي الأبعاد: كيف تصمم PCBs تتناسب تماماً مع الأغلفة",
        blog6_excerpt: "استخدم التصور ثلاثي الأبعاد في KiCad وتصدير STEP لتجنب أخطاء التصميم...",
        
        // Contact Page
        contact_page_title: "اتصل",
        contact_page_desc: "احصل على عرض سعر لـ PCB مخصص أو كاميرات ESP32 أو أغلفة مطبوعة ثلاثية الأبعاد",
        location: "موقعنا",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        hours: "ساعات العمل"
    }
};

// ========================================
// EMAILJS CONFIGURATION
// ========================================
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com
// 1. Create account
// 2. Add Email Service (Gmail) and connect infospiderscope@gmail.com
// 3. Create Email Template with variables: {{name}}, {{email}}, {{message}}
// 4. Get your Public Key from Account → API Keys

const EMAILJS_CONFIG = {
    PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",      // Replace with your EmailJS public key
    SERVICE_ID: "YOUR_SERVICE_ID_HERE",      // Replace with your EmailJS service ID
    TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE"     // Replace with your EmailJS template ID
};

// Initialize EmailJS
if (EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE") {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

// ========================================
// GLOBAL VARIABLES
// ========================================
let currentLang = 'en';

// ========================================
// LANGUAGE FUNCTIONS
// ========================================
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
    
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl');
    }
    
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'en' ? '🇸🇦 العربية' : '🇬🇧 English';
    }
    
    localStorage.setItem('spiderscope_lang', lang);
}

// ========================================
// NOTIFICATION FUNCTION
// ========================================
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
        display: flex;
        align-items: center;
        gap: 15px;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
    `;
    closeBtn.addEventListener('click', () => notification.remove());
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ========================================
// CONTACT FORM HANDLER (EmailJS)
// ========================================
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        
        if (!name || !email || !message) {
            showNotification('Please fill all fields', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Check if EmailJS is configured
        if (EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY_HERE") {
            console.warn('EmailJS not configured. Form submission simulated.');
            setTimeout(() => {
                showNotification('Demo: Message would be sent to infospiderscope@gmail.com', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
            return;
        }
        
        // Send via EmailJS
        emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            {
                name: name,
                email: email,
                message: message,
                to_email: 'infospiderscope@gmail.com'
            }
        ).then(function(response) {
            console.log('EmailJS Success:', response);
            showNotification('Message sent successfully! We will respond within 24 hours.', 'success');
            contactForm.reset();
        }).catch(function(error) {
            console.error('EmailJS Error:', error);
            showNotification('Failed to send. Please email us directly at infospiderscope@gmail.com', 'error');
        }).finally(function() {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// ========================================
// COUNTER ANIMATION
// ========================================
function setupCounters() {
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
}

// ========================================
// FADE UP ANIMATION
// ========================================
function setupFadeUp() {
    const fadeElements = document.querySelectorAll('.cap-card, .service-card, .stat-card, .blog-card, .readiness-card, .service-item');
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
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========================================
// MOBILE MENU
// ========================================
function setupMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!menuBtn || !navLinks) return;
    
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
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ========================================
// SCROLL TO TOP
// ========================================
function setupScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (!scrollTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// LOADER
// ========================================
function setupLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hide'), 500);
    }
}

// ========================================
// LANGUAGE TOGGLE
// ========================================
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;
    
    const savedLang = localStorage.getItem('spiderscope_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    } else {
        updateLanguage('en');
    }
    
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(currentLang);
    });
}

// ========================================
// INITIALIZE EVERYTHING
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    setupLoader();
    setupHeaderScroll();
    setupMobileMenu();
    setupScrollTop();
    setupLanguageToggle();
    setupContactForm();
    setupCounters();
    setupFadeUp();
});