// src/components/FacebookFeedSection.jsx

const FACEBOOK_POSTS = [
  {
    id: 1,

    embedCode: `
      <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02kKUqxQbrE7AwZUgLUbSN88ujQg3vEF4VfHPja9YZKXqrzFQyNMAocn4qAGfY3Qg2l%26id%3D61578330155814&show_text=true&width=500" 
        width="100%" 
        height="600" 
        style="border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Post 1 - Web Development Diploma"
      ></iframe>
    `,
  },
  {
    id: 2,
 
    embedCode: `
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid033GUracyGUoEKp8esWLuKZv8GLRD58vH8ckQb5vSKqNM8o287jiaE7GfVHm7n9dW5l%26id%3D61578330155814&show_text=true&width=500"
       width="100%" 
        height="600" 
         style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    `,
  },
  {
      id: 3,
   
    embedCode: `
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid038Bjj2khVYNzpmTif6qpYgJk5qxCfRtfTYWJzmDcGvvTLwZxcJSUQ6wcEhnbMP1XQl%26id%3D61578330155814&show_text=true&width=500" width="100%" height="703" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    `,
    
  },
    {
      id: 3,
   
    embedCode: `
<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61578330155814%2Fvideos%2F4136953569884526%2F&show_text=true&width=267&t=0" width="100%" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>    `,
    
  }
];

export const FacebookFeedSection = () => {
  return (
    <section id="social-feed" className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary sm:text-5xl">
            <span className="text-accent">Last News</span> 📢
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
           Our Students Success ♡
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {FACEBOOK_POSTS.map((post) => (
            <div 
              key={post.id} 
              className="w-full max-w-sm sm:max-w-[480px] p-2 bg-card rounded-xl shadow-lg border border-gray-700/50"
            >
              <div
                className="facebook-embed-container"
                
                dangerouslySetInnerHTML={{ __html: post.embedCode }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
            <a 
              href="https://www.facebook.com/your-page-url" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-background bg-primary hover:bg-primary/90 transition duration-300"
            >
              تابع صفحتنا على فيسبوك
            </a>
          </div>

      </div>
    </section>
  );
};