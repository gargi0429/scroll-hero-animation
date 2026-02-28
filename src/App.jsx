import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
  
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

 
    gsap.fromTo(
      lettersRef.current,
      {
        y: 80,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 1.2,
        ease: "power4.out",
      }
    );


    gsap.fromTo(
      ".stat",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      }
    );


    gsap.to(imageRef.current, {
      y: -250,
      scale: 1.15,
      ease: "none", 
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }, []);

  const headline = "WELCOME ITZFIZZ".split("");

  return (
    <>
      <section
        ref={heroRef}
        className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white"
      >
 
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>

     
        <h1 className="text-4xl md:text-7xl tracking-[0.5em] font-bold flex relative z-10">
          {headline.map((letter, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
            >
              {letter}
            </span>
          ))}
        </h1>


        <div className="flex gap-12 mt-12 text-center relative z-10">
          <div className="stat">
            <h2 className="text-3xl font-bold">98%</h2>
            <p className="text-sm text-gray-400">
              Customer Satisfaction
            </p>
          </div>

          <div className="stat">
            <h2 className="text-3xl font-bold">120K+</h2>
            <p className="text-sm text-gray-400">
              Active Users
            </p>
          </div>

          <div className="stat">
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p className="text-sm text-gray-400">
              App Rating
            </p>
          </div>
        </div>

    
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          alt="Car"
          className="absolute bottom-0 w-[600px] opacity-80 object-contain z-0"
        />
      </section>

    
      <section className="h-[150vh] bg-black"></section>
    </>
  );
}

export default App;