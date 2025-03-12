<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dave Wong - Tribute Page</title>
  <style>
#app {
  --primary-color: #00f3ff;
  --secondary-color: #ff00c1;
  --accent-color: #d400ff;
  --text-color: #ffffff;
  --bg-color: #0a0a12;
  --bg-gradient: linear-gradient(135deg, #0a0a12 0%, #1a1a2e 100%);
  --shadow-neon: 0 0 10px rgba(0, 243, 255, 0.7), 0 0 20px rgba(0, 243, 255, 0.5), 0 0 40px rgba(0, 243, 255, 0.3);
  --shadow-neon-2: 0 0 10px rgba(255, 0, 193, 0.7), 0 0 20px rgba(255, 0, 193, 0.5), 0 0 40px rgba(255, 0, 193, 0.3);
  
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg-gradient);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.zh {
  display: none;
}

.en {
  display: block;
}

.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(10, 10, 18, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 1px solid var(--primary-color);
  box-shadow: var(--shadow-neon);
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

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background: var(--bg-gradient);
  padding: 0 20px;
}

.cherry-blossom-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.glitch {
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: var(--text-color);
  letter-spacing: 5px;
  margin: 0;
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-size: 1.5rem;
  margin-top: 10px;
  color: var(--primary-color);
  text-shadow: var(--shadow-neon);
  letter-spacing: 2px;
}

main {
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(10, 10, 18, 0.8);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 243, 255, 0.1);
}

section {
  margin-bottom: 60px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: var(--primary-color);
  text-shadow: var(--shadow-neon);
  position: relative;
  display: inline-block;
  width: 100%;
}

h2::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 3px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.album-cover {
  flex: 0 0 300px;
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-neon);
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color);
}

.album-cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, var(--primary-color), transparent, var(--secondary-color));
  opacity: 0;
  z-index: 1;
  transition: opacity 0.5s ease;
}

.album-cover:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-neon-2);
}

.album-cover:hover::before {
  opacity: 0.3;
}

.album-cover .album-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0 0 15px var(--primary-color), 0 0 30px var(--secondary-color);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
  pointer-events: none;
}

.album-cover:hover .album-glow {
  opacity: 1;
}

.album-cover img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.5s ease;
}

.bio {
  flex: 1;
  min-width: 300px;
}

.bio p {
  margin-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.8;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.song-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(26, 26, 46, 0.5);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 243, 255, 0.2);
  border: 1px solid var(--primary-color);
  position: relative;
  overflow: hidden;
}

.song-container::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, 
    rgba(0, 243, 255, 0) 0%, 
    rgba(0, 243, 255, 0.1) 50%, 
    rgba(0, 243, 255, 0) 100%);
  animation: sheen 5s infinite linear;
  pointer-events: none;
  z-index: 1;
}

@keyframes sheen {
  0% {
    transform: rotate(0) translate(-50%, -50%);
  }
  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}

.cyber-card {
  position: relative;
  background: rgba(26, 26, 46, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
  border-top: 2px solid var(--primary-color);
  border-left: 2px solid var(--primary-color);
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  transition: all 0.3s ease;
}

.cyber-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.7);
}

.song-info {
  text-align: center;
  position: relative;
  z-index: 2;
}

.song-info h3 {
  font-size: 1.8rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
  text-shadow: 0 0 5px rgba(255, 0, 193, 0.7), 0 0 15px rgba(255, 0, 193, 0.4);
  position: relative;
  display: inline-block;
}

.song-info h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
}

.audio-player {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(10, 10, 18, 0.8);
  padding: 20px;
  box-sizing: border-box;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.play-btn, .mute-btn, .video-play-btn, .video-mute-btn, .fullscreen-btn {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--primary-color);
  transition: all 0.3s ease;
}

.play-btn:hover, .mute-btn:hover, .video-play-btn:hover, .video-mute-btn:hover, .fullscreen-btn:hover {
  background: var(--secondary-color);
  transform: scale(1.1);
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
  height: 5px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.progress, .video-progress, .volume-level, .video-volume-level {
  height: 100%;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border-radius: 10px;
  width: 0;
  transition: width 0.1s ease;
  position: relative;
}

.time {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0.8;
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

.timeline {
  margin: 100px 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 4px;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-container {
  position: relative;
  z-index: 2;
}

.timeline-item {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
  position: relative;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-date {
  width: 100px;
  padding: 10px;
  background: var(--primary-color);
  color: var(--bg-color);
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
  margin: 0 30px;
  align-self: flex-start;
}

.timeline-content {
  background: rgba(26, 26, 46, 0.8);
  border-radius: 10px;
  padding: 20px;
  width: calc(50% - 80px);
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary-color);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
}

.timeline-content h3 {
  color: var(--secondary-color);
  margin-bottom: 10px;
  font-size: 1.3rem;
  text-shadow: 0 0 5px rgba(255, 0, 193, 0.7);
}

.timeline-content p {
  color: var(--text-color);
  line-height: 1.5;
}

.discography {
  margin: 80px 0;
}

.albums-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.album-card {
  background: rgba(26, 26, 46, 0.7);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 243, 255, 0.3);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.album-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.6);
  border-color: var(--primary-color);
}

.album-image {
  position: relative;
  overflow: hidden;
}

.album-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.5s ease;
}

