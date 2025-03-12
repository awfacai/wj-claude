[HTML]
<<<<<<< SEARCH
<div id="app">
  <div class="cyberpunk-grid"></div>
  <div class="control-wrapper">
=======
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Dave Wong - The Voice of Eternal Romance">
  <title>Dave Wong - The Voice of Eternal Romance</title>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Play:wght@400;700&display=swap');

:root {
  --primary-color: #00f3ff;
  --primary-color-dark: #00a7b5;
  --secondary-color: #ff00c1;
  --secondary-color-dark: #a00078;
  --accent-color: #d400ff;
  --accent-color-2: #00ff6a;
  --text-color: #ffffff;
  --bg-color: #0a0a12;
  --bg-color-light: #1a1a2e;
  --bg-gradient: linear-gradient(135deg, #0a0a12 0%, #1a1a2e 100%);
  --shadow-neon: 0 0 10px rgba(0, 243, 255, 0.7), 0 0 20px rgba(0, 243, 255, 0.5), 0 0 40px rgba(0, 243, 255, 0.3);
  --shadow-neon-2: 0 0 10px rgba(255, 0, 193, 0.7), 0 0 20px rgba(255, 0, 193, 0.5), 0 0 40px rgba(255, 0, 193, 0.3);
  --shadow-neon-3: 0 0 10px rgba(212, 0, 255, 0.7), 0 0 20px rgba(212, 0, 255, 0.5), 0 0 40px rgba(212, 0, 255, 0.3);
  --shadow-neon-4: 0 0 10px rgba(0, 255, 106, 0.7), 0 0 20px rgba(0, 255, 106, 0.5), 0 0 40px rgba(0, 255, 106, 0.3);
  --container-max-width: 1400px;
  --container-padding: 20px;
  --section-spacing: 60px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Play', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg-gradient);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  scroll-behavior: smooth;
  font-size: 16px;
}

html {
  scroll-behavior: smooth;
}

.cyberpunk-text {
  text-shadow: 1px 1px 0 var(--primary-color-dark);
  position: relative;
  z-index: 1;
}

.cyberpunk-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(10, 10, 18, 0.9) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 10, 18, 0.9) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center center;
  z-index: -1;
  opacity: 0.3;
  pointer-events: none;
  will-change: transform;
}

.control-wrapper {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  gap: 15px;
}

.neon-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.1) 0%, transparent 80%);
  z-index: 0;
  pointer-events: none;
  opacity: 0.8;
}

.neon-hr {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), var(--secondary-color), transparent);
  margin: 15px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.neon-hr::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: neon-hr-shine 2s infinite;
}

@keyframes neon-hr-shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.zh {
  display: none;
}

.en {
  display: block;
}

.language-switcher {
  background: rgba(10, 10, 18, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 1px solid var(--primary-color);
  box-shadow: var(--shadow-neon);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.language-switcher:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-neon), 0 10px 20px rgba(0, 0, 0, 0.2);
}

.language-switcher button {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;
  border-radius: 20px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}

.language-switcher button.active {
  background: var(--primary-color);
  color: var(--bg-color);
  text-shadow: none;
}

.language-switcher .divider {
  color: var(--primary-color);
  margin: 0 2px;
}

.background-toggle {
  background: rgba(10, 10, 18, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--secondary-color);
  box-shadow: var(--shadow-neon-2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.background-toggle:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-neon-2), 0 10px 20px rgba(0, 0, 0, 0.2);
}

.background-toggle button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.background-toggle button.active {
  background: var(--secondary-color);
}

.music-icon, .music-off-icon {
  width: 20px;
  height: 20px;
  background-color: var(--bg-color);
  mask-size: cover;
  -webkit-mask-size: cover;
}

.music-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'/%3E%3C/svg%3E");
}

.music-off-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z'/%3E%3C/svg%3E");
  display: none;
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background: var(--bg-gradient);
  padding: 0 var(--container-padding);
  border-bottom: 2px solid var(--primary-color);
  box-shadow: 0 10px 30px rgba(0, 243, 255, 0.1);
  margin: 0 auto;
  width: 100%;
}

