
import studentsGroup11 from '../assets/m.jpeg';
import studentsGroup1 from '../assets/WhatsApp Image 2025-10-08 at 12.46.03 AM.jpeg';
import studentsGroup2 from '../assets/fiv.jpeg';
import studentsGroup3 from '../assets/first.jpeg';
import studentsGroup4 from '../assets/foue.jpeg';
import studentsGroup5 from '../assets/twoo.jpeg';
import studentsGroup6 from '../assets/third.jpeg';
import studentsGroup7 from '../assets/WhatsApp Image 2025-10-08 at 12.46.07 AM.jpeg';
import studentsGroup13 from '../assets/WhatsApp Image 2025-10-08 at 12.46.06 AM (4).jpeg';
import studentsGroup9 from '../assets/j.jpeg';
import studentsGroup10 from '../assets/WhatsApp Image 2025-10-08 at 12.46.06 AM.jpeg';
import studentsGroup12 from '../assets/WhatsApp Image 2025-10-08 at 12.46.07 AM.jpeg';

export const StudentsGalleryPreview = () => {
  const galleryImages = [
    { src: studentsGroup1, alt: "IT Gate Academy Students Group 2" },
    { src: studentsGroup2, alt: "IT Gate Academy Students Group 3" },
    { src: studentsGroup3, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup4, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup5, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup6, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup7, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup9, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup10, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup11, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup12, alt: "IT Gate Academy Students Group 4" },
    { src: studentsGroup13, alt: "IT Gate Academy Students Group 4" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary sm:text-5xl">
          Our Success Stories: <span className="text-accent">Our Students</span> 📸
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          See the vibrant community and the future tech leaders we&apos;re building.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] border border-gray-700/50"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover object-center" 
              style={{ height: '300px' }} 
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="/gallery"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-background bg-accent hover:bg-accent/80 transition duration-300 ease-in-out transform hover:scale-[1.05]"
        >
          View Full Gallery &rarr;
        </a>
      </div>
    </section>
  );
};