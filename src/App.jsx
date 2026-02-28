import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    // Headline stagger animation
    gsap.fromTo(
      lettersRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Stats animation
    gsap.fromTo(
      ".stat",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Scroll-based animation
    gsap.to(imageRef.current, {
      y: -200,
      scale: 1.1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>

        {/* Headline */}
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

        {/* Stats */}
        <div className="flex gap-12 mt-12 text-center relative z-10">
          <div className="stat">
            <h2 className="text-3xl font-bold">98%</h2>
            <p className="text-sm text-gray-400">Customer Satisfaction</p>
          </div>

          <div className="stat">
            <h2 className="text-3xl font-bold">120K+</h2>
            <p className="text-sm text-gray-400">Active Users</p>
          </div>

          <div className="stat">
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p className="text-sm text-gray-400">App Rating</p>
          </div>
        </div>

        {/* Main Visual */}
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          className="absolute bottom-0 w-[600px] opacity-80 object-contain z-0"
          alt="Car"
        />
      </section>

      {/* Extra scroll space */}
      <section className="h-[150vh] bg-black"></section>
    </>
  );
}

export default App;