.album-card:hover .album-image img {
  transform: scale(1.1);
}

.album-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 10, 18, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.album-card:hover .album-overlay {
  opacity: 1;
}

.album-year {
  background: var(--primary-color);
  color: var(--bg-color);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.album-details {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.album-details h3 {
  color: var(--secondary-color);
  margin-bottom: 10px;
  font-size: 1.2rem;
  text-shadow: 0 0 5px rgba(255, 0, 193, 0.7);
}

.album-details p {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.9;
  line-height: 1.5;
  flex-grow: 1;
}

.quotes {
  margin: 80px 0;
  position: relative;
}

.quotes::before {
  content: '"';
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 150px;
  color: rgba(0, 243, 255, 0.1);
  z-index: 0;
  font-family: Georgia, serif;
}

.quotes-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1;
}

.quote-card {
  background: rgba(26, 26, 46, 0.7);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}

.quote-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 243, 255, 0.4);
}

.quote-card::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 80px;
  color: rgba(255, 255, 255, 0.05);
  font-family: Georgia, serif;
}

.quote-content {
  position: relative;
  z-index: 2;
}

.quote-content p {
  font-size: 1.3rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 15px;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
}

.quote-source {
  display: block;
  text-align: right;
  font-size: 0.9rem;
  color: var(--secondary-color);
}

.video-container {
  position: relative;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow-neon-2);
}

.video-frame-border {
  position: relative;
  padding: 3px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--accent-color), var(--primary-color));
  border-radius: 15px;
  animation: borderRotate 4s linear infinite;
  overflow: hidden;
}

@keyframes borderRotate {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 200%;
  }
}

video {
  width: 100%;
  display: block;
  border-radius: 12px;
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
  transition: opacity 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(10px);
  transform: translateY(100%);
  border-top: 1px solid var(--primary-color);
}

.video-container:hover .video-controls {
  opacity: 1;
  transform: translateY(0);
}

.influence {
  margin: 80px 0;
}

.influence-content {
  background: rgba(26, 26, 46, 0.7);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary-color);
  position: relative;
  overflow: hidden;
}

.influence-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.influence-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
  position: relative;
  z-index: 2;
}

.cyber-footer {
  background: rgba(10, 10, 18, 0.95);
  padding: 30px;
  text-align: center;
  margin-top: auto;
  border-top: 2px solid var(--primary-color);
  position: relative;
  overflow: hidden;
}

.cyber-footer::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--primary-color));
  animation: borderFlow 2s linear infinite;
  background-size: 200% 100%;
}

@keyframes borderFlow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

.footer-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tribute-note {
  color: var(--text-color);
  font-style: italic;
  opacity: 0.8;
}

.cyber-text {
  font-family: 'Courier New', monospace;
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
  letter-spacing: 1px;
}

footer {
  background: rgba(10, 10, 18, 0.9);
  padding: 20px;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid var(--primary-color);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright a:hover {
  color: var(--secondary-color);
  text-shadow: var(--shadow-neon-2);
}

.ip-address {
  color: var(--text-color);
  opacity: 0.8;
}

/* Enhanced Cherry blossom petal style */
.petal {
  position: absolute;
  background-color: var(--secondary-color);
  border-radius: 150% 0 150% 0;
  transform: rotate(45deg);
  opacity: 0.8;
  animation-name: fall;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  box-shadow: 0 0 10px var(--secondary-color), 0 0 20px rgba(255, 0, 193, 0.3);
  z-index: 1;
}

.petal::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 150% 0 150% 0;
  filter: blur(1px);
}