.cherry-blossom-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  perspective: 1000px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.glitch {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: var(--text-color);
  letter-spacing: 5px;
  margin: 0;
  animation: glitch-skew 1s infinite linear alternate-reverse;
  font-family: 'Orbitron', sans-serif;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 var(--primary-color);
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 var(--secondary-color);
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
    transform: skew(0.85deg);
  }
  5% {
    clip: rect(70px, 9999px, 46px, 0);
    transform: skew(0.48deg);
  }
  10% {
    clip: rect(9px, 9999px, 76px, 0);
    transform: skew(0.73deg);
  }
  15% {
    clip: rect(46px, 9999px, 7px, 0);
    transform: skew(0.3deg);
  }
  20% {
    clip: rect(28px, 9999px, 92px, 0);
    transform: skew(0.66deg);
  }
  25% {
    clip: rect(20px, 9999px, 23px, 0);
    transform: skew(0.91deg);
  }
  30% {
    clip: rect(17px, 9999px, 2px, 0);
    transform: skew(0.59deg);
  }
  35% {
    clip: rect(9px, 9999px, 90px, 0);
    transform: skew(0.33deg);
  }
  40% {
    clip: rect(52px, 9999px, 74px, 0);
    transform: skew(0.56deg);
  }
  45% {
    clip: rect(91px, 9999px, 3px, 0);
    transform: skew(0.29deg);
  }
  50% {
    clip: rect(48px, 9999px, 53px, 0);
    transform: skew(0.18deg);
  }
  55% {
    clip: rect(42px, 9999px, 84px, 0);
    transform: skew(0.4deg);
  }
  60% {
    clip: rect(23px, 9999px, 22px, 0);
    transform: skew(0.71deg);
  }
  65% {
    clip: rect(34px, 9999px, 49px, 0);
    transform: skew(0.69deg);
  }
  70% {
    clip: rect(34px, 9999px, 80px, 0);
    transform: skew(0.92deg);
  }
  75% {
    clip: rect(67px, 9999px, 98px, 0);
    transform: skew(0.94deg);
  }
  80% {
    clip: rect(27px, 9999px, 54px, 0);
    transform: skew(0.31deg);
  }
  85% {
    clip: rect(42px, 9999px, 18px, 0);
    transform: skew(0.93deg);
  }
  90% {
    clip: rect(2px, 9999px, 14px, 0);
    transform: skew(0.41deg);
  }
  95% {
    clip: rect(69px, 9999px, 3px, 0);
    transform: skew(0.65deg);
  }
  100% {
    clip: rect(61px, 9999px, 100px, 0);
    transform: skew(0.37deg);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 85px, 0);
    transform: skew(0.32deg);
  }
  5% {
    clip: rect(93px, 9999px, 100px, 0);
    transform: skew(0.75deg);
  }
  10% {
    clip: rect(42px, 9999px, 31px, 0);
    transform: skew(0.12deg);
  }
  15% {
    clip: rect(23px, 9999px, 92px, 0);
    transform: skew(0.39deg);
  }
  20% {
    clip: rect(23px, 9999px, 98px, 0);
    transform: skew(0.65deg);
  }
  25% {
    clip: rect(39px, 9999px, 11px, 0);
    transform: skew(0.6deg);
  }
  30% {
    clip: rect(89px, 9999px, 17px, 0);
    transform: skew(0.29deg);
  }
  35% {
    clip: rect(84px, 9999px, 4px, 0);
    transform: skew(0.25deg);
  }
  40% {
    clip: rect(24px, 9999px, 9px, 0);
    transform: skew(0.36deg);
  }
  45% {
    clip: rect(88px, 9999px, 7px, 0);
    transform: skew(0.44deg);
  }
  50% {
    clip: rect(88px, 9999px, 26px, 0);
    transform: skew(0.36deg);
  }
  55% {
    clip: rect(100px, 9999px, 100px, 0);
    transform: skew(0.33deg);
  }
  60% {
    clip: rect(36px, 9999px, 78px, 0);
    transform: skew(0.89deg);
  }
  65% {
    clip: rect(99px, 9999px, 19px, 0);
    transform: skew(0.3deg);
  }
  70% {
    clip: rect(76px, 9999px, 56px, 0);
    transform: skew(0.85deg);
  }
  75% {
    clip: rect(12px, 9999px, 23px, 0);
    transform: skew(0.62deg);
  }
  80% {
    clip: rect(39px, 9999px, 72px, 0);
    transform: skew(0.43deg);
  }
  85% {
    clip: rect(63px, 9999px, 95px, 0);
    transform: skew(0.22deg);
  }
  90% {
    clip: rect(90px, 9999px, 47px, 0);
    transform: skew(0.8deg);
  }
  95% {
    clip: rect(27px, 9999px, 25px, 0);
    transform: skew(0.67deg);
  }
  100% {
    clip: rect(79px, 9999px, 44px, 0);
    transform: skew(0.11deg);
  }
}

@keyframes glitch-skew {
  0% {
    transform: skew(-0.5deg);
  }
  10% {
    transform: skew(0.5deg);
  }
  20% {
    transform: skew(0.8deg);
  }
  30% {
    transform: skew(0.3deg);
  }
  40% {
    transform: skew(-0.5deg);
  }
  50% {
    transform: skew(0.2deg);
  }
  60% {
    transform: skew(0.5deg);
  }
  70% {
    transform: skew(-0.2deg);
  }
  80% {
    transform: skew(-0.9deg);
  }
  90% {
    transform: skew(0.7deg);
  }
  100% {
    transform: skew(-0.5deg);
  }
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-top: 10px;
  color: var(--primary-color);
  text-shadow: var(--shadow-neon);
  letter-spacing: 2px;
  font-family: 'Play', sans-serif;
  animation: neon-pulse 3s infinite alternate;
}

@keyframes neon-pulse {
  0% {
    text-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color);
  }
  100% {
    text-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 15px var(--primary-color), 0 0 20px var(--primary-color);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--text-color);
  font-size: 0.8rem;
  opacity: 0.8;
  animation: fade-in-out 1.5s infinite;
}

.mouse {
  border: 2px solid var(--text-color);
  border-radius: 20px;
  height: 30px;
  width: 20px;
  margin: 0 auto 10px;
  position: relative;
}

.wheel {
  background-color: var(--text-color);
  border-radius: 50%;
  height: 4px;
  width: 4px;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    top: 5px;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}

@keyframes fade-in-out {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

.main-content {
  padding: 50px var(--container-padding);
  max-width: var(--container-max-width);
  width: 100%;
  margin: 0 auto;
  background-color: rgba(10, 10, 18, 0.8);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 243, 255, 0.1);
  position: relative;
  z-index: 5;
  overflow: hidden;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(135deg, rgba(255, 0, 193, 0.05) 25%, transparent 25%),
    linear-gradient(225deg, rgba(255, 0, 193, 0.05) 25%, transparent 25%),
    linear-gradient(315deg, rgba(255, 0, 193, 0.05) 25%, transparent 25%),
    linear-gradient(45deg, rgba(255, 0, 193, 0.05) 25%, transparent 25%);
  background-size: 60px 60px;
  z-index: -1;
  opacity: 0.5;
}

section {
  margin-bottom: var(--section-spacing);
  position: relative;
  scroll-margin-top: 70px;
}

