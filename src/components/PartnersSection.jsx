// src/components/PartnersSection.jsx
import React, { useState, useEffect, useRef } from 'react'; 

// =======================================================
// الخطاف المخصص Intersection Observer Hook
// =======================================================
const useIntersectionObserver = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // ... (باقي الكود الخاص بالخطاف)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};


// =======================================================
// مكون TypingText (تأثير الكتابة)
// =======================================================
const TypingText = ({ text, delay = 50, className = "", shouldStart = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  
  // ... (باقي الكود الخاص بمكون الكتابة)
  useEffect(() => {
    if (!shouldStart) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, text, shouldStart]);

  const cursorClass = index === text.length ? '' : 'border-r-2 border-primary animate-pulse';

  return (
    <span className={`${className} ${cursorClass}`}>
      {shouldStart ? displayedText : ''}
    </span>
  );
};


// =======================================================
// بيانات الشركاء (Partners Data)
// =======================================================
// استيراد الشعارات المرفوعة
import NexusLogo from '../assets/p.png'; 
import ITGateLogo from '../assets/o.png'; 
import GDSCLogo from '../assets/g.png'; 
import EngineersSyndicateLogo from '../assets/nn.png'; // 🔑 شعار نقابة المهندسين المصرية
import PlaceholderO from '../assets/o.png'; 

// 💡 شعار جامعة عين شمس (يفترض وجود مسار له بعد البحث)
import Ain from '../assets/ain.png'; 


const ACADEMY_NAME = "Nexus Academy";
const PARTNERS = [
  {
    name: "IT Gate Academy",
    logo: ITGateLogo,
    type: "Powered By",
  },
  {
    name: "Gold Partner Company",
    logo: PlaceholderO, 
    type: "Gold Partner",
  },
  {
    name: "Google Developer Student Clubs",
    logo: GDSCLogo,
    type: "Community Partner", 
  },
  // 🔑 إضافة الاعتمادات التي نسعى إليها كمدخلات بيانات
  {
    name: "نقابة المهندسين المصرية",
    logo: EngineersSyndicateLogo,
    type: "Accreditation Goal",
  },
  {
    name: "جامعة عين شمس",
    logo: Ain,
    type: "Accreditation Goal",
  },
];

// =======================================================
// مكون PartnersSection (الرئيسي)
// =======================================================
export const PartnersSection = () => {
    const [sectionRef, sectionIsVisible] = useIntersectionObserver({
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    });
    
    // النصوص الرئيسية
    const titlePart1 = "شركاء النجاح";
    // 🔑 تحديث النص الوصفي ليشمل السعي للاعتماد
    const descriptionText = "نحن نفخر بشراكتنا مع رواد التعليم لضمان أفضل جودة تعليمية وتوظيف لخريجينا، كما نسعى حالياً لإنهاء اعتماداتنا من كبرى المؤسسات المصرية.";
    
    // تحديد الشركاء المتميزين للعرض في شبكة
    const featuredPartners = PARTNERS.filter(p => 
        p.type === "Gold Partner" || p.type === "Community Partner"
    );

    // 🔑 تحديد الاعتمادات المستهدفة
    const accreditationGoals = PARTNERS.filter(p => p.type === "Accreditation Goal");


  return (
    <section ref={sectionRef} id="partners" className="py-10 md:py-28 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. العنوان الرئيسي مع تأثير الكتابة */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
             🤝  
             <TypingText 
                text={titlePart1} 
                className="text-gray-900 dark:text-white" 
                delay={70} 
                shouldStart={sectionIsVisible}
             />
             <span className="text-primary"> </span>
            
          </h2>
          
          {/* 🔑 النص الوصفي المحدث */}
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <TypingText 
                text={descriptionText} 
                delay={30} 
                className="font-extrabold"
                shouldStart={sectionIsVisible}
            />
          </p>
        </div>
        
        {/* 2. بطاقات الشركاء المتميزة (شبكة) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {featuredPartners.map((partner) => {
                // ... (منطق تحديد النصوص والألوان)
                const isGoldPartner = partner.type === "Gold Partner";
                const cardSubtitle = isGoldPartner ? "شريك ذهبي حصري" : "شريك مجتمعي تقني";
                const cardDescription = isGoldPartner 
                    ? "لضمان حصول طلابنا على أفضل فرص التدريب والتوظيف في السوق التقني."
                    : "لتوفير ورش عمل متقدمة وتحديات برمجية دولية لطلابنا.";
                const subtitleColor = isGoldPartner ? "text-primary dark:text-primary" : "text-green-500 dark:text-green-400";
                
                return (
                    <div 
                        key={partner.name}
                        // تصميم الزجاج المصنفر
                        className="
                            relative 
                            bg-white/5 dark:bg-card/30 backdrop-blur-md 
                            p-8 rounded-2xl 
                            shadow-2xl shadow-primary/20 
                            ring-1 ring-border/50 
                            flex flex-col md:flex-row items-center justify-between 
                            transition-all duration-500 h-full
                            hover:shadow-3xl hover:shadow-primary/30 hover:scale-[1.01]
                        "
                    >
                        <div className="text-center md:text-right">
                            <p className={`text-sm font-semibold ${subtitleColor} uppercase tracking-wider`}>
                                <TypingText text={cardSubtitle} delay={30} shouldStart={sectionIsVisible} />
                            </p>
                            <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                                <TypingText text={partner.name} delay={50} shouldStart={sectionIsVisible} />
                            </h3>
                            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                                <TypingText text={cardDescription} delay={20} shouldStart={sectionIsVisible} />
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 md:mr-6 flex-shrink-0">
                            <img
                                src={partner.logo}
                                alt={`شعار ${partner.name}`}
                                className="h-40 w-auto object-contain "
                            />
                        </div>
                    </div>
                );
            })}
        </div>


        {/* 3. 🔑 قسم الاعتمادات قيد العمل (Accreditation Goals) */}
        <div className="text-center mx-auto mt-20 mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                ✨ اعتماداتنا المستقبلية 
            </h3>
            <p className="mt-3 text-lg text-primary dark:text-primary/80 max-w-4xl mx-auto font-semibold">
                نعمل حاليًا على الاعتماد لضمان أعلى مستويات المصداقية لخريجينا.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {accreditationGoals.map((goal) => (
                <div 
                    key={goal.name}
                    className="
                        bg-white/5 dark:bg-card/30 backdrop-blur-sm 
                        p-6 rounded-xl shadow-lg ring-1 ring-primary/20 
                        text-center transition-all duration-300
                        hover:ring-primary hover:shadow-xl
                    "
                >
                    <img
                        src={goal.logo}
                        alt={`شعار ${goal.name}`}
                        className="h-20 w-auto object-contain mx-auto mb-4 opacity-50 transition-opacity duration-300 hover:opacity-100"
                    />
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {goal.name}
                    </p>
                    <p className="mt-1 text-sm text-amber-500 dark:text-amber-400 font-medium">
                        (قيد الاعتماد حاليًا)
                    </p>
                </div>
            ))}
        </div>
       
      </div>
    </section>
  );
};