@keyframes fall {
  0% {
    opacity: 0;
    transform: rotate(45deg) translateX(0) translateY(0);
  }
  10% {
    opacity: 0.8;
    transform: rotate(60deg) translateX(20px) translateY(50px);
  }
  25% {
    transform: rotate(90deg) translateX(-10px) translateY(150px);
  }
  40% {
    transform: rotate(120deg) translateX(15px) translateY(300px);
  }
  60% {
    transform: rotate(180deg) translateX(-20px) translateY(450px);
  }
  75% {
    transform: rotate(240deg) translateX(10px) translateY(600px);
  }
  90% {
    opacity: 0.8;
    transform: rotate(300deg) translateX(-15px) translateY(700px);
  }
  100% {
    opacity: 0;
    transform: rotate(360deg) translateX(20px) translateY(800px);
  }
}

/* Updated Media Queries */
@media (max-width: 768px) {
  .glitch {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .album-cover {
    flex: 0 0 250px;
    margin: 0 auto;
  }
  
  .player-controls {
    gap: 10px;
  }
  
  .volume-container, .video-volume {
    width: 80px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    text-align: center;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    margin-bottom: 30px;
  }
  
  .timeline-item:nth-child(even) {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .timeline::before {
    left: 0;
    transform: none;
  }
  
  .timeline-date {
    margin: 0 0 10px 20px;
    width: 80px;
    font-size: 0.9rem;
  }
  
  .timeline-content {
    width: calc(100% - 50px);
  }
  
  .albums-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .glitch {
    font-size: 2.2rem;
    letter-spacing: 2px;
  }
  
  .subtitle {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .play-btn, .mute-btn, .video-play-btn, .video-mute-btn, .fullscreen-btn {
    width: 30px;
    height: 30px;
  }
  
  .play-icon, .pause-icon, .volume-icon, .mute-icon, .fullscreen-icon {
    width: 15px;
    height: 15px;
  }
  
  .timeline-date {
    width: 60px;
    font-size: 0.8rem;
    padding: 5px;
  }
  
  .quote-content p {
    font-size: 1rem;
  }
  
  .footer-grid {
    gap: 15px;
  }
}

/* Animation for interactive elements */
.play-btn, .mute-btn, .video-play-btn, .video-mute-btn, .fullscreen-btn,
.language-switcher button, .album-card, .cyber-card, .video-container {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.play-btn:hover, .mute-btn:hover, .video-play-btn:hover, .video-mute-btn:hover, .fullscreen-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px var(--primary-color);
}

.language-switcher button:hover:not(.active) {
  transform: scale(1.1);
  color: var(--primary-color);
}

/* Pulse animation for active elements */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 243, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 243, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 243, 255, 0);
  }
}

.play-btn.playing {
  animation: pulse 2s infinite;
}
  </style>
