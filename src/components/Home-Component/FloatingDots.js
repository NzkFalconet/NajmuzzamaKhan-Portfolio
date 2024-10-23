import React, { useEffect, useRef } from 'react';
import './FloatingDots.css';

const FloatingDots = () => {
    const dotsRef = useRef([]);

    // Function to create dots
    const createDots = (numDots) => {
        const dots = [];
        for (let i = 0; i < numDots; i++) {
            const style = {
                position: 'absolute',
                top: `${Math.random() * 100}vh`, // Random vertical position
                left: `${Math.random() * 100}vw`, // Random horizontal position
            };
            dots.push(<div className="dot" key={i} style={style} ref={el => (dotsRef.current[i] = el)} />);
        }
        return dots;
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const dots = dotsRef.current;
            dots.forEach(dot => {
                // Slight offsets to keep the dots close to the cursor
                const xOffset = (Math.random() - 0.5) * 15; // Adjust distance as needed
                const yOffset = (Math.random() - 0.5) * 15; // Adjust distance as needed

                // Set new position within bounds
                const newX = Math.max(0, Math.min(e.clientX + xOffset, window.innerWidth - 10)); // -10 for dot width
                const newY = Math.max(0, Math.min(e.clientY + yOffset, window.innerHeight - 10)); // -10 for dot height

                dot.style.transform = `translate(${newX}px, ${newY}px)`; // Move dots towards mouse
            });
        };

        // Attach the mouse move event listener
        document.addEventListener('mousemove', handleMouseMove);

        // Create dots when component mounts
        createDots(50);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="floating-dots">
            {createDots(50)} {/* Adjust the number of dots here */}
        </div>
    );
};

export default FloatingDots;