.section-title {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 40px;
  text-align: center;
  color: var(--primary-color);
  text-shadow: var(--shadow-neon);
  position: relative;
  display: inline-block;
  width: 100%;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-title::before {
  content: '[';
  position: absolute;
  left: 20%;
  color: var(--secondary-color);
  opacity: 0.6;
}

.section-title::after {
  content: ']';
  position: absolute;
  right: 20%;
  color: var(--secondary-color);
  opacity: 0.6;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.album-cover {
  flex: 0 0 min(300px, 100%);
  max-width: min(300px, 100%);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-neon);
  transition: all 0.3s ease;
  transform: perspective(800px) rotateY(0deg);
  backface-visibility: hidden;
  margin: 0 auto;
}

.album-cover:hover {
  transform: perspective(800px) rotateY(10deg) scale(1.05);
  box-shadow: var(--shadow-neon-2), -10px 10px 20px rgba(0, 0, 0, 0.3);
}

.album-cover img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.5s ease;
}

.album-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 243, 255, 0.2), rgba(255, 0, 193, 0.2));
  pointer-events: none;
}

.album-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: album-shine 3s infinite;
}

@keyframes album-shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.bio {
  flex: 1 1 500px;
  position: relative;
  border-left: 2px solid var(--primary-color);
  padding-left: 20px;
}

.bio::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 0;
  height: 10px;
  width: 10px;
  background-color: var(--primary-color);
  border-radius: 50%;
  box-shadow: var(--shadow-neon);
}

.bio p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  position: relative;
  padding-left: 10px;
}

.bio p::first-letter {
  font-size: 1.5rem;
  color: var(--secondary-color);
  font-weight: bold;
  text-shadow: var(--shadow-neon-2);
}

/* Timeline styling */
.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline-container::after {
  content: '';
  position: absolute;
  width: 4px;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 4px;
  box-shadow: var(--shadow-neon);
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-item:nth-child(even) {
  left: 50%;
  text-align: left;
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  background: var(--primary-color);
  border-radius: 50%;
  top: 15px;
  z-index: 1;
  box-shadow: var(--shadow-neon);
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -10px;
}

.timeline-date {
  display: inline-block;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 5px;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
}

.timeline-content {
  padding: 20px;
  background: rgba(26, 26, 46, 0.5);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-top: 2px solid var(--primary-color);
  border-bottom: 2px solid var(--secondary-color);
  transition: all 0.3s ease;
  max-width: 80%;
  display: inline-block;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), var(--shadow-neon);
}

.timeline-content h3 {
  color: var(--text-color);
  margin-top: 0;
  font-size: 1.3rem;
}

.timeline-content p {
  margin-bottom: 0;
}

.timeline-item:nth-child(odd) .timeline-content {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.timeline-item:nth-child(even) .timeline-content {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Classic songs grid */
.classics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.classic-song {
  background: rgba(26, 26, 46, 0.5);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid var(--primary-color);
  box-shadow: var(--shadow-neon);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.classic-song::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 1s ease;
  z-index: 0;
}

.classic-song:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-neon-2);
  border-color: var(--secondary-color);
}

.classic-song:hover::before {
  animation: shine 1.5s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
    top: -100%;
  }
  100% {
    left: 100%;
    top: 100%;
  }
}

.song-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--primary-color);
  font-weight: bold;
  position: relative;
  z-index: 1;
}

.year {
  font-size: 0.9rem;
  color: var(--secondary-color);
  position: relative;
  z-index: 1;
  font-weight: bold;
}

.album-name {
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.8;
  position: relative;
  z-index: 1;
  font-style: italic;
}

/* Quotes styling */
.quotes-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.quote {
  background: rgba(26, 26, 46, 0.5);
  border-radius: 15px;
  padding: 30px;
  position: relative;
  border-left: 4px solid var(--primary-color);
  border-right: 4px solid var(--secondary-color);
  transition: all 0.3s ease;
}

.quote:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-neon);
}