</head>
<body>
  <div id="app">
    <div class="language-switcher">
      <button id="en-btn" class="active">EN</button>
      <span class="divider">|</span>
      <button id="zh-btn">中文</button>
    </div>
    
    <header class="hero">
      <div class="cherry-blossom-container" id="cherry-blossom-container"></div>
      <div class="hero-content">
        <h1 class="glitch">
          <span class="en">Dave Wong</span>
          <span class="zh">王杰</span>
        </h1>
        <p class="subtitle">
          <span class="en">The Voice of Eternal Romance</span>
          <span class="zh">永恒浪漫之声</span>
        </p>
      </div>
    </header>

    <main>
      <section class="about">
        <h2>
          <span class="en">About Dave Wong</span>
          <span class="zh">关于王杰</span>
        </h2>
        <div class="about-content">
          <div class="album-cover">
            <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="Dave Wong Album Cover">
            <div class="album-glow"></div>
          </div>
          <div class="bio">
            <p class="en">
              Dave Wong (Wang Jie) is a legendary singer-songwriter born on April 20, 1960, in Hong Kong. With his distinctive voice and emotional delivery,
              he became one of the most influential Cantopop and Mandopop artists of the 1980s and 1990s. His songs often explore themes of
              love, longing, and the transient nature of life, resonating deeply with fans across generations.
            </p>
            <p class="zh">
              王杰是1960年4月20日出生于香港的传奇歌手和词曲作家。凭借其独特的嗓音和情感表达，他成为了20世纪80年代和90年代最具影响力的粤语和国语流行音乐艺术家之一。
              他的歌曲常探索爱情、渴望和生命短暂性等主题，深深打动了几代粉丝的心。
            </p>
            <p class="en">
              Rising to fame in 1987 with his breakthrough album "One Man, One Guitar," Dave Wong quickly established himself as a unique voice in the Chinese music scene. His emotional ballads earned him the nickname "King of Melancholy" for his ability to convey profound sadness and heartbreak through his music.
            </p>
            <p class="zh">
              1987年凭借突破性专辑《一个人，一支琴》走红，王杰很快在华语音乐界确立了自己独特的声音地位。他的情感歌谣为他赢得了"忧郁王子"的称号，因为他能够通过音乐传达深刻的悲伤和心碎情感。
            </p>
            <p class="en">
              In 1992, Dave Wong suffered a devastating vocal cord injury allegedly caused by poisoning, permanently damaging his signature voice. Despite this career-altering setback, he continued to record and perform, showing remarkable resilience and dedication to his art and fans.
            </p>
            <p class="zh">
              1992年，王杰遭遇据称是由下毒引起的毁灭性声带损伤，永久损害了他标志性的嗓音。尽管职业生涯受到这一重大挫折，他仍继续录制和表演，展现了对艺术和粉丝的非凡韧性和奉献精神。
            </p>
            <p class="en">
              Despite facing vocal cord damage that significantly impacted his career, Dave Wong's music continues to captivate audiences
              with its raw emotional power and sincere delivery. His songs have become timeless classics, beloved by Chinese music fans worldwide.
            </p>
            <p class="zh">
              尽管声带受损严重影响了他的职业生涯，但王杰的音乐凭借其原始的情感力量和真诚的表达继续吸引着观众。
              他的歌曲已成为永恒的经典，深受全球华语音乐爱好者的喜爱。
            </p>
          </div>
        </div>
      </section>

      <section class="timeline">
        <h2>
          <span class="en">Career Timeline</span>
          <span class="zh">职业生涯时间线</span>
        </h2>
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="timeline-date">1960</div>
            <div class="timeline-content">
              <h3 class="en">Birth in Hong Kong</h3>
              <h3 class="zh">出生于香港</h3>
              <p class="en">Born on April 20 in Hong Kong.</p>
              <p class="zh">4月20日出生于香港。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">1987</div>
            <div class="timeline-content">
              <h3 class="en">Career Breakthrough</h3>
              <h3 class="zh">事业突破</h3>
              <p class="en">Released "One Man, One Guitar" album, propelling him to stardom.</p>
              <p class="zh">发行《一个人，一支琴》专辑，使他一举成名。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">1989</div>
            <div class="timeline-content">
              <h3 class="en">Rising Fame</h3>
              <h3 class="zh">声名鹊起</h3>
              <p class="en">Won his first major music award and held his first concert tour.</p>
              <p class="zh">获得他的第一个重要音乐奖项并举办了首次演唱会巡演。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">1992</div>
            <div class="timeline-content">
              <h3 class="en">Vocal Cord Injury</h3>
              <h3 class="zh">声带受损</h3>
              <p class="en">Suffered the traumatic vocal cord injury that would change his career path.</p>
              <p class="zh">遭遇了改变其职业生涯的创伤性声带损伤。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2000s</div>
            <div class="timeline-content">
              <h3 class="en">Continued Resilience</h3>
              <h3 class="zh">坚持不懈</h3>
              <p class="en">Despite vocal challenges, continued releasing albums and performing for dedicated fans.</p>
              <p class="zh">尽管面临声音挑战，继续为忠实粉丝发行专辑和表演。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Present</div>
            <div class="timeline-content">
              <h3 class="en">Enduring Legacy</h3>
              <h3 class="zh">持久的遗产</h3>
              <p class="en">His music continues to influence new generations of artists and listeners.</p>
              <p class="zh">他的音乐继续影响着新一代艺术家和听众。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="discography">
        <h2>
          <span class="en">Discography</span>
          <span class="zh">音乐作品</span>
        </h2>
        <div class="albums-container">
          <div class="album-card">
            <div class="album-image">
              <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="One Man, One Guitar">
              <div class="album-overlay">
                <span class="album-year">1987</span>
              </div>
            </div>
            <div class="album-details">
              <h3 class="en">One Man, One Guitar</h3>
              <h3 class="zh">一个人，一支琴</h3>
              <p class="en">His breakthrough album that established his signature melancholic style.</p>
              <p class="zh">确立了他忧郁风格的突破性专辑。</p>
            </div>
          </div>
          <div class="album-card">
            <div class="album-image">
              <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="The Undying Heart">
              <div class="album-overlay">
                <span class="album-year">1988</span>
              </div>
            </div>
            <div class="album-details">
              <h3 class="en">The Undying Heart</h3>
              <h3 class="zh">不死的心</h3>
              <p class="en">Featured some of his most emotionally powerful ballads.</p>
              <p class="zh">收录了一些他最具情感力量的歌谣。</p>
            </div>
          </div>
          <div class="album-card">
            <div class="album-image">
              <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="My Destined Loneliness">
              <div class="album-overlay">
                <span class="album-year">1989</span>
              </div>
            </div>
            <div class="album-details">
              <h3 class="en">My Destined Loneliness</h3>
              <h3 class="zh">我注定的孤独</h3>
              <p class="en">Considered one of his masterpiece albums, reflecting deep personal emotions.</p>
              <p class="zh">被认为是他的代表作之一，反映了深刻的个人情感。</p>
            </div>
          </div>
          <div class="album-card">
            <div class="album-image">
              <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="Lover's Tears">
              <div class="album-overlay">
                <span class="album-year">1990</span>
              </div>
            </div>
            <div class="album-details">
              <h3 class="en">Lover's Tears</h3>
              <h3 class="zh">情人的眼泪</h3>
              <p class="en">Contains several hits that cemented his status as a superstar.</p>
              <p class="zh">包含了几首巩固其超级明星地位的热门歌曲。</p>
            </div>
          </div>
          <div class="album-card">
            <div class="album-image">
              <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="Heartbreak in Paradise">
              <div class="album-overlay">
                <span class="album-year">1993</span>
              </div>
            </div>
            <div class="album-details">
              <h3 class="en">Heartbreak in Paradise</h3>
              <h3 class="zh">天堂里的心碎</h3>
              <p class="en">His first album after the vocal cord injury, showing remarkable courage.</p>
              <p class="zh">声带受伤后的第一张专辑，展现了非凡的勇气。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="quotes">
        <h2>
          <span class="en">Memorable Quotes</span>
          <span class="zh">难忘语录</span>
        </h2>
        <div class="quotes-container">
          <div class="quote-card">
            <div class="quote-content">
              <p class="en">"In this vast red dust world, finding you was my greatest fortune."</p>
              <p class="zh">"在这广阔红尘世界中，找到你是我最大的幸运。"</p>
              <span class="quote-source en">- From "Red Dust With You"</span>
              <span class="quote-source zh">- 摘自《红尘有你》</span>
            </div>
          </div>
          <div class="quote-card">
            <div class="quote-content">
              <p class="en">"Even if my voice is gone, my heart still sings."</p>
              <p class="zh">"即使我的声音消失了，我的心仍在歌唱。"</p>
              <span class="quote-source en">- Interview, 1995</span>
              <span class="quote-source zh">- 1995年访谈</span>
            </div>
          </div>
          <div class="quote-card">
            <div class="quote-content">
              <p class="en">"Pain is temporary, but the song of the soul is eternal."</p>
              <p class="zh">"痛苦是暂时的，但灵魂之歌是永恒的。"</p>
              <span class="quote-source en">- Concert speech, 2000</span>
              <span class="quote-source zh">- 2000年演唱会演讲</span>
            </div>
          </div>
        </div>
      </section>

      <section class="music">
        <h2>
          <span class="en">Featured Music</span>
          <span class="zh">精选音乐</span>
        </h2>
        <div class="song-container">
          <div class="song-info cyber-card">
            <h3>
              <span class="en">Red Dust With You</span>
              <span class="zh">红尘有你</span>
            </h3>
            <p class="en">One of Dave Wong's most beloved songs, expressing deep emotions through his signature vocal style. This track showcases his ability to convey profound feelings of love and longing.</p>
            <p class="zh">王杰最受喜爱的歌曲之一，通过他标志性的声音风格表达深刻的情感。这首歌展示了他传达爱与渴望的深刻情感能力。</p>
          </div>
          <div class="audio-player">
            <audio id="song" src="https://tc-212.pages.dev/1741708074944.mp3" preload="metadata"></audio>
            <div class="player-controls">
              <button id="play-pause-btn" class="play-btn">
                <i class="play-icon"></i>
                <i class="pause-icon"></i>
              </button>
              <div class="progress-container">
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <div class="time">
                  <span id="current-time">0:00</span>
                  <span>/</span>
                  <span id="duration">0:00</span>
                </div>
              </div>
              <div class="volume-container">
                <button id="mute-btn" class="mute-btn">
                  <i class="volume-icon"></i>
                  <i class="mute-icon"></i>
                </button>
                <div class="volume-slider">
                  <div class="volume-bar">
                    <div class="volume-level"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="video">
        <h2>
          <span class="en">Concert Highlights</span>
          <span class="zh">演唱会精彩时刻</span>
        </h2>
        <div class="video-container">
          <div class="video-frame-border">
            <video id="concert-video" poster="https://tc-212.pages.dev/1741707565813.jpg" preload="metadata">
              <source src="https://tc-212.pages.dev/1741708503810.mp4" type="video/mp4">
              <p class="en">Your browser does not support the video element.</p>
              <p class="zh">您的浏览器不支持视频元素。</p>
            </video>
          </div>
          <div class="video-controls">
            <button id="video-play-pause" class="video-play-btn">
              <i class="play-icon"></i>
              <i class="pause-icon"></i>
            </button>
            <div class="video-progress-container">
              <div class="video-progress-bar">
                <div class="video-progress"></div>
              </div>
            </div>
            <div class="video-volume">
              <button id="video-mute" class="video-mute-btn">
                <i class="volume-icon"></i>
                <i class="mute-icon"></i>
              </button>
              <div class="video-volume-slider">
                <div class="video-volume-bar">
                  <div class="video-volume-level"></div>
                </div>
              </div>
            </div>
            <button id="video-fullscreen" class="fullscreen-btn">
              <i class="fullscreen-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </main>

    <section class="influence">
        <h2>
          <span class="en">Musical Legacy & Influence</span>
          <span class="zh">音乐遗产与影响</span>
        </h2>
        <div class="influence-content">
          <div class="influence-text">
            <p class="en">Dave Wong's impact on Chinese music extends far beyond his chart success. His emotional delivery and lyrical depth redefined what was possible in Cantopop and Mandopop, inspiring countless artists to explore deeper emotional territory in their music.</p>
            <p class="zh">王杰对华语音乐的影响远超出他的榜单成就。他的情感表达和歌词深度重新定义了粤语和华语流行音乐的可能性，启发了无数艺术家在他们的音乐中探索更深层次的情感领域。</p>
            
            <p class="en">His distinctive vocal technique and storytelling approach have influenced generations of Chinese singers who cite him as a primary inspiration. Many modern balladeers credit Dave Wong for creating a blueprint for conveying genuine emotion in popular music.</p>
            <p class="zh">他独特的声乐技巧和讲故事方式影响了几代华语歌手，他们将其视为主要灵感来源。许多现代抒情歌手将王杰视为在流行音乐中传达真实情感的典范。</p>
            
            <p class="en">Despite the tragedy of his vocal injury, Dave Wong's resilience in continuing to create music has made him not just a musical icon but a symbol of perseverance. His story reminds fans and fellow musicians that true artistry can overcome even the most devastating obstacles.</p>
            <p class="zh">尽管声带受伤是一个悲剧，王杰坚持创作音乐的韧性使他不仅成为音乐偶像，也成为坚韧不拔的象征。他的故事提醒粉丝和音乐同行，真正的艺术可以克服最具毁灭性的障碍。</p>
          </div>
        </div>
      </section>
    <footer class="cyber-footer">
      <div class="footer-grid">
        <div class="footer-section">
          <p class="copyright">
            <a href="https://iaw.us.kg" target="_blank" rel="noopener noreferrer">
              <span class="en">Copyright AWEI</span>
              <span class="zh">版权所有 AWEI</span>
            </a>
          </p>
        </div>
        <div class="footer-section">
          <p class="tribute-note">
            <span class="en">A tribute to the eternal voice of Chinese music</span>
            <span class="zh">致敬华语音乐的永恒之声</span>
          </p>
        </div>
        <div class="footer-section">
          <p class="ip-address">
            <span class="en">Your IP: </span>
            <span class="zh">您的 IP: </span>
            <span id="visitor-ip" class="cyber-text">Loading...</span>
          </p>
        </div>
      </div>
    </footer>
  </div>

  <script>
