// Fireworks.js
import React, { useEffect } from "react";
import "./Fireworks.css"; // Assuming you've moved the CSS to a separate file

const Fireworks = () => {
  // Function to create a firework
  const createFirework = () => {
    const firework = document.createElement("div");
    firework.className = "firework";
    // firework.style.left = `${Math.random() * window.innerWidth - 20}px`;
    firework.style.left = `${
      Math.random() * (document.body.scrollWidth - 20)
    }px`;
    firework.style.top = `${Math.random() * window.innerHeight - 20}px`;
    firework.style.backgroundColor = getRandomColor();
    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 2000);

    firework.addEventListener("animationend", () => {
      firework.remove();
    });
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const interval = setInterval(createFirework, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fireworks-container">
      {/* This div acts as the container for the fireworks, if necessary */}
    </div>
  );
};

export default Fireworks;
