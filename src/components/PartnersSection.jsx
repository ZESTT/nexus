// src/components/PartnersSection.jsx
// يمكنك استيراد صور الشركاء هنا (تأكد من وجود مسار صحيح لملفات الصور)
import NexusLogo from '../assets/p.png'; // استخدم شعار Nexus أو الشعار الخاص بالشركة الجديدة
import ITGateLogo from '../assets/o.png'; // شعار IT Gate Academy
// 💡 أضف شعار الشركة الشريكة الجديدة هنا (بافتراض أن اسمها 'GoldPartnerCompany')
import GoldPartnerLogo from '../assets/o.png'; 

// يمكنك تغيير اسم الأكاديمية حسب ما يناسب مشروعك الحالي (Nexus أو IT Gate)
const ACADEMY_NAME = "Nexus Academy";

const PARTNERS = [
  {
    name: "IT Gate Academy",
    logo: ITGateLogo,
    type: "Powered By", // يمكنك تغيير النوع
  },
  {
    name: "Gold Partner Company",
    logo: GoldPartnerLogo,
    type: "Gold Partner", // الشركة الجديدة
  },
  {
    name: "Another Partner Name",
    logo: "https://via.placeholder.com/150", // مثال لشعار خارجي
    type: "Strategic Partner",
  },
];

export const PartnersSection = () => {
  return (
    // الخلفية: bg-secondary/30
    <section id="partners" className="py-10 md:py-28 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
             🤝  شركاء النجاح <span className="text-primary" >   والمصداقية </span> 
          </h2>
          {/* النص الوصفي: نص داكن في الفاتح ورمادي فاتح في الداكن */}
          <p className="mt-4 text-3xl  text-gray-900 dark:text-gray-400 max-w-3xl mx-auto font-extrabold">
            نحن نفخر بشراكتنا مع رواد التعليم لضمان أفضل جودة تعليمية وتوظيف لخريجينا.
          </p>
        </div>
        
        {/* 2. بطاقة الشريك الذهبي (تبرز الشريك الجديد) */}
        {PARTNERS.slice(1, 2).map((partner) => (
            <div 
                key={partner.name}
                className="bg-gradient-to-r from-white to-amber-100 dark:from-white dark:to-black-900/50 p-6 rounded-2xl shadow-xl ring-2 ring-black dark:ring-white mb-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between transition-all duration-500"
            >
                <div className="text-center md:text-right">
                    {/* نص الشريك الذهبي: لون كهرماني في الفاتح، أصفر فاتح في الداكن */}
                    <p className="text-sm font-semibold text-amber-600 dark:text-yellow-400 uppercase tracking-wider">
                        شريك ذهبي حصري
                    </p>
                    {/* اسم الشركة: أسود داكن في الفاتح، أبيض في الداكن */}
                    <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                        {partner.name}
                    </h3>
                    {/* الوصف: رمادي داكن في الفاتح، رمادي فاتح في الداكن */}
                    <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                        لضمان حصول طلابنا على أفضل فرص التدريب والتوظيف في السوق التقني.
                    </p>
                </div>
                <div className="mt-6 md:mt-0 md:mr-6">
                    <img
                        src={partner.logo}
                        alt={`شعار ${partner.name}`}
                        className="h-40 w-auto object-contain "
                    />
                </div>
            </div>
        ))}


       
      </div>
    </section>
  );
};