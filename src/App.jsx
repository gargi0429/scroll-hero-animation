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
      { y: 80, opacity: 0, filter: "blur(8px)" },
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
      y: -300,
      scale: 1.2,
      rotate: 1,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.3,
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
        <div className="absolute w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full top-[-200px] z-0"></div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-[0.35em] flex relative z-10 text-white/90">
          {headline.map((letter, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-gray-400 text-lg tracking-wide relative z-10">
          Scroll-Animation TASK
        </p>

        <div className="flex gap-16 mt-16 text-center relative z-10">
          <div className="stat backdrop-blur-md bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <h2 className="text-4xl font-bold text-white">98%</h2>
            <p className="text-sm text-gray-400 mt-1">
              Customer Satisfaction
            </p>
          </div>

          <div className="stat backdrop-blur-md bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <h2 className="text-4xl font-bold text-white">120K+</h2>
            <p className="text-sm text-gray-400 mt-1">
              Active Users
            </p>
          </div>

          <div className="stat backdrop-blur-md bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <h2 className="text-4xl font-bold text-white">4.9★</h2>
            <p className="text-sm text-gray-400 mt-1">
              App Rating
            </p>
          </div>
        </div>

        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          alt="Car"
          className="absolute bottom-[-40px] w-[650px] opacity-90 object-contain z-0"
        />
      </section>

      <section className="h-[150vh] bg-gradient-to-b from-black to-gray-900"></section>
    </>
  );
}

export default App;