.quote::before {
  content: """;
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 5rem;
  color: rgba(0, 243, 255, 0.2);
  font-family: serif;
  line-height: 0.8;
}

.quote-text p {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 15px;
  padding-left: 20px;
  font-style: italic;
}

.quote-source {
  text-align: right;
  color: var(--secondary-color);
  font-size: 1rem;
}

/* Gallery styling */
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  flex: 0 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: var(--shadow-neon-2);
  transition: all 0.3s ease;
  aspect-ratio: 3/4;
}

.mobile-only {
  display: none;
}

.gallery-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow-neon-3);
  z-index: 2;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 18, 0.8);
  color: var(--text-color);
  padding: 10px;
  transform: translateY(100%);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border-top: 1px solid var(--primary-color);
}

.gallery-item:hover .gallery-caption {
  transform: translateY(0);
}

.song-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(26, 26, 46, 0.7);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary-color);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: 1000px;
  margin: 0 auto;
}

.song-container:hover {
  box-shadow: var(--shadow-neon), 0 10px 30px rgba(0, 0, 0, 0.5);
  transform: translateY(-5px);
}

.song-container::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  box-shadow: var(--shadow-neon);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  z-index: 1;
}

.song-container::after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-color: var(--secondary-color);
  box-shadow: var(--shadow-neon-2);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  z-index: 1;
}

.song-info {
  text-align: center;
  position: relative;
}

.song-info h3 {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
  text-shadow: 0 0 5px rgba(255, 0, 193, 0.7);
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
}

.song-info h3::before,
.song-info h3::after {
  content: "//";
  color: var(--primary-color);
  font-size: 1.5rem;
  margin: 0 10px;
  opacity: 0.7;
}

.audio-player {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(10, 10, 18, 0.9);
  padding: 25px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 243, 255, 0.3);
  transition: all 0.3s ease;
}

.audio-player:hover {
  border-color: var(--primary-color);
  box-shadow: inset 0 0 20px rgba(0, 243, 255, 0.1);
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.progress-handle, .volume-handle, .video-progress-handle, .video-volume-handle {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background-color: var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(0, 243, 255, 0.7);
  z-index: 2;
  pointer-events: none;
}

.progress-handle {
  left: var(--progress-percent, 0%);
}

.volume-handle {
  left: var(--volume-percent, 0%);
}

.video-progress-handle {
  left: var(--video-progress-percent, 0%);
}

.video-volume-handle {
  left: var(--video-volume-percent, 0%);
}

.play-btn, .mute-btn, .video-play-btn, .video-mute-btn, .fullscreen-btn {
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--primary-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.play-btn::before, .mute-btn::before, .video-play-btn::before, .video-mute-btn::before, .fullscreen-btn::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 243, 255, 0.2) 70%, transparent 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.play-btn:hover::before, .mute-btn:hover::before, .video-play-btn:hover::before, .video-mute-btn:hover::before, .fullscreen-btn:hover::before {
  opacity: 1;
}

.play-btn:hover, .mute-btn:hover, .video-play-btn:hover, .video-mute-btn:hover, .fullscreen-btn:hover {
  background: var(--secondary-color);
  transform: scale(1.1) rotate(360deg);
  box-shadow: var(--shadow-neon-2), 0 0 15px rgba(255, 0, 193, 0.5);
}

.play-icon, .pause-icon, .volume-icon, .mute-icon, .fullscreen-icon {
  width: 20px;
  height: 20px;
  background-color: var(--bg-color);
  mask-size: cover;
  -webkit-mask-size: cover;
}

.play-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
}

.pause-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3C/svg%3E");
  display: none;
}

.volume-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3C/svg%3E");
}

.mute-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3C/svg%3E");
  display: none;
}

.fullscreen-icon {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/%3E%3C/svg%3E");
}

.progress-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.progress-bar, .video-progress-bar, .volume-bar, .video-volume-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 243, 255, 0.3);
}

.progress, .video-progress, .volume-level, .video-volume-level {
  height: 100%;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border-radius: 10px;
  width: 0;
  transition: width 0.1s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
}

.progress-bar:hover, .video-progress-bar:hover, .volume-bar:hover, .video-volume-bar:hover {
  height: 10px;
  border-color: var(--primary-color);
}

.time {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  font-size: 0.9rem;
  color: var(--primary-color);
  opacity: 0.9;
  font-family: 'Orbitron', sans-serif;
  margin-top: 5px;
}

.volume-container, .video-volume {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 120px;
}

.volume-slider, .video-volume-slider {
  flex: 1;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow-neon-2);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  aspect-ratio: 16/9;
}

video {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 15px;
  transition: all 0.3s ease;
  object-fit: cover;
}

.video-container:hover {
  border-color: var(--secondary-color);
  transform: scale(1.01);
}

.video-frame {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid var(--primary-color);
  pointer-events: none;
  z-index: 10;
  border-radius: 17px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-container:hover .video-frame {
  opacity: 1;
}

video {
  width: 100%;
  display: block;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 18, 0.8);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 0;
  transition: all 0.5s ease;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 243, 255, 0.3);
  transform: translateY(100%);
}

.video-container:hover .video-controls {
  opacity: 1;
  transform: translateY(0);
}

.video-info {
  text-align: center;
  margin-top: 15px;
  color: var(--primary-color);
  font-size: 0.9rem;
  font-style: italic;
}

footer {
  background: rgba(10, 10, 18, 0.95);
  padding: 40px var(--container-padding) 20px;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid var(--primary-color);
  position: relative;
  z-index: 20;
  width: 100%;
}

footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--accent-color), var(--primary-color));
  z-index: -1;
}

.footer-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.footer-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.footer-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 5px 15px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.footer-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--secondary-color);
  text-shadow: var(--shadow-neon-2);
}

.footer-link:hover::before {
  width: 80%;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright a {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(0, 243, 255, 0.1);
}

.copyright a:hover {
  color: var(--secondary-color);
  text-shadow: var(--shadow-neon-2);
  background: rgba(255, 0, 193, 0.1);
}

.ip-address {
  color: var(--text-color);
  opacity: 0.8;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
}

/* Cherry blossom petal style */
.petal {
  position: absolute;
  background-color: var(--secondary-color);
  border-radius: 150% 0 150% 0;
  transform: rotate(45deg);
  opacity: 0.8;
  animation-name: fall;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  box-shadow: 0 0 10px var(--secondary-color);
  z-index: 0;
}

.petal::after {
  content: "";
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 150% 0 150% 0;
  transform: rotate(45deg);
}

@keyframes fall {
  0% {
    opacity: 0;
    transform: rotate(45deg) translateX(0) translateY(0) rotateZ(0);
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg) translateX(100px) translateY(800px) rotateZ(180deg);
  }
}

.cursor-follower {
  position: fixed;
  width: 20px;
  height: 20px;
  background: rgba(0, 243, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  mix-blend-mode: screen;
  opacity: 0;
  transition: opacity 0.3s ease, width 0.2s ease, height 0.2s ease, background 0.3s ease;
}

/* Media Queries */
@media (min-width: 1921px) {
  :root {
    --container-max-width: 1800px;
    --container-padding: 40px;
    --section-spacing: 100px;
  }
  
  #app {
    font-size: 18px;
  }
  
  .main-content {
    padding: 80px var(--container-padding);
  }
}

@media (max-width: 1366px) {
  :root {
    --container-max-width: 1200px;
    --section-spacing: 70px;
  }
  
  .main-content {
    padding: 40px 30px;
  }
}

@media (max-width: 1024px) {
  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 20px;
    text-align: left;
  }
  
  .timeline-item:nth-child(odd) {
    left: 0;
    text-align: left;
  }
  
  .timeline-container::after {
    left: 40px;
  }
  
  .timeline-dot {
    left: 30px;
    right: auto;
  }
  
  .timeline-item .timeline-content {
    max-width: 100%;
  }
  
  .gallery-item {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  :root {
    --container-max-width: 100%;
    --container-padding: 15px;
    --section-spacing: 60px;
  }
  
  .main-content {
    padding: 30px 20px;
    border-radius: 0;
    margin-top: -20px;
  }
  
  .hero {
    padding: 0 15px;
    min-height: 500px;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .album-cover {
    max-width: 250px;
    margin: 0 auto 20px;
  }
  
  .player-controls {
    gap: 10px;
  }
  
  .volume-container, .video-volume {
    width: 80px;
  }
  
  .footer-info {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    text-align: center;
  }
  
  .classics-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 0 5px;
  }

  .bio {
    padding-left: 15px;
  }
  
  .control-wrapper {
    top: 15px;
    right: 15px;
    gap: 10px;
  }
  
  .gallery-item {
    aspect-ratio: 4/5;
  }
}

@media (max-width: 580px) {
  :root {
    --section-spacing: 50px;
  }
  
  .gallery-item {
    flex: 0 0 calc(50% - 10px);
    max-width: calc(50% - 10px);
    aspect-ratio: 1/1;
  }
  
  .mobile-only {
    display: block;
  }
  
  .song-info h3 {
    font-size: 1.6rem;
  }
  
  .song-info h3::before, 
  .song-info h3::after {
    margin: 0 5px;
  }
  
  .audio-player {
    padding: 15px;
  }
  
  .scroll-indicator {
    bottom: 20px;
  }
  
  .quotes-container {
    gap: 20px;
  }
  
  .quote {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    margin-bottom: 30px;
  }
  
  .play-btn, .mute-btn, .video-play-btn, .video-mute-btn, .fullscreen-btn {
    width: 40px;
    height: 40px;
  }
  
  .play-icon, .pause-icon, .volume-icon, .mute-icon, .fullscreen-icon {
    width: 15px;
    height: 15px;
  }
  
  .timeline-date {
    font-size: 1rem;
  }
  
  .quote-text p {
    font-size: 1.1rem;
    padding-left: 10px;
  }
  
  .section-title::before,
  .section-title::after {
    display: none;
  }
  
  .timeline-item {
    padding-left: 50px;
  }
  
  .timeline-container::after {
    left: 30px;
  }
  
  .timeline-dot {
    left: 20px;
    width: 16px;
    height: 16px;
  }
  
  .video-controls {
    padding: 10px;
  }
  
  .gallery-container {
    gap: 10px;
  }
  
  .gallery-item {
    border-radius: 7px;
  }
  
  .footer-nav {
    gap: 10px;
  }
  
  .footer-link {
    font-size: 0.9rem;
    padding: 4px 10px;
  }
}

@media (max-width: 360px) {
  .player-controls, .video-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .play-btn, .video-play-btn {
    align-self: center;
    margin-bottom: 10px;
  }
  
  .volume-container, .video-volume {
    width: 100%;
  }
  
  .timeline-content {
    padding: 15px 10px;
  }
  
  .timeline-content h3 {
    font-size: 1.1rem;
  }
  
  .classic-song {
    padding: 15px 10px;
  }
  
  .song-title {
    font-size: 1.1rem;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glitch, .subtitle, .cursor-follower, .cherry-blossom-container, .petal, 
  .album-effect, .neon-hr::after, .hero {
    animation: none !important;
    transition-duration: 0.001ms !important;
  }
  
  .album-cover:hover, .song-container:hover {
    transform: none;
  }
}
  </style>
</head>
<body>
  <div id="app">
    <div class="cyberpunk-grid"></div>
    <div class="control-wrapper">
>>>>>>> REPLACE

<<<<<<< SEARCH
  <footer id="footer">
    <div class="footer-content">
      <div class="footer-nav">
=======
  <footer>
    <div class="footer-content">
      <div class="footer-nav">
>>>>>>> REPLACE

<<<<<<< SEARCH
<div id="cursor-follower" class="cursor-follower"></div>
=======
  <script>
document.addEventListener('DOMContentLoaded', function() {
  // Performance optimization - batch DOM operations
  const documentFragment = document.createDocumentFragment();
  // Set glitch data-text attribute
  const glitchElement = document.querySelector('.glitch');
  const glitchTextEn = glitchElement.querySelector('.en').textContent;
  const glitchTextZh = glitchElement.querySelector('.zh').textContent;
  
  // Language switching
  const enBtn = document.getElementById('en-btn');
  const zhBtn = document.getElementById('zh-btn');
  const enElements = document.querySelectorAll('.en');
  const zhElements = document.querySelectorAll('.zh');

  enBtn.addEventListener('click', function() {
    enElements.forEach(el => {
      el.style.display = 'block';
      el.style.animation = 'fadeIn 0.5s forwards';
    });
    zhElements.forEach(el => {
      el.style.animation = 'fadeOut 0.5s forwards';
      setTimeout(() => { el.style.display = 'none'; }, 500);
    });
    enBtn.classList.add('active');
    zhBtn.classList.remove('active');
    glitchElement.setAttribute('data-text', glitchTextEn);
  });

  zhBtn.addEventListener('click', function() {
    zhElements.forEach(el => {
      el.style.display = 'block';
      el.style.animation = 'fadeIn 0.5s forwards';
    });
    enElements.forEach(el => {
      el.style.animation = 'fadeOut 0.5s forwards';
      setTimeout(() => { el.style.display = 'none'; }, 500);
    });
    zhBtn.classList.add('active');
    enBtn.classList.remove('active');
    glitchElement.setAttribute('data-text', glitchTextZh);
  });
  
  // Set initial data-text
  glitchElement.setAttribute('data-text', glitchTextEn);
  
  // Define fade animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(style);

  // Background Music Toggle
  const bgmToggle = document.getElementById('bgm-toggle');
  const musicIcon = bgmToggle.querySelector('.music-icon');
  const musicOffIcon = bgmToggle.querySelector('.music-off-icon');
  
  // Create background music element
  const bgm = new Audio('https://tc-212.pages.dev/1741708074944.mp3');
  bgm.loop = true;
  bgm.volume = 0.3;
  
  bgmToggle.addEventListener('click', function() {
    if (bgm.paused) {
      bgm.play()
        .then(() => {
          musicIcon.style.display = 'block';
          musicOffIcon.style.display = 'none';
          bgmToggle.classList.add('active');
        })
        .catch(e => {
          console.error("Background music could not be played:", e);
          musicIcon.style.display = 'none';
          musicOffIcon.style.display = 'block';
          bgmToggle.classList.remove('active');
        });
    } else {
      bgm.pause();
      musicIcon.style.display = 'none';
      musicOffIcon.style.display = 'block';
      bgmToggle.classList.remove('active');
    }
  });
  
  // Cherry Blossom Animation - Optimized
  const cherryBlossomContainer = document.getElementById('cherry-blossom-container');
  let petalCount = 0;
  const maxPetals = 50; // Limit for performance
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduceMotion = mediaQuery.matches;
  
  // Skip animation if user prefers reduced motion
  if (!reduceMotion) {
    function createCherryBlossom() {
      // Skip if we already have too many petals
      if (petalCount >= maxPetals) return;
      
      const petal = document.createElement('div');
      petal.classList.add('petal');
      
      // Random size - scale based on viewport width for responsive design
      const baseSize = Math.min(window.innerWidth / 60, 20);
      const size = Math.random() * baseSize + 5;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      
      // Random position - adjusted for better distribution
      const startPos = Math.random() * 100;
      petal.style.left = `${startPos}%`;
      petal.style.top = '-10px';
      
      // Optimize animation performance
      const duration = Math.random() * 8 + 5;
      const delay = Math.random() * 5;
      const rotation = Math.random() * 360;
      const windAmount = (Math.random() - 0.5) * Math.min(window.innerWidth / 4, 200);
      
      // Use transforms only for better performance
      petal.animate(
        [
          { transform: `translate(0px, 0px) rotate(${rotation}deg)`, opacity: 0 },
          { transform: `translate(${windAmount * 0.3}px, ${window.innerHeight * 0.3}px) rotate(${rotation + 120}deg)`, opacity: 0.8 },
          { transform: `translate(${windAmount}px, ${Math.min(window.innerHeight, 800)}px) rotate(${rotation + 360}deg)`, opacity: 0 }
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          fill: 'forwards'
        }
      );
      
      documentFragment.appendChild(petal);
      petalCount++;
      
      setTimeout(() => {
        if (petal.parentNode) {
          petal.remove();
          petalCount--;
        }
      }, (duration + delay) * 1000);
    }
    
    // Batch create initial petals
    for (let i = 0; i < 10; i++) {
      createCherryBlossom();
    }
    
    // Then set interval for ongoing creation
    setInterval(createCherryBlossom, window.innerWidth < 768 ? 400 : 200);
    
    cherryBlossomContainer.appendChild(documentFragment);
  }

  // Audio Player
  const song = document.getElementById('song');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playIcon = playPauseBtn.querySelector('.play-icon');
  const pauseIcon = playPauseBtn.querySelector('.pause-icon');
  const muteBtn = document.getElementById('mute-btn');
  const volumeIcon = muteBtn.querySelector('.volume-icon');
  const muteIcon = muteBtn.querySelector('.mute-icon');
  const progressBar = document.querySelector('.progress-bar');
  const progress = document.querySelector('.progress');
  const progressHandle = document.querySelector('.progress-handle');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeBar = document.querySelector('.volume-bar');
  const volumeLevel = document.querySelector('.volume-level');
  const volumeHandle = document.querySelector('.volume-handle');

  // Format time
  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }

  // Update progress
  function updateProgress() {
    const percent = (song.currentTime / song.duration) * 100;
    progress.style.width = `${percent}%`;
    progressHandle.style.setProperty('--progress-percent', `${percent}%`);
    currentTimeEl.textContent = formatTime(song.currentTime);
  }

  // Update volume
  function updateVolume(e) {
    const rect = volumeBar.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    song.volume = percent;
    volumeLevel.style.width = `${percent * 100}%`;
    volumeHandle.style.setProperty('--volume-percent', `${percent * 100}%`);
    
    if (percent === 0) {
      volumeIcon.style.display = 'none';
      muteIcon.style.display = 'block';
    } else {
      volumeIcon.style.display = 'block';
      muteIcon.style.display = 'none';
    }
  }

  // Set initial volume
  song.volume = 0.7;
  volumeLevel.style.width = `${song.volume * 100}%`;
  volumeHandle.style.setProperty('--volume-percent', `${song.volume * 100}%`);

  // Toggle play/pause with animation
  playPauseBtn.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
    
    if (song.paused) {
      // If background music is playing, pause it
      if (!bgm.paused) {
        bgm.pause();
        musicIcon.style.display = 'none';
        musicOffIcon.style.display = 'block';
        bgmToggle.classList.remove('active');
      }
      
      song.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      song.pause();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  });

  // Toggle mute
  muteBtn.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
    
    if (song.muted) {
      song.muted = false;
      volumeIcon.style.display = 'block';
      muteIcon.style.display = 'none';
      volumeLevel.style.width = `${song.volume * 100}%`;
      volumeHandle.style.setProperty('--volume-percent', `${song.volume * 100}%`);
    } else {
      song.muted = true;
      volumeIcon.style.display = 'none';
      muteIcon.style.display = 'block';
      volumeLevel.style.width = '0';
      volumeHandle.style.setProperty('--volume-percent', '0%');
    }
  });

  // Progress bar click and drag
  progressBar.addEventListener('click', function(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    song.currentTime = percent * song.duration;
    updateProgress();
  });

  let isDraggingProgress = false;
  
  progressBar.addEventListener('mousedown', () => { 
    isDraggingProgress = true; 
    song.pause(); // Pause while dragging
  });
  
  document.addEventListener('mouseup', () => { 
    if (isDraggingProgress) {
      isDraggingProgress = false; 
      if (pauseIcon.style.display === 'block') {
        song.play(); // Resume if it was playing
      }
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDraggingProgress) {
      const rect = progressBar.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      song.currentTime = percent * song.duration;
      updateProgress();
    }
  });

  // Volume bar click and drag
  volumeBar.addEventListener('click', updateVolume);

  let isDraggingVolume = false;
  
  volumeBar.addEventListener('mousedown', () => { 
    isDraggingVolume = true; 
  });
  
  document.addEventListener('mouseup', () => { 
    isDraggingVolume = false; 
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDraggingVolume) {
      updateVolume(e);
    }
  });

  // Update time
  song.addEventListener('timeupdate', updateProgress);
  
  // Load metadata and set initial values
  if (song) {
    song.addEventListener('loadedmetadata', function() {
      const durationEl = document.getElementById('duration');
      if (durationEl) {
        durationEl.textContent = formatTime(song.duration);
      }
      
      // Set initial volume display
      const volumeLevel = document.querySelector('.volume-level');
      const volumeHandle = document.querySelector('.volume-handle');
      if (volumeLevel && volumeHandle) {
        volumeLevel.style.width = `${song.volume * 100}%`;
        volumeHandle.style.setProperty('--volume-percent', `${song.volume * 100}%`);
      }
    });
  }

  // Video Player
  const video = document.getElementById('concert-video');
  const videoPlayPauseBtn = document.getElementById('video-play-pause');
  const videoPlayIcon = videoPlayPauseBtn.querySelector('.play-icon');
  const videoPauseIcon = videoPlayPauseBtn.querySelector('.pause-icon');
  const videoMuteBtn = document.getElementById('video-mute');
  const videoVolumeIcon = videoMuteBtn.querySelector('.volume-icon');
  const videoMuteIcon = videoMuteBtn.querySelector('.mute-icon');
  const videoProgressBar = document.querySelector('.video-progress-bar');
  const videoProgress = document.querySelector('.video-progress');
  const videoProgressHandle = document.querySelector('.video-progress-handle');
  const videoVolumeBar = document.querySelector('.video-volume-bar');
  const videoVolumeLevel = document.querySelector('.video-volume-level');
  const videoVolumeHandle = document.querySelector('.video-volume-handle');
  const fullscreenBtn = document.getElementById('video-fullscreen');
  
  // Toggle video play/pause
  videoPlayPauseBtn.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
    
    if (video.paused) {
      // If audio player or background music is playing, pause them
      if (!song.paused) {
        song.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
      
      if (!bgm.paused) {
        bgm.pause();
        musicIcon.style.display = 'none';
        musicOffIcon.style.display = 'block';
        bgmToggle.classList.remove('active');
      }
      
      video.play();
      videoPlayIcon.style.display = 'none';
      videoPauseIcon.style.display = 'block';
    } else {
      video.pause();
      videoPlayIcon.style.display = 'block';
      videoPauseIcon.style.display = 'none';
    }
  });

  // Click on video to play/pause
  video.addEventListener('click', function() {
    if (video.paused) {
      // If audio player or background music is playing, pause them
      if (!song.paused) {
        song.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
      
      if (!bgm.paused) {
        bgm.pause();
        musicIcon.style.display = 'none';
        musicOffIcon.style.display = 'block';
        bgmToggle.classList.remove('active');
      }
      
      video.play();
      videoPlayIcon.style.display = 'none';
      videoPauseIcon.style.display = 'block';
    } else {
      video.pause();
      videoPlayIcon.style.display = 'block';
      videoPauseIcon.style.display = 'none';
    }
  });

  // Update video progress
  function updateVideoProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    videoProgress.style.width = `${percent}%`;
    videoProgressHandle.style.setProperty('--video-progress-percent', `${percent}%`);
  }

  // Video progress bar click and drag
  videoProgressBar.addEventListener('click', function(e) {
    const rect = videoProgressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
    updateVideoProgress();
  });
  
  let isDraggingVideoProgress = false;
  
  videoProgressBar.addEventListener('mousedown', () => { 
    isDraggingVideoProgress = true; 
    video.pause(); // Pause while dragging
  });
  
  document.addEventListener('mouseup', () => { 
    if (isDraggingVideoProgress) {
      isDraggingVideoProgress = false; 
      if (videoPauseIcon.style.display === 'block') {
        video.play(); // Resume if it was playing
      }
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDraggingVideoProgress) {
      const rect = videoProgressBar.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = percent * video.duration;
      updateVideoProgress();
    }
  });

  // Toggle video mute
  videoMuteBtn.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
    
    if (video.muted) {
      video.muted = false;
      videoVolumeIcon.style.display = 'block';
      videoMuteIcon.style.display = 'none';
      videoVolumeLevel.style.width = `${video.volume * 100}%`;
      videoVolumeHandle.style.setProperty('--video-volume-percent', `${video.volume * 100}%`);
    } else {
      video.muted = true;
      videoVolumeIcon.style.display = 'none';
      videoMuteIcon.style.display = 'block';
      videoVolumeLevel.style.width = '0';
      videoVolumeHandle.style.setProperty('--video-volume-percent', '0%');
    }
  });

  // Update video volume
  function updateVideoVolume(e) {
    const rect = videoVolumeBar.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.volume = percent;
    videoVolumeLevel.style.width = `${percent * 100}%`;
    videoVolumeHandle.style.setProperty('--video-volume-percent', `${percent * 100}%`);
    
    if (percent === 0) {
      videoVolumeIcon.style.display = 'none';
      videoMuteIcon.style.display = 'block';
    } else {
      videoVolumeIcon.style.display = 'block';
      videoMuteIcon.style.display = 'none';
    }
  }

  // Video volume bar click
  videoVolumeBar.addEventListener('click', updateVideoVolume);

  // Video volume bar drag
  let isDraggingVideoVolume = false;
  videoVolumeBar.addEventListener('mousedown', () => { isDraggingVideoVolume = true; });
  document.addEventListener('mouseup', () => { isDraggingVideoVolume = false; });
  document.addEventListener('mousemove', (e) => {
    if (isDraggingVideoVolume) {
      updateVideoVolume(e);
    }
  });

  // Fullscreen
  fullscreenBtn.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
    
    const videoContainer = document.querySelector('.video-container');
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainer.requestFullscreen().catch(e => {
        console.error("Could not enter fullscreen mode:", e);
      });
    }
  });

  // Set initial video volume
  video.volume = 0.7;
  videoVolumeLevel.style.width = `${video.volume * 100}%`;
  videoVolumeHandle.style.setProperty('--video-volume-percent', `${video.volume * 100}%`);

  // Update video time
  video.addEventListener('timeupdate', updateVideoProgress);

  // Initial states
  videoPlayIcon.style.display = 'block';
  videoPauseIcon.style.display = 'none';
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Fetch and display IP address
  async function getIpAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      document.getElementById('visitor-ip').textContent = data.ip;
    } catch (error) {
      document.getElementById('visitor-ip').textContent = 'Unable to fetch IP';
    }
  }

  getIpAddress();
  
  // Add optimized cyberglitch effect to classic songs
  const classicSongs = document.querySelectorAll('.classic-song');
  const hoverSound = new Audio();
  hoverSound.src = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAiIiIiIiIiIiIiIiIiIiIiIiIiIjMzMzMzMzMzMzMzMzMzMzMzMzMzMz/////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQDQAAAAAAAAD6YzGJWAAAAAAAAAAAAAAAAAAAA//uQxAADwAAB/gAAACAAAD/AAAAAIAAQB8D8H8AAAAD/+xDE1wANVMVH+e0BoAAAi+sAABCmRpJIGg/R+jp9MG0nQoFDgEQ6jkA2TwOZDYv1c8CuGDCf1f3++D5z/+bPc9z3P/mf/MoaAUA4Eg0GgWNBojAwNApk3k/wf///+voZw4EQcDhIIQNA0KhMHwYD5nIe/8QQSC4RDnPxBEPcf//+5DEeAOfKQ1/5hIAQAAANIAAAASP9zLMp9SLAiDIckgBhIAAgEAGCjBADD0JQvC8MymCAICAgBAYHAYDAIAgBgFAUDAYDAXA4CAH//8O//+4GgDFYSBX/fBwJDz/3/XiIVCn/4mCoY//4mEQr//0wSEP///whCEIQhIQ/hCEIQhqysrJKyoiIiIiIiIa1f///ERER//8REf/6REREiIiI";
  hoverSound.preload = 'auto';
  hoverSound.volume = 0.2;
  
  // Check if it's a pointer device
  let isPointerDevice = window.matchMedia('(pointer: fine)').matches;
  
  // Only add hover effects on non-touch devices
  if (isPointerDevice && !reduceMotion) {
    classicSongs.forEach(song => {
      song.addEventListener('mouseenter', function() {
        this.classList.add('glitch-effect');
        
        // Clone the sound for overlapping hovers and better performance
        const soundClone = hoverSound.cloneNode();
        soundClone.volume = 0.2;
        soundClone.play()
          .catch(e => console.log('Audio hover effect prevented by browser policy.'));
        
        // Clean up cloned audio element when done
        soundClone.addEventListener('ended', () => soundClone.remove());
      });
      
      song.addEventListener('mouseleave', function() {
        this.classList.remove('glitch-effect');
      });
    });
  }
  
  // Add passive flag to most scroll/touch listeners for better performance
  const passiveOption = { passive: true };
  window.addEventListener('scroll', () => {}, passiveOption);
  document.addEventListener('touchstart', () => {}, passiveOption);
  document.addEventListener('touchmove', () => {}, passiveOption);
  
  // Custom cursor with performance optimization
  const cursorFollower = document.getElementById('cursor-follower');
  
  if (isPointerDevice && !reduceMotion) {
    let cursorX = 0, cursorY = 0;
    let cursorTargetX = 0, cursorTargetY = 0;
    let cursorVisible = false;
    
    const animateCursor = () => {
      const easingFactor = 0.2;
      
      cursorX += (cursorTargetX - cursorX) * easingFactor;
      cursorY += (cursorTargetY - cursorY) * easingFactor;
      
      if (cursorVisible) {
        cursorFollower.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorFollower.style.opacity = '1';
      }
      
      requestAnimationFrame(animateCursor);
    };
    
    document.addEventListener('mousemove', function(e) {
      cursorTargetX = e.clientX;
      cursorTargetY = e.clientY;
      cursorVisible = true;
    });
    
    document.addEventListener('mouseout', function() {
      cursorVisible = false;
      cursorFollower.style.opacity = '0';
    });
    
    // Change cursor appearance when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .classic-song, .audio-player, .video-container, .gallery-item');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
        cursorFollower.style.background = 'rgba(255, 0, 193, 0.5)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '20px';
        cursorFollower.style.height = '20px';
        cursorFollower.style.background = 'rgba(0, 243, 255, 0.5)';
      });
    });
    
    // Start animation
    animateCursor();
  } else {
    // Hide cursor follower on touch devices
    cursorFollower.style.display = 'none';
  }
});
  </script>
</body>
</html>
>>>>>>> REPLACE
[/HTML]

[JavaScript]
<<<<<<< SEARCH
  // Optimize resource loading for audio/video
  const song = document.getElementById('song');
  const video = document.getElementById('concert-video');
=======
  // Load metadata and set initial values
  if (song) {
    song.addEventListener('loadedmetadata', function() {
      const durationEl = document.getElementById('duration');
      if (durationEl) {
        durationEl.textContent = formatTime(song.duration);
      }
      
      // Set initial volume display
      const volumeLevel = document.querySelector('.volume-level');
      const volumeHandle = document.querySelector('.volume-handle');
      if (volumeLevel && volumeHandle) {
        volumeLevel.style.width = `${song.volume * 100}%`;
        volumeHandle.style.setProperty('--volume-percen
