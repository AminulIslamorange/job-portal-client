import { useRef } from "react";
import { useAnimationFrame } from "motion/react";
import { motion } from "framer-motion";

const Banner = () => {
    const imgRef = useRef(null);

    // Continuous floating + rotating animation
    useAnimationFrame((t) => {
        if (!imgRef.current) return;

        const rotateY = Math.sin(t / 1000) * 15; // left-right rotation
        const rotateX = Math.sin(t / 1500) * 10; // tilt effect
        const y = Math.sin(t / 500) * 15; // up-down floating
        imgRef.current.style.transform = `translateY(${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    return (
        <div className="min-h-screen bg-base-200 flex flex-col">


            {/* ================= Hero Banner ================= */}
            <div className="hero flex-1 min-h-[90vh]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                    {/* Animated Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            ref={imgRef}
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Job Banner"
                            className="max-w-sm lg:max-w-md rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1 animate={{ x: 50, color: ['red'] }}
                            transition={{
                                duration:2, delay:1,ease: [0, 0.71, 0.2, 1.01],}}
             className="text-4xl md:text-5xl font-extrabold leading-snug">
                        Latest Job <span className="text-primary">For You!</span>
                    </motion.h1>
                    <p className="py-6 text-base md:text-lg text-gray-600">
                        Find your dream job today. Thousands of opportunities are waiting
                        for you. Start your journey with us and get connected to the best
                        companies.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-outline btn-secondary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>

      {/* ================= Footer ================= */ }
    <footer className="footer footer-center p-6 bg-base-300 text-base-content rounded">
        <p>
            © {new Date().getFullYear()} <span className="font-bold">JobPortal</span>. All rights reserved.
        </p>
    </footer>
    </div >
  );
};

export default Banner;