document.addEventListener('DOMContentLoaded', function() {
  // Language switching
  const enBtn = document.getElementById('en-btn');
  const zhBtn = document.getElementById('zh-btn');
  const enElements = document.querySelectorAll('.en');
  const zhElements = document.querySelectorAll('.zh');

  enBtn.addEventListener('click', function() {
    enElements.forEach(el => el.style.display = 'block');
    zhElements.forEach(el => el.style.display = 'none');
    enBtn.classList.add('active');
    zhBtn.classList.remove('active');
  });

  zhBtn.addEventListener('click', function() {
    enElements.forEach(el => el.style.display = 'none');
    zhElements.forEach(el => el.style.display = 'block');
    zhBtn.classList.add('active');
    enBtn.classList.remove('active');
  });

  // Enhanced Cherry Blossom Animation
  const cherryBlossomContainer = document.getElementById('cherry-blossom-container');
  
  function createCherryBlossom() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Random size with more variation
    const size = Math.random() * 20 + 5;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Random position with more spread
    const startPos = Math.random() * 120 - 10; // Allow some to start slightly outside
    petal.style.left = `${startPos}%`;
    petal.style.top = '-20px';
    
    // Random animation duration with more variation
    const duration = Math.random() * 8 + 5;
    petal.style.animationDuration = `${duration}s`;

    // Random delay
    const delay = Math.random() * 5;
    petal.style.animationDelay = `${delay}s`;
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.3;
    petal.style.opacity = opacity;
    
    // Random rotation
    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    
    // Random color variations
    const hue = Math.random() * 30 - 15; // Slight hue variation
    petal.style.filter = `hue-rotate(${hue}deg) brightness(${Math.random() * 0.4 + 0.8})`;
    
    // Add to container and remove after animation
    cherryBlossomContainer.appendChild(petal);
    
    setTimeout(() => {
      petal.remove();
    }, (duration + delay) * 1000);
  }

  // Generate cherry blossoms with variable frequency
  function startCherryBlossomAnimation() {
    // Initial burst
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createCherryBlossom();
      }, i * 100);
    }
    
    // Continuous generation with varying intervals
    setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 1; // 1-3 petals at a time
      for (let i = 0; i < count; i++) {
        setTimeout(createCherryBlossom, i * 100);
      }
    }, 300);
  }
  
  startCherryBlossomAnimation();

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
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeBar = document.querySelector('.volume-bar');
  const volumeLevel = document.querySelector('.volume-level');

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
    currentTimeEl.textContent = formatTime(song.currentTime);
  }

  // Update volume
  function updateVolume(e) {
    const rect = volumeBar.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    song.volume = percent;
    volumeLevel.style.width = `${percent * 100}%`;
    
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

  // Toggle play/pause with animation enhancements
  playPauseBtn.addEventListener('click', function() {
    if (song.paused) {
      song.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      playPauseBtn.classList.add('playing');
      playPauseBtn.style.background = var(--secondary-color);
    } else {
      song.pause();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      playPauseBtn.classList.remove('playing');
      playPauseBtn.style.background = var(--primary-color);
    }
  });

  // Toggle mute
  muteBtn.addEventListener('click', function() {
    if (song.muted) {
      song.muted = false;
      volumeIcon.style.display = 'block';
      muteIcon.style.display = 'none';
      volumeLevel.style.width = `${song.volume * 100}%`;
    } else {
      song.muted = true;
      volumeIcon.style.display = 'none';
      muteIcon.style.display = 'block';
      volumeLevel.style.width = '0';
    }
  });

  // Progress bar click
  progressBar.addEventListener('click', function(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    song.currentTime = percent * song.duration;
    updateProgress();
  });

  // Volume bar click
  volumeBar.addEventListener('click', updateVolume);

  // Volume bar drag
  let isDraggingVolume = false;
  volumeBar.addEventListener('mousedown', () => { isDraggingVolume = true; });
  document.addEventListener('mouseup', () => { isDraggingVolume = false; });
  document.addEventListener('mousemove', (e) => {
    if (isDraggingVolume) {
      updateVolume(e);
    }
  });

  // Update time
  song.addEventListener('timeupdate', updateProgress);
  
  // Load metadata
  song.addEventListener('loadedmetadata', function() {
    durationEl.textContent = formatTime(song.duration);
  });

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
  const videoVolumeBar = document.querySelector('.video-volume-bar');
  const videoVolumeLevel = document.querySelector('.video-volume-level');
  const fullscreenBtn = document.getElementById('video-fullscreen');
  
  // Toggle video play/pause with animation enhancements
  videoPlayPauseBtn.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      videoPlayIcon.style.display = 'none';
      videoPauseIcon.style.display = 'block';
      videoPlayPauseBtn.classList.add('playing');
      videoPlayPauseBtn.style.background = var(--secondary-color);
      
      // Pause audio when video plays
      if (!song.paused) {
        song.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playPauseBtn.classList.remove('playing');
        playPauseBtn.style.background = var(--primary-color);
      }
    } else {
      video.pause();
      videoPlayIcon.style.display = 'block';
      videoPauseIcon.style.display = 'none';
      videoPlayPauseBtn.classList.remove('playing');
      videoPlayPauseBtn.style.background = var(--primary-color);
    }
  });

  // Click on video to play/pause with enhanced user feedback
  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      videoPlayIcon.style.display = 'none';
      videoPauseIcon.style.display = 'block';
      videoPlayPauseBtn.classList.add('playing');
      videoPlayPauseBtn.style.background = var(--secondary-color);
      
      // Create a visual ripple effect on click
      const ripple = document.createElement('div');
      ripple.className = 'video-ripple';
      ripple.style.position = 'absolute';
      ripple.style.width = '50px';
      ripple.style.height = '50px';
      ripple.style.background = 'rgba(255,255,255,0.3)';
      ripple.style.borderRadius = '50%';
      ripple.style.transformOrigin = 'center';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.zIndex = '10';
      
      // Position the ripple where clicked
      const rect = video.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      ripple.style.left = x - 25 + 'px';
      ripple.style.top = y - 25 + 'px';
      
      video.parentNode.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Pause audio when video plays
      if (!song.paused) {
        song.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playPauseBtn.classList.remove('playing');
        playPauseBtn.style.background = var(--primary-color);
      }
    } else {
      video.pause();
      videoPlayIcon.style.display = 'block';
      videoPauseIcon.style.display = 'none';
      videoPlayPauseBtn.classList.remove('playing');
      videoPlayPauseBtn.style.background = var(--primary-color);
    }
  });
  
  // Add keyframe animation for ripple effect
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(6);
        opacity: 0;
      }
    }
  `;
  document.head.append(style);

  // Update video progress
  function updateVideoProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    videoProgress.style.width = `${percent}%`;
  }

  // Video progress bar click
  videoProgressBar.addEventListener('click', function(e) {
    const rect = videoProgressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
    updateVideoProgress();
  });

  // Toggle video mute
  videoMuteBtn.addEventListener('click', function() {
    if (video.muted) {
      video.muted = false;
      videoVolumeIcon.style.display = 'block';
      videoMuteIcon.style.display = 'none';
      videoVolumeLevel.style.width = `${video.volume * 100}%`;
    } else {
      video.muted = true;
      videoVolumeIcon.style.display = 'none';
      videoMuteIcon.style.display = 'block';
      videoVolumeLevel.style.width = '0';
    }
  });

  // Update video volume
  function updateVideoVolume(e) {
    const rect = videoVolumeBar.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.volume = percent;
    videoVolumeLevel.style.width = `${percent * 100}%`;
    
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
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  });

  // Set initial video volume
  video.volume = 0.7;
  videoVolumeLevel.style.width = `${video.volume * 100}%`;

  // Update video time
  video.addEventListener('timeupdate', updateVideoProgress);

  // Initial states
  videoPlayIcon.style.display = 'block';
  videoPauseIcon.style.display = 'none';

  // Improved language switching with animation
  enBtn.addEventListener('click', function() {
    document.querySelectorAll('.en, .zh').forEach(el => {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    
    zhElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
    });
    
    setTimeout(() => {
      zhElements.forEach(el => el.style.display = 'none');
      enElements.forEach(el => {
        el.style.display = 'block';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';
        
        // Trigger reflow
        void el.offsetWidth;
        
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 400);
    
    enBtn.classList.add('active');
    zhBtn.classList.remove('active');
    
    // Store language preference
    localStorage.setItem('language', 'en');
  });

  zhBtn.addEventListener('click', function() {
    document.querySelectorAll('.en, .zh').forEach(el => {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    
    enElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
    });
    
    setTimeout(() => {
      enElements.forEach(el => el.style.display = 'none');
      zhElements.forEach(el => {
        el.style.display = 'block';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';
        
        // Trigger reflow
        void el.offsetWidth;
        
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 400);
    
    zhBtn.classList.add('active');
    enBtn.classList.remove('active');
    
    // Store language preference
    localStorage.setItem('language', 'zh');
  });

  // Load saved language preference
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage === 'zh') {
    zhBtn.click();
  }

  // Enhanced IP address fetch with animated loading effect
  async function getIpAddress() {
    const ipElement = document.getElementById('visitor-ip');
    
    // Loading animation
    let dots = 0;
    const loadingInterval = setInterval(() => {
      ipElement.textContent = 'Loading' + '.'.repeat(dots % 4);
      dots++;
    }, 300);
    
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      
      clearInterval(loadingInterval);
      
      // Nice typewriter effect for the IP
      const ip = data.ip;
      let index = 0;
      ipElement.textContent = '';
      
      const typeInterval = setInterval(() => {
        if (index < ip.length) {
          ipElement.textContent += ip[index];
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);
      
    } catch (error) {
      clearInterval(loadingInterval);
      ipElement.textContent = 'Unable to fetch IP';
    }
  }

  getIpAddress();
  
  // Add parallax scrolling effect to sections
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Parallax for various elements
    document.querySelectorAll('.album-cover, .video-container, .quote-card').forEach((el, index) => {
      const speed = 0.05 + (index * 0.01);
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
    
    // Glitch intensity increases with scroll
    const glitch = document.querySelector('.glitch');
    const scrollPos = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const glitchIntensity = Math.min(scrollPos * 2, 1);
    
    glitch.style.setProperty('--glitch-intensity', glitchIntensity);
  });
});
  </script>
</body>
</html>
