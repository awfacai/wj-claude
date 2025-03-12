<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>王杰 - 赛博朋克致敬页面</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --neon-text-color: #f40;
      --neon-border-color: #08f;
      --primary-color: #0ff;
      --secondary-color: #f0f;
      --background-color: #070b14;
      --text-color: #fff;
      --cyberpunk-yellow: #fcee0a;
      --cyberpunk-pink: #ff2a6d;
      --cyberpunk-blue: #00e5ff;
      --cyberpunk-purple: #9b4dff;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Rajdhani', 'Microsoft YaHei', sans-serif;
      background-color: var(--background-color);
      color: var(--text-color);
      overflow-x: hidden;
      line-height: 1.6;
      position: relative;
    }
    
    a {
      color: var(--cyberpunk-blue);
      text-decoration: none;
      transition: color 0.3s, text-shadow 0.3s;
    }
    
    a:hover {
      color: var(--cyberpunk-yellow);
      text-shadow: 0 0 10px var(--cyberpunk-yellow);
    }
    
    /* Language Toggle */
    .language-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
    }
    
    .cybr-btn {
      --primary: hsl(180, 85%, 50%);
      --shadow-primary: hsl(180, 90%, 50%);
      --primary-hue: 180;
      --primary-lightness: 50;
      --color: hsl(0, 0%, 100%);
      --font-size: 16px;
      --shadow-primary-hue: 180;
      --label-size: 9px;
      --shadow-secondary-hue: 60;
      --shadow-secondary: hsl(60, 90%, 60%);
      --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
      --border: 4px;
      --shimmy-distance: 5;
      --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
      --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
      --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
      --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
      --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
      --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
      --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
      font-family: 'Rajdhani', 'Microsoft YaHei', sans-serif;
      color: var(--color);
      cursor: pointer;
      background: transparent;
      text-transform: uppercase;
      font-size: var(--font-size);
      outline: transparent;
      letter-spacing: 2px;
      position: relative;
      font-weight: 700;
      border: 0;
      min-width: 100px;
      height: 40px;
      line-height: 40px;
      transition: background 0.2s;
      padding: 0 20px;
    }
    
    .cybr-btn:hover {
      --primary: hsl(180, 85%, 40%);
    }
    
    .cybr-btn:after,
    .cybr-btn:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      clip-path: var(--clip);
      z-index: -1;
    }
    
    .cybr-btn:before {
      background: var(--shadow-primary);
      transform: translate(var(--border), 0);
    }
    
    .cybr-btn:after {
      background: var(--primary);
    }
    
    .cybr-btn__tag {
      position: absolute;
      padding: 1px 4px;
      letter-spacing: 1px;
      line-height: 1;
      bottom: -5%;
      right: 5%;
      font-weight: normal;
      color: hsl(0, 0%, 0%);
      font-size: var(--label-size);
    }
    
    .cybr-btn__glitch {
      position: absolute;
      top: calc(var(--border) * -1);
      left: calc(var(--border) * -1);
      right: calc(var(--border) * -1);
      bottom: calc(var(--border) * -1);
      background: var(--shadow-primary);
      text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
      clip-path: var(--clip);
      animation: glitch 2s infinite;
      display: none;
    }
    
    .cybr-btn:hover .cybr-btn__glitch {
      display: block;
    }
    
    .cybr-btn__glitch:before {
      content: '';
      position: absolute;
      top: calc(var(--border) * 1);
      right: calc(var(--border) * 1);
      bottom: calc(var(--border) * 1);
      left: calc(var(--border) * 1);
      clip-path: var(--clip);
      background: var(--primary);
      z-index: -1;
    }
    
    /* IP Display */
    .ip-display {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.6);
      padding: 8px 15px;
      border-radius: 20px;
      font-family: 'Courier New', monospace;
      border: 1px solid var(--cyberpunk-blue);
      box-shadow: 0 0 10px var(--cyberpunk-blue), 
                  inset 0 0 5px var(--cyberpunk-blue);
      color: var(--cyberpunk-blue);
      font-size: 14px;
      backdrop-filter: blur(5px);
    }
    
    /* Particles Background */
    #particles-js {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    /* Header / Hero section */
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .glitch-container {
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;
    }
    
    .glitch {
      font-size: 8vw;
      font-weight: 700;
      text-transform: uppercase;
      position: relative;
      color: #fff;
      letter-spacing: 5px;
      animation: glitch-skew 1s infinite linear alternate-reverse;
      text-shadow: 
        0 0 10px var(--cyberpunk-blue),
        0 0 20px var(--cyberpunk-blue),
        0 0 40px var(--cyberpunk-blue),
        0 0 80px var(--cyberpunk-blue);
    }
    
    .glitch::before,
    .glitch::after {
      content: attr(data-zh);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .glitch::before {
      left: 2px;
      text-shadow: -2px 0 var(--cyberpunk-pink);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    .glitch::after {
      left: -2px;
      text-shadow: -2px 0 var(--cyberpunk-yellow);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim2 5s infinite linear alternate-reverse;
    }
    
    .subtitle {
      font-size: 2vw;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-top: 10px;
      color: var(--cyberpunk-pink);
      text-shadow: 
        0 0 5px var(--cyberpunk-pink),
        0 0 10px var(--cyberpunk-pink);
      animation: flicker 3s infinite alternate;
    }
    
    /* Navigation */
    .main-nav {
      position: fixed;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
      z-index: 100;
    }
    
    .main-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .main-nav li {
      margin: 20px 0;
    }
    
    .nav-link {
      display: block;
      padding: 10px;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--text-color);
      position: relative;
      transition: all 0.3s;
    }
    
    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: var(--cyberpunk-blue);
      transform: scaleY(0);
      transition: transform 0.3s;
    }
    
    .nav-link:hover,
    .nav-link.active {
      color: var(--cyberpunk-blue);
      padding-left: 20px;
      text-shadow: 0 0 10px var(--cyberpunk-blue);
    }
    
    .nav-link:hover::before,
    .nav-link.active::before {
      transform: scaleY(1);
    }
    
    /* Main content sections */
    .section {
      min-height: 100vh;
      padding: 100px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    
    .neo-container {
      width: 80%;
      max-width: 1200px;
      margin: 0 auto;
      background: rgba(7, 11, 20, 0.8);
      border-radius: 10px;
      padding: 40px;
      box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
      position: relative;
      z-index: 1;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 229, 255, 0.1);
    }
    
    .section-title {
      font-size: 3rem;
      text-transform: uppercase;
      margin-bottom: 50px;
      text-align: center;
      color: var(--cyberpunk-blue);
      position: relative;
      letter-spacing: 3px;
      text-shadow: 0 0 10px var(--cyberpunk-blue);
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: var(--cyberpunk-blue);
      box-shadow: 0 0 10px var(--cyberpunk-blue);
    }
    
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    
    /* Profile Section */
    .profile-image {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 0 30px rgba(155, 77, 255, 0.6);
    }
    
    .image-glitch-wrapper {
      position: relative;
      overflow: hidden;
      border: 2px solid var(--cyberpunk-purple);
    }
    
    .profile-pic {
      width: 100%;
      display: block;
      transform: scale(1.05);
      transition: all 0.5s;
    }
    
    .profile-pic:hover {
      transform: scale(1.1);
    }
    
    .glitch-effect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('https://tc-212.pages.dev/1741707565813.jpg') no-repeat center center;
      background-size: cover;
      opacity: 0.2;
      mix-blend-mode: overlay;
      animation: glitch-animation 3s infinite;
    }
    
    .profile-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .bio {
      font-size: 1.1rem;
      margin-bottom: 20px;
      line-height: 1.6;
      color: #e0e0e0;
    }
    
    .stats-container {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    
    .stat-item {
      text-align: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      border: 1px solid var(--cyberpunk-blue);
      transition: all 0.3s;
      width: 32%;
    }
    
    .stat-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 15px var(--cyberpunk-blue);
    }
    
    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--cyberpunk-yellow);
      text-shadow: 0 0 10px var(--cyberpunk-yellow);
    }
    
    .stat-label {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 5px;
      color: #a0a0a0;
    }
    
    /* Music Player */
    .music-player-container {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 30px;
      position: relative;
      border: 1px solid var(--cyberpunk-purple);
      box-shadow: 0 0 20px rgba(155, 77, 255, 0.4);
    }
    
    .player-title {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--cyberpunk-pink);
      text-shadow: 0 0 10px var(--cyberpunk-pink);
    }
    
    #waveform {
      margin: 20px 0;
      border-radius: 5px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.3);
      height: 60px;
    }
    
    .player-controls {
      display: flex;
      align-items: center;
      margin: 20px 0;
    }
    
    .control-btn {
      background: none;
      border: none;
      color: var(--text-color);
      font-size: 1.5rem;
      cursor: pointer;
      margin-right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid var(--cyberpunk-blue);
    }
    
    .control-btn:hover {
      color: var(--cyberpunk-blue);
      text-shadow: 0 0 10px var(--cyberpunk-blue);
      box-shadow: 0 0 15px var(--cyberpunk-blue);
    }
    
    .volume-control {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    
    .volume-control i {
      margin-right: 10px;
      color: var(--cyberpunk-blue);
    }
    
    .volume-control input {
      width: 100px;
      -webkit-appearance: none;
      height: 4px;
      background: var(--cyberpunk-blue);
      border-radius: 2px;
      outline: none;
    }
    
    .volume-control input::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--cyberpunk-blue);
      cursor: pointer;
      box-shadow: 0 0 10px var(--cyberpunk-blue);
    }
    
    .time-display {
      margin-left: auto;
      font-family: 'Courier New', monospace;
      color: #a0a0a0;
    }
    
    .track-info {
      display: flex;
      align-items: center;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .album-art {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(255, 42, 109, 0.6);
      margin-right: 20px;
    }
    
    .album-art img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    
    .track-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--cyberpunk-yellow);
      margin-bottom: 5px;
    }
    
    .track-artist {
      color: #e0e0e0;
      margin-bottom: 5px;
    }
    
    .track-album {
      color: #a0a0a0;
      font-size: 0.9rem;
    }
    
    /* Top Songs List */
    .top-songs {
      padding: 30px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      border: 1px solid var(--cyberpunk-pink);
      box-shadow: 0 0 20px rgba(255, 42, 109, 0.4);
    }
    
    .top-songs-title {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--cyberpunk-pink);
      text-shadow: 0 0 10px var(--cyberpunk-pink);
    }
    
    .songs-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .song-item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s;
    }
    
    .song-item:hover {
      transform: translateX(10px);
      background: rgba(255, 255, 255, 0.05);
      padding-left: 10px;
      border-left: 3px solid var(--cyberpunk-pink);
    }
    
    .song-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.3);
      margin-right: 20px;
      font-family: 'Rajdhani', monospace;
    }
    
    .song-info {
      display: flex;
      flex-direction: column;
    }
    
    .song-name {
      font-size: 1.1rem;
      color: #e0e0e0;
      margin-bottom: 5px;
    }
    
    .song-year {
      font-size: 0.9rem;
      color: #a0a0a0;
    }
    
    /* Timeline */
    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 0;
    }
    
    .timeline::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      margin-left: -1px;
      background: var(--cyberpunk-blue);
      box-shadow: 0 0 10px var(--cyberpunk-blue);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 50px;
      display: flex;
      align-items: center;
    }
    
    .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }
    
    .timeline-icon {
      width: 50px;
      height: 50px;
      background: var(--cyberpunk-yellow);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 0 15px var(--cyberpunk-yellow);
      color: #000;
      font-size: 20px;
      margin: 0 30px;
    }
    
    .timeline-content {
      width: 45%;
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      position: relative;
      box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
      border: 1px solid var(--cyberpunk-blue);
    }
    
    .timeline-content::after {
      content: "";
      position: absolute;
      top: 20px;
      width: 0;
      height: 0;
      border-style: solid;
    }
    
    .timeline-item:nth-child(odd) .timeline-content::after {
      right: -10px;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent rgba(0, 229, 255, 0.3);
    }
    
    .timeline-item:nth-child(even) .timeline-content::after {
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent rgba(0, 229, 255, 0.3) transparent transparent;
    }
    
    .timeline-year {
      color: var(--cyberpunk-yellow);
      text-shadow: 0 0 5px var(--cyberpunk-yellow);
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    .timeline-text {
      color: #e0e0e0;
      line-height: 1.6;
    }
    
    /* Video Section */
    .video-container {
      width: 100%;
    }
    
    .video-title {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--cyberpunk-yellow);
      text-shadow: 0 0 10px var(--cyberpunk-yellow);
      text-align: center;
    }
    
    .video-wrapper {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 0 30px rgba(252, 238, 10, 0.4);
      border: 2px solid var(--cyberpunk-yellow);
    }
    
    .video-wrapper video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      transition: opacity 0.5s;
      cursor: pointer;
    }
    
    .play-video-btn {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      border: 3px solid var(--cyberpunk-yellow);
      color: var(--cyberpunk-yellow);
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 0 20px var(--cyberpunk-yellow);
    }
    
    .play-video-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 0 30px var(--cyberpunk-yellow);
    }
    
    /* Footer */
    footer {
      background: rgba(7, 11, 20, 0.9);
      padding: 40px 0;
      position: relative;
      z-index: 2;
      backdrop-filter: blur(10px);
    }
    
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .social-links {
      display: flex;
      margin-bottom: 30px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 10px;
      font-size: 20px;
      color: var(--text-color);
      background: rgba(0, 0, 0, 0.3);
      border: 2px solid var(--cyberpunk-blue);
      transition: all 0.3s;
    }
    
    .social-link:hover {
      color: var(--cyberpunk-blue);
      transform: translateY(-5px);
      box-shadow: 0 0 15px var(--cyberpunk-blue);
    }
    
    .copyright {
      color: #a0a0a0;
      font-size: 0.9rem;
      text-align: center;
    }
    
    .copyright-link {
      color: var(--cyberpunk-pink);
      transition: all 0.3s;
    }
    
    .copyright-link:hover {
      color: var(--cyberpunk-yellow);
      text-shadow: 0 0 10px var(--cyberpunk-yellow);
    }
    
    /* Cherry Blossom Effect */
    .petal {
      position: absolute;
      background-color: pink;
      border-radius: 150% 0 150% 0;
      animation: falling linear infinite;
      filter: drop-shadow(0 0 10px rgba(255, 105, 180, 0.8));
      z-index: 1;
    }
    
    /* Animations */
    @keyframes glitch-skew {
      0% { transform: skew(0deg); }
      20% { transform: skew(0deg); }
      24% { transform: skew(-5deg); }
      30% { transform: skew(0deg); }
      70% { transform: skew(0deg); }
      74% { transform: skew(3deg); }
      80% { transform: skew(0deg); }
      100% { transform: skew(0deg); }
    }
    
    @keyframes glitch-anim {
      0% { clip: rect(31px, 9999px, 94px, 0); }
      5% { clip: rect(70px, 9999px, 71px, 0); }
      10% { clip: rect(29px, 9999px, 83px, 0); }
      15% { clip: rect(2px, 9999px, 13px, 0); }
      20% { clip: rect(23px, 9999px, 69px, 0); }
      25% { clip: rect(54px, 9999px, 70px, 0); }
      30% { clip: rect(67px, 9999px, 31px, 0); }
      35% { clip: rect(97px, 9999px, 38px, 0); }
      40% { clip: rect(53px, 9999px, 3px, 0); }
      45% { clip: rect(94px, 9999px, 46px, 0); }
      50% { clip: rect(44px, 9999px, 66px, 0); }
      55% { clip: rect(76px, 9999px, 98px, 0); }
      60% { clip: rect(44px, 9999px, 60px, 0); }
      65% { clip: rect(84px, 9999px, 72px, 0); }
      70% { clip: rect(59px, 9999px, 27px, 0); }
      75% { clip: rect(25px, 9999px, 51px, 0); }
      80% { clip: rect(20px, 9999px, 40px, 0); }
      85% { clip: rect(75px, 9999px, 46px, 0); }
      90% { clip: rect(9px, 9999px, 23px, 0); }
      95% { clip: rect(33px, 9999px, 5px, 0); }
      100% { clip: rect(67px, 9999px, 93px, 0); }
    }
    
    @keyframes glitch-anim2 {
      0% { clip: rect(86px, 9999px, 4px, 0); }
      5% { clip: rect(59px, 9999px, 23px, 0); }
      10% { clip: rect(10px, 9999px, 49px, 0); }
      15% { clip: rect(14px, 9999px, 68px, 0); }
      20% { clip: rect(61px, 9999px, 98px, 0); }
      25% { clip: rect(3px, 9999px, 15px, 0); }
      30% { clip: rect(66px, 9999px, 90px, 0); }
      35% { clip: rect(72px, 9999px, 97px, 0); }
      40% { clip: rect(57px, 9999px, 21px, 0); }
      45% { clip: rect(60px, 9999px, 50px, 0); }
      50% { clip: rect(44px, 9999px, 78px, 0); }
      55% { clip: rect(71px, 9999px, 75px, 0); }
      60% { clip: rect(67px, 9999px, 46px, 0); }
      65% { clip: rect(90px, 9999px, 76px, 0); }
      70% { clip: rect(84px, 9999px, 41px, 0); }
      75% { clip: rect(18px, 9999px, 1px, 0); }
      80% { clip: rect(93px, 9999px, 54px, 0); }
      85% { clip: rect(75px, 9999px, 71px, 0); }
      90% { clip: rect(64px, 9999px, 58px, 0); }
      95% { clip: rect(99px, 9999px, 23px, 0); }
      100% { clip: rect(42px, 9999px, 84px, 0); }
    }
    
    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
      }
      20%, 22%, 24%, 55% {
        opacity: 0.5;
      }
    }
    
    @keyframes glitch-animation {
      0% { transform: translate(0); }
      20% { transform: translate(-5px, 5px); }
      40% { transform: translate(-5px, -5px); }
      60% { transform: translate(5px, 5px); }
      80% { transform: translate(5px, -5px); }
      100% { transform: translate(0); }
    }
    
    @keyframes falling {
      0% { transform: translate(0, -10%); }
      100% { transform: translate(100px, 100vh); }
    }
    
    @keyframes glitch {
      0% { clip-path: var(--clip-one); }
      2%, 8% {
        clip-path: var(--clip-two);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
      }
      6% {
        clip-path: var(--clip-two);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      9% {
        clip-path: var(--clip-two);
        transform: translate(0, 0);
      }
      10% {
        clip-path: var(--clip-three);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      13% {
        clip-path: var(--clip-three);
        transform: translate(0, 0);
      }
      14%, 21% {
        clip-path: var(--clip-four);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      25% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      30% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
      }
      35%, 45% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * -1%));
      }
      40% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * 1%));
      }
      50% {
        clip-path: var(--clip-six);
        transform: translate(0, 0);
      }
      55% {
        clip-path: var(--clip-seven);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      60% {
        clip-path: var(--clip-seven);
        transform: translate(0, 0);
      }
      31%, 61%, 100% {
        clip-path: var(--clip-four);
      }
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr;
      }
      
      .main-nav {
        position: fixed;
        top: auto;
        left: 0;
        bottom: 0;
        width: 100%;
        transform: translateY(0);
        background: rgba(7, 11, 20, 0.9);
        backdrop-filter: blur(10px);
        z-index: 100;
        border-top: 1px solid var(--cyberpunk-blue);
        box-shadow: 0 -5px 20px rgba(0, 229, 255, 0.2);
      }
      
      .main-nav ul {
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
      }
      
      .main-nav li {
        margin: 0;
      }
      
      .nav-link {
        padding: 10px;
        font-size: 12px;
        text-align: center;
      }
      
      .nav-link::before {
        width: 0;
        height: 3px;
        top: 0;
        left: 50%;
        transform: translateX(-50%) scaleX(0);
      }
      
      .nav-link:hover,
      .nav-link.active {
        padding-left: 10px;
      }
      
      .nav-link:hover::before,
      .nav-link.active::before {
        transform: translateX(-50%) scaleX(1);
      }
      
      .glitch {
        font-size: 3rem;
      }
      
      .subtitle {
        font-size: 1rem;
      }
      
      .section {
        padding: 60px 0;
      }
      
      .neo-container {
        width: 90%;
        padding: 20px;
      }
      
      .section-title {
        font-size: 2rem;
        margin-bottom: 30px;
      }
      
      .stats-container {
        flex-direction: column;
      }
      
      .stat-item {
        width: 100%;
        margin-bottom: 10px;
      }
      
      .timeline::before {
        left: 30px;
      }
      
      .timeline-item {
        flex-direction: row !important;
      }
      
      .timeline-icon {
        margin-left: 0;
        margin-right: 20px;
      }
      
      .timeline-content {
        width: 85%;
      }
      
      .timeline-item:nth-child(odd) .timeline-content::after,
      .timeline-item:nth-child(even) .timeline-content::after {
        left: -10px;
        border-width: 10px 10px 10px 0;
        border-color: transparent rgba(0, 229, 255, 0.3) transparent transparent;
      }
      
      .language-toggle,
      .ip-display {
        position: absolute;
        top: 10px;
      }
      
      .play-video-btn {
        width: 60px;
        height: 60px;
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="language-toggle">
      <button id="toggleLanguage" class="cybr-btn">
        <span aria-hidden>中/EN</span>
        <span aria-hidden class="cybr-btn__glitch">中/EN</span>
        <span aria-hidden class="cybr-btn__tag">R25</span>
      </button>
    </div>

    <div class="ip-display">
      <span id="ip-text">IP: </span><span id="ip-address">Loading...</span>
    </div>

    <header class="hero">
      <div class="glitch-container">
        <h1 class="glitch" data-en="DAVE WONG" data-zh="王杰">王杰</h1>
      </div>
      <div class="subtitle" data-en="CYBERPUNK TRIBUTE" data-zh="赛博朋克致敬">赛博朋克致敬</div>
    </header>

    <nav class="main-nav">
      <ul>
        <li><a href="#about" class="nav-link" data-en="PROFILE" data-zh="简介">简介</a></li>
        <li><a href="#music" class="nav-link" data-en="MUSIC" data-zh="音乐">音乐</a></li>
        <li><a href="#story" class="nav-link" data-en="STORY" data-zh="故事">故事</a></li>
        <li><a href="#gallery" class="nav-link" data-en="GALLERY" data-zh="图库">图库</a></li>
      </ul>
    </nav>

    <div id="particles-js"></div>

    <main>
      <section id="about" class="section">
        <div class="neo-container">
          <div class="section-title" data-en="PROFILE" data-zh="个人简介">个人简介</div>
          <div class="content-grid">
            <div class="profile-image">
              <div class="image-glitch-wrapper">
                <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="Dave Wong" class="profile-pic">
                <div class="glitch-effect"></div>
              </div>
            </div>
            <div class="profile-content">
              <p class="bio" data-en="Dave Wong (Wang Jie), born August 20, 1960, is a Hong Kong singer-songwriter and actor who gained immense popularity in the 1980s and 1990s. Known for his distinctive voice and emotional delivery, Wong has sold over 5 million records throughout Asia. His music often explores themes of love, loneliness, and the human experience." data-zh="王杰，1960年8月20日出生于香港，是一位在20世纪80年代和90年代极受欢迎的香港歌手、作曲家和演员。以其独特的嗓音和情感表达著称，王杰在亚洲地区售出超过500万张唱片。他的音乐经常探索爱情、孤独和人类经验等主题。">王杰，1960年8月20日出生于香港，是一位在20世纪80年代和90年代极受欢迎的香港歌手、作曲家和演员。以其独特的嗓音和情感表达著称，王杰在亚洲地区售出超过500万张唱片。他的音乐经常探索爱情、孤独和人类经验等主题。</p>
              <p class="bio" data-en="Despite facing vocal cord damage in 2000 that affected his singing career, Wong's influence on Chinese pop music remains profound. His songs continue to resonate with audiences across generations, and he is regarded as one of the most influential artists in Cantopop history." data-zh="尽管在2000年面临声带损伤影响了他的歌唱事业，但王杰对华语流行音乐的影响仍然深远。他的歌曲继续引起跨代听众的共鸣，他被视为粤语流行音乐史上最具影响力的艺术家之一。">尽管在2000年面临声带损伤影响了他的歌唱事业，但王杰对华语流行音乐的影响仍然深远。他的歌曲继续引起跨代听众的共鸣，他被视为粤语流行音乐史上最具影响力的艺术家之一。</p>
              <div class="stats-container">
                <div class="stat-item">
                  <div class="stat-value">40+</div>
                  <div class="stat-label" data-en="ALBUMS" data-zh="专辑数">专辑数</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">300+</div>
                  <div class="stat-label" data-en="SONGS" data-zh="歌曲数">歌曲数</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">5M+</div>
                  <div class="stat-label" data-en="RECORDS SOLD" data-zh="唱片销量">唱片销量</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="music" class="section">
        <div class="neo-container">
          <div class="section-title" data-en="MUSIC" data-zh="音乐作品">音乐作品</div>
          <div class="content-grid">
            <div class="music-player-container">
              <div class="player-title" data-en="RED DUST WITH YOU" data-zh="红尘有你">红尘有你</div>
              <div id="waveform"></div>
              <div class="player-controls">
                <button id="playBtn" class="control-btn">
                  <i class="fas fa-play"></i>
                </button>
                <button id="pauseBtn" class="control-btn" style="display:none">
                  <i class="fas fa-pause"></i>
                </button>
                <div class="volume-control">
                  <i class="fas fa-volume-up"></i>
                  <input type="range" id="volume" min="0" max="100" value="80">
                </div>
                <div class="time-display">
                  <span id="currentTime">00:00</span> / <span id="duration">00:00</span>
                </div>
              </div>
              <div class="track-info">
                <div class="album-art">
                  <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="Album Art">
                </div>
                <div class="track-details">
                  <div class="track-name" data-en="Red Dust With You" data-zh="红尘有你">红尘有你</div>
                  <div class="track-artist">Dave Wong / 王杰</div>
                  <div class="track-album" data-en="Classic Collection" data-zh="经典精选集">经典精选集</div>
                </div>
              </div>
            </div>
            <div class="top-songs">
              <div class="top-songs-title" data-en="ICONIC TRACKS" data-zh="代表作品">代表作品</div>
              <ul class="songs-list">
                <li class="song-item">
                  <div class="song-number">01</div>
                  <div class="song-info">
                    <span class="song-name" data-en="One Man One Guitar" data-zh="一人一梦一吉他">一人一梦一吉他</span>
                    <span class="song-year">1987</span>
                  </div>
                </li>
                <li class="song-item">
                  <div class="song-number">02</div>
                  <div class="song-info">
                    <span class="song-name" data-en="Undying Love" data-zh="不死的爱">不死的爱</span>
                    <span class="song-year">1989</span>
                  </div>
                </li>
                <li class="song-item">
                  <div class="song-number">03</div>
                  <div class="song-info">
                    <span class="song-name" data-en="The Wounded City" data-zh="伤心的城市">伤心的城市</span>
                    <span class="song-year">1992</span>
                  </div>
                </li>
                <li class="song-item">
                  <div class="song-number">04</div>
                  <div class="song-info">
                    <span class="song-name" data-en="A Simple Man" data-zh="一个简单的人">一个简单的人</span>
                    <span class="song-year">1993</span>
                  </div>
                </li>
                <li class="song-item">
                  <div class="song-number">05</div>
                  <div class="song-info">
                    <span class="song-name" data-en="Red Dust With You" data-zh="红尘有你">红尘有你</span>
                    <span class="song-year">1995</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="story" class="section">
        <div class="neo-container">
          <div class="section-title" data-en="STORY" data-zh="生平故事">生平故事</div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-year">1960</h3>
                <p class="timeline-text" data-en="Born on August 20 in Hong Kong." data-zh="8月20日出生于香港。">8月20日出生于香港。</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-music"></i>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-year">1985</h3>
                <p class="timeline-text" data-en="Released debut album 'The First Album' and began his musical journey." data-zh="发行首张专辑《第一张专辑》，开始了他的音乐之旅。">发行首张专辑《第一张专辑》，开始了他的音乐之旅。</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-award"></i>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-year">1987-1992</h3>
                <p class="timeline-text" data-en="Golden period of his career, released multiple hit albums and gained widespread recognition across Asia." data-zh="职业生涯的黄金时期，发行多张热门专辑，在亚洲各地获得广泛认可。">职业生涯的黄金时期，发行多张热门专辑，在亚洲各地获得广泛认可。</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-film"></i>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-year">1990s</h3>
                <p class="timeline-text" data-en="Expanded into acting, appearing in films and television dramas while continuing his music career." data-zh="拓展演艺事业，在继续音乐事业的同时参演电影和电视剧。">拓展演艺事业，在继续音乐事业的同时参演电影和电视剧。</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-heartbeat"></i>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-year">2000</h3>
                <p class="timeline-text" data-en="Suffered vocal cord damage that significantly affected his singing ability and career." data-zh="遭受声带损伤，严重影响了他的歌唱能力和职业生涯。">遭受声带损伤，严重影响了他的歌唱能力和职业生涯。</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-microphone-alt"></i>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-year">2000s-Present</h3>
                <p class="timeline-text" data-en="Despite challenges, continues to release music and maintain his status as a legendary figure in Chinese pop music history." data-zh="尽管面临挑战，仍继续发行音乐并保持其在华语流行音乐史上的传奇地位。">尽管面临挑战，仍继续发行音乐并保持其在华语流行音乐史上的传奇地位。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="section">
        <div class="neo-container">
          <div class="section-title" data-en="GALLERY" data-zh="媒体库">媒体库</div>
          <div class="video-container">
            <div class="video-title" data-en="LIVE CONCERT HIGHLIGHTS" data-zh="演唱会精彩片段">演唱会精彩片段</div>
            <div class="video-wrapper">
              <video id="concert-video" controls poster="https://tc-212.pages.dev/1741707565813.jpg">
                <source src="https://tc-212.pages.dev/1741708503810.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="video-overlay">
                <button id="playVideoBtn" class="play-video-btn">
                  <i class="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-weibo"></i></a>
          <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
          <a href="#" class="social-link"><i class="fab fa-spotify"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="copyright">
          <a href="https://iaw.us.kg" target="_blank" class="copyright-link">© 版权所有 AWEI</a>
        </div>
      </div>
    </footer>

    <!-- Audio element (hidden) -->
    <audio id="song" preload="auto">
      <source src="https://tc-212.pages.dev/1741708074944.mp3" type="audio/mp3">
    </audio>
  </div>
  
  <!-- 外部库 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/6.6.3/wavesurfer.min.js"></script>
  
  <script>
    // 等待DOM内容加载
    document.addEventListener('DOMContentLoaded', function() {
      // 初始化元素和变量
      const appElement = document.getElementById('app');
      const audioElement = document.getElementById('song');
      const playBtn = document.getElementById('playBtn');
      const pauseBtn = document.getElementById('pauseBtn');
      const volumeSlider = document.getElementById('volume');
      const currentTimeElement = document.getElementById('currentTime');
      const durationElement = document.getElementById('duration');
      const toggleLanguageBtn = document.getElementById('toggleLanguage');
      const videoElement = document.getElementById('concert-video');
      const playVideoBtn = document.getElementById('playVideoBtn');
      const videoOverlay = document.querySelector('.video-overlay');
      const ipAddressElement = document.getElementById('ip-address');
      const navLinks = document.querySelectorAll('.nav-link');
      
      // 语言状态
      let currentLanguage = 'zh'; // 默认为中文
      
      // 初始化particles.js
      if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#00e5ff", "#ff2a6d", "#fcee0a"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00e5ff",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" }
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.8 } },
              push: { particles_nb: 3 }
            }
          }
        });
      }
      
      // 初始化WaveSurfer
      let wavesurfer;
      if (typeof WaveSurfer !== 'undefined') {
        wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: '#9b4dff',
          progressColor: '#ff2a6d',
          cursorColor: '#fcee0a',
          barWidth: 2,
          barRadius: 2,
          cursorWidth: 2,
          height: 60,
          responsive: true,
          hideScrollbar: true,
          barGap: 3
        });
        
        // 加载音频文件到WaveSurfer
        wavesurfer.load('https://tc-212.pages.dev/1741708074944.mp3');
      }
      
      // 格式化时间显示（将秒转换为mm:ss）
      function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }
      
      // 更新时间显示
      function updateTime() {
        if (wavesurfer) {
          currentTimeElement.textContent = formatTime(wavesurfer.getCurrentTime());
          requestAnimationFrame(updateTime);
        }
      }
      
      // 初始化音频控件
      if (wavesurfer) {
        wavesurfer.on('ready', function() {
          durationElement.textContent = formatTime(wavesurfer.getDuration());
          updateTime();
          volumeSlider.value = wavesurfer.getVolume() * 100;
        });
        
        // 音频事件监听
        playBtn.addEventListener('click', function() {
          wavesurfer.play();
          playBtn.style.display = 'none';
          pauseBtn.style.display = 'flex';
        });
        
        pauseBtn.addEventListener('click', function() {
          wavesurfer.pause();
          pauseBtn.style.display = 'none';
          playBtn.style.display = 'flex';
        });
        
        wavesurfer.on('finish', function() {
          pauseBtn.style.display = 'none';
          playBtn.style.display = 'flex';
        });
        
        volumeSlider.addEventListener('input', function() {
          wavesurfer.setVolume(this.value / 100);
        });
      } else {
        // 如果WaveSurfer不可用，则使用原生音频播放器
        const audioPlayer = document.getElementById('song');
        
        playBtn.addEventListener('click', function() {
          audioPlayer.play();
          playBtn.style.display = 'none';
          pauseBtn.style.display = 'flex';
        });
        
        pauseBtn.addEventListener('click', function() {
          audioPlayer.pause();
          pauseBtn.style.display = 'none';
          playBtn.style.display = 'flex';
        });
        
        audioPlayer.addEventListener('ended', function() {
          pauseBtn.style.display = 'none';
          playBtn.style.display = 'flex';
        });
        
        audioPlayer.addEventListener('timeupdate', function() {
          currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
        });
        
        audioPlayer.addEventListener('loadedmetadata', function() {
          durationElement.textContent = formatTime(audioPlayer.duration);
        });
        
        volumeSlider.addEventListener('input', function() {
          audioPlayer.volume = this.value / 100;
        });
      }
      
      // 视频播放器
      playVideoBtn.addEventListener('click', function() {
        videoOverlay.style.opacity = '0';
        videoElement.play();
        setTimeout(() => {
          videoOverlay.style.display = 'none';
        }, 500);
      });
      
      videoElement.addEventListener('pause', function() {
        videoOverlay.style.display = 'flex';
        videoOverlay.style.opacity = '1';
      });
      
      // 语言切换功能
      toggleLanguageBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        
        // 更新所有带有data-en和data-zh属性的元素
        const elementsToTranslate = document.querySelectorAll('[data-en][data-zh]');
        elementsToTranslate.forEach(element => {
          element.textContent = element.getAttribute(`data-${currentLanguage}`);
        });
      });
      
      // 获取并显示IP地址
      async function fetchIPAddress() {
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          ipAddressElement.textContent = data.ip;
        } catch (error) {
          console.error('Error fetching IP address:', error);
          ipAddressElement.textContent = 'Unavailable';
        }
      }
      
      fetchIPAddress();
      
      // 樱花特效
      function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // 随机属性
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 5;
        const hue = Math.random() * 60 + 330; // 粉色到紫色色调
        
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${left}vw`;
        petal.style.animationDuration = `${animationDuration}s`;
        petal.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
        petal.style.opacity = Math.random() * 0.5 + 0.5;
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        appElement.appendChild(petal);
        
        // 动画完成后移除花瓣
        setTimeout(() => {
          petal.remove();
        }, animationDuration * 1000);
      }
      
      // 定期创建花瓣
      setInterval(createPetal, 300);
      
      // 平滑滚动导航
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
            
            // 更新活动导航链接
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
          }
        });
      });
      
      // 滚动时更新活动导航链接
      window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
              }
            });
          }
        });
      });
      
      // 为个人图像添加故障效果
      const profileImage = document.querySelector('.profile-image');
      if (profileImage) {
        profileImage.addEventListener('mouseover', function() {
          this.querySelector('.glitch-effect').style.opacity = '0.8';
        });
        
        profileImage.addEventListener('mouseout', function() {
          this.querySelector('.glitch-effect').style.opacity = '0.2';
        });
      }

      // 初始化歌曲项点击事件
      const songItems = document.querySelectorAll('.song-item');
      songItems.forEach(item => {
        item.addEventListener('click', function() {
          // 模拟选择歌曲 - 可以扩展为实际播放不同的歌曲
          songItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
          
          // 视觉反馈
          this.style.transform = 'translateX(10px)';
          this.style.borderLeft = `3px solid var(--cyberpunk-pink)`;
          setTimeout(() => {
            this.style.transform = '';
            this.style.borderLeftWidth = '0px';
          }, 500);
        });
      });
    });
  </script>
</body>
</html>
