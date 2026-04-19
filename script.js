/* ========================================
   SpiderScope - Smart IoT & Cyber Security
   Professional JavaScript File
   ======================================== */

// ---------- انتظار تحميل الصفحة بالكامل ----------
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. إخفاء شاشة التحميل (Loader) ==========
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 500);
    }
    
    // ========== 2. تأثير الهيدر عند التمرير ==========
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // ========== 3. تفعيل الروابط النشطة حسب التمرير ==========
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // ========== 4. قائمة الجوال (Mobile Menu) ==========
    const menuBtn = document.querySelector('.menu-btn');
    const navLinksMenu = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinksMenu.classList.toggle('active');
            // تغيير أيقونة القائمة
            const icon = menuBtn.querySelector('i');
            if (navLinksMenu.classList.contains('active')) {
                icon.innerHTML = '✕';
            } else {
                icon.innerHTML = '☰';
            }
        });
    }
    
    // إغلاق القائمة عند الضغط على رابط
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinksMenu.classList.remove('active');
            if (menuBtn) {
                menuBtn.querySelector('i').innerHTML = '☰';
            }
        });
    });
    
    // ========== 5. زر العودة للأعلى (Scroll to Top) ==========
    const scrollTop = document.querySelector('.scroll-top');
    
    if (scrollTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTop.classList.add('show');
            } else {
                scrollTop.classList.remove('show');
            }
        });
        
        scrollTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========== 6. تأثير ظهور العناصر عند التمرير (Fade Up) ==========
    const fadeElements = document.querySelectorAll('.service-card, .about-content, .contact-card, .stat');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    }
    
    // إضافة كلاس fade-up للعناصر
    fadeElements.forEach(element => {
        element.classList.add('fade-up');
    });
    
    window.addEventListener('scroll', checkFade);
    checkFade();
    
    // ========== 7. معالجة نموذج الاتصال ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع البيانات
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const message = document.getElementById('message')?.value || '';
            
            // التحقق من صحة البيانات
            if (!name || !email || !message) {
                showNotification('الرجاء تعبئة جميع الحقول', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('الرجاء إدخال بريد إلكتروني صحيح', 'error');
                return;
            }
            
            // محاكاة إرسال النموذج (يمكن ربطها بخدمة خلفية لاحقاً)
            showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
            contactForm.reset();
        });
    }
    
    // ========== 8. التحقق من صحة البريد الإلكتروني ==========
    function isValidEmail(email) {
        const re = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        return re.test(email);
    }
    
    // ========== 9. عرض إشعارات منبثقة ==========
    function showNotification(message, type) {
        // حذف أي إشعار سابق
        const oldNotification = document.querySelector('.notification');
        if (oldNotification) {
            oldNotification.remove();
        }
        
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // تنسيق الإشعار
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#e94560' : '#ff4444'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 10000;
            font-weight: 500;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            animation: slideUp 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // إغلاق الإشعار
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0 5px;
        `;
        
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // إخفاء تلقائي بعد 5 ثواني
        setTimeout(() => {
            if (notification) {
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // ========== 10. كتابة النص بشكل تدريجي (Typing Effect) ==========
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = ['Smart Home', 'Smart Irrigation', 'Security Cameras', 'IoT Security'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
        
        typeEffect();
    }
    
    // ========== 11. تأثير الماوس المخصص (Custom Cursor) ==========
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // تكبير المؤشر عند المرور على الأزرار
        const buttons = document.querySelectorAll('a, button, .service-card');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.opacity = '0.5';
            });
            button.addEventListener('mouseleave', () => {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
                cursor.style.opacity = '0.3';
            });
        });
    }
    
    // ========== 12. حماية من النقر بزر الأيمن (اختياري) ==========
    // يمكن تفعيله إذا أردتم حماية المحتوى
    /*
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showNotification('حماية المحتوى مفعلة', 'error');
    });
    */
    
    // ========== 13. إحصائيات متحركة (Counter Animation) ==========
    const stats = document.querySelectorAll('.stat h3');
    let animated = false;
    
    function animateStats() {
        if (animated) return;
        
        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            const sectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target') || stat.textContent);
                    let current = 0;
                    const increment = target / 50;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            stat.textContent = Math.ceil(current) + (stat.textContent.includes('+') ? '+' : '');
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                        }
                    };
                    
                    updateCounter();
                });
                animated = true;
            }
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats();
});

// ========== 14. منع فتح أدوات المطور (تنبيه بسيط) ==========
// هذا للإزعاج فقط وليس حماية حقيقية
setInterval(() => {
    const devToolsOpen = /./;
    if (typeof devToolsOpen === 'function') {
        // مجرد تنبيه بسيط
        console.log('%c🔒 SpiderScope - Protected Content', 'color: #e94560; font-size: 16px;');
    }
}, 1000);
