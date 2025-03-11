<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>王杰 Dave Wang | 纪念网站</title>
    <style>
        :root {
            --primary-color: #00f3ff;
            --secondary-color: #ff00e6;
            --bg-color: #0a0a12;
            --text-color: #ffffff;
            --card-bg: rgba(20, 20, 35, 0.7);
            --neon-glow: 0 0 10px var(--primary-color), 0 0 20px var(--primary-color);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            background-image: 
                linear-gradient(rgba(0, 0, 30, 0.8), rgba(0, 0, 30, 0.8)),
                url('https://tc-212.pages.dev/1741707565813.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            background-blend-mode: overlay;
            min-height: 100vh;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid var(--primary-color);
            margin-bottom: 40px;
            box-shadow: 0 4px 15px rgba(0, 243, 255, 0.2);
        }
        
        .logo {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: var(--neon-glow);
        }
        
        .nav {
            display: flex;
            gap: 20px;
        }
        
        .lang-switch {
            background-color: transparent;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }
        
        .lang-switch:hover {
            background-color: var(--primary-color);
            color: var(--bg-color);
            box-shadow: var(--neon-glow);
        }
        
        .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 60px 0;
        }
        
        .hero-title {
            font-size: 3.5rem;
            margin-bottom: 20px;
            text-shadow: var(--neon-glow);
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 40px;
            opacity: 0.9;
        }
        
        .hero-image {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 40px;
            border: 3px solid var(--primary-color);
            box-shadow: var(--neon-glow);
        }
        
        section {
            margin-bottom: 60px;
            background-color: var(--card-bg);
            border-radius: 10px;
            padding: 30px;
            backdrop-filter: blur(10px);
            border: 1px solid var(--primary-color);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .section-title {
            font-size: 2rem;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--primary-color);
            color: var(--primary-color);
        }
        
        .section-content {
            line-height: 1.8;
        }
        
        .audio-player, .video-player {
            width: 100%;
            margin: 20px 0;
        }
        
        .audio-player {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
        }
        
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 ratio */
            height: 0;
            overflow: hidden;
        }
        
        .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        
        audio::-webkit-media-controls-panel {
            background-color: rgba(30, 30, 50, 0.8);
        }
        
        audio::-webkit-media-controls-play-button,
        audio::-webkit-media-controls-volume-slider {
            filter: hue-rotate(210deg) saturate(1.5);
        }
        
        .timeline {
            margin-top: 40px;
        }
        
        .timeline-item {
            margin-bottom: 25px;
            display: flex;
        }
        
        .timeline-year {
            flex: 0 0 80px;
            font-weight: bold;
            color: var(--primary-color);
            padding-right: 20px;
        }
        
        .timeline-content {
            flex: 1;
            position: relative;
            padding-left: 25px;
            border-left: 2px solid var(--primary-color);
        }
        
        .timeline-content::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 5px;
            width: 14px;
            height: 14px;
            background-color: var(--primary-color);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--primary-color);
        }
        
        footer {
            text-align: center;
            padding: 30px 0;
            border-top: 1px solid var(--primary-color);
            font-size: 0.9rem;
        }
        
        .footer-content {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
        }
        
        .footer-link {
            color: var(--primary-color);
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .footer-link:hover {
            color: var(--secondary-color);
            text-shadow: 0 0 5px var(--secondary-color);
        }
        
        .ip-display {
            margin-top: 10px;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
        }
        
        .glitch-text {
            position: relative;
            animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
            0% {
                text-shadow: 0.05em 0 0 var(--primary-color), -0.05em -0.025em 0 var(--secondary-color);
            }
            14% {
                text-shadow: 0.05em 0 0 var(--primary-color), -0.05em -0.025em 0 var(--secondary-color);
            }
            15% {
                text-shadow: -0.05em -0.025em 0 var(--primary-color), 0.025em 0.025em 0 var(--secondary-color);
            }
            49% {
                text-shadow: -0.05em -0.025em 0 var(--primary-color), 0.025em 0.025em 0 var(--secondary-color);
            }
            50% {
                text-shadow: 0.025em 0.05em 0 var(--primary-color), 0.05em 0 0 var(--secondary-color);
            }
            99% {
                text-shadow: 0.025em 0.05em 0 var(--primary-color), 0.05em 0 0 var(--secondary-color);
            }
            100% {
                text-shadow: 0.05em 0 0 var(--primary-color), -0.05em -0.025em 0 var(--secondary-color);
            }
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
            
            .section-title {
                font-size: 1.6rem;
            }
            
            .timeline-item {
                flex-direction: column;
            }
            
            .timeline-year {
                margin-bottom: 10px;
            }
            
            .timeline-content {
                padding-left: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">Dave Wang</div>
            <div class="nav">
                <button class="lang-switch" onclick="toggleLanguage()">English / 中文</button>
            </div>
        </header>
        
        <div class="hero">
            <img src="https://tc-212.pages.dev/1741707565813.jpg" alt="王杰" class="hero-image">
            <h1 class="hero-title lang-zh">王杰 <span class="glitch-text">纪念网站</span></h1>
            <h1 class="hero-title lang-en" style="display:none;">Dave Wang <span class="glitch-text">Memorial</span></h1>
            <p class="hero-subtitle lang-zh">永远的华语乐坛传奇</p>
            <p class="hero-subtitle lang-en" style="display:none;">Legendary Chinese Music Icon</p>
        </div>
        
        <section id="music">
            <h2 class="section-title lang-zh">经典音乐</h2>
            <h2 class="section-title lang-en" style="display:none;">Classic Music</h2>
            <div class="section-content">
                <p class="lang-zh">王杰的《红尘有你》是他众多经典作品中的代表作之一，歌声深情款款，温柔感人。</p>
                <p class="lang-en" style="display:none;">Dave Wang's "Red Dust Has You" is one of his representative works among numerous classics, with a deeply emotional and tenderly moving voice.</p>
                
                <div class="audio-player">
                    <h3 class="lang-zh">《红尘有你》</h3>
                    <h3 class="lang-en" style="display:none;">"Red Dust Has You"</h3>
                    <audio controls src="https://tc-212.pages.dev/1741708074944.mp3" style="width: 100%;">
                        您的浏览器不支持音频播放器。
                    </audio>
                </div>
            </div>
        </section>
        
        <section id="video">
            <h2 class="section-title lang-zh">演唱会视频</h2>
            <h2 class="section-title lang-en" style="display:none;">Concert Video</h2>
            <div class="section-content">
                <p class="lang-zh">王杰的现场演唱会展现了他独特的嗓音魅力和舞台感染力。</p>
                <p class="lang-en" style="display:none;">Dave Wang's live concert showcases his unique vocal charm and captivating stage presence.</p>
                
                <div class="video-container">
                    <video controls poster="https://tc-212.pages.dev/1741707565813.jpg">
                        <source src="https://tc-212.pages.dev/1741708503810.mp4" type="video/mp4">
                        您的浏览器不支持视频播放器。
                    </video>
                </div>
            </div>
        </section>
        
        <section id="biography">
            <h2 class="section-title lang-zh">王杰简介</h2>
            <h2 class="section-title lang-en" style="display:none;">Dave Wang Biography</h2>
            <div class="section-content">
                <div class="lang-zh">
                    <p>王杰，本名王纪宏，1961年5月1日出生于台湾台北市，是华语乐坛著名的流行歌手、作曲家和音乐制作人。他因独特的沙哑嗓音和感人至深的情歌而被誉为"情歌王子"。</p>
                    <p>王杰在1980年代末至1990年代中期达到事业巅峰，推出了《一场游戏一场梦》、《是否我真的一无所有》、《我不会哭》、《忘了你忘了我》等经典歌曲，在华语流行音乐史上留下了深刻的印记。</p>
                    <p>王杰不仅是一位出色的歌手，还是一位才华横溢的创作人。他的歌曲不仅旋律优美，歌词更是充满深情与哲理，触动了无数听众的心灵。他的音乐风格独特，将摇滚、民谣和流行等多种元素融为一体，形成了独树一帜的"王杰风格"。</p>
                    <p>尽管在事业顶峰时遭遇嗓音损伤，但王杰对音乐的热爱和执着从未改变。他以顽强的毅力和不屈的精神继续创作和演唱，成为华语乐坛精神的象征，激励了一代又一代的音乐人和听众。</p>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">1961年</div>
                            <div class="timeline-content">出生于台湾台北市</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1987年</div>
                            <div class="timeline-content">发行首张专辑《一场游戏一场梦》，正式踏入歌坛</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1989年</div>
                            <div class="timeline-content">推出《是否我真的一无所有》，成为华语乐坛经典</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1992年</div>
                            <div class="timeline-content">推出《我》专辑，收录《红尘有你》等经典歌曲</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1995年</div>
                            <div class="timeline-content">嗓子因不明原因受损，声音变得沙哑</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2000年后</div>
                            <div class="timeline-content">虽嗓音受损，仍坚持音乐创作和演出，精神令人敬佩</div>
                        </div>
                    </div>
                </div>
                
                <div class="lang-en" style="display:none;">
                    <p>Dave Wang, born Wang Jichong on May 1, 1961, in Taipei, Taiwan, is a renowned Chinese pop singer, composer, and music producer. He is known as the "Prince of Love Songs" for his unique husky voice and deeply moving romantic songs.</p>
                    <p>Wang reached the peak of his career from the late 1980s to the mid-1990s, releasing classic songs such as "A Game A Dream," "Do I Really Have Nothing," "I Won't Cry," and "Forget You Forget Me," leaving a profound mark in the history of Chinese pop music.</p>
                    <p>Dave Wang is not only an outstanding singer but also a talented creator. His songs are not only melodious, but the lyrics are also full of deep emotion and philosophy, touching the hearts of countless listeners. His musical style is unique, integrating rock, folk, and pop elements to form the distinctive "Dave Wang style."</p>
                    <p>Despite suffering vocal damage at the peak of his career, Wang's love and dedication to music never changed. He continued to create and sing with tenacious perseverance and unyielding spirit, becoming a symbol of spirit in the Chinese music scene, inspiring generations of musicians and listeners.</p>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">1961</div>
                            <div class="timeline-content">Born in Taipei, Taiwan</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1987</div>
                            <div class="timeline-content">Released his first album "A Game A Dream," officially entering the music scene</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1989</div>
                            <div class="timeline-content">Released "Do I Really Have Nothing," becoming a classic in Chinese pop music</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1992</div>
                            <div class="timeline-content">Released the album "Me," including classic songs like "Red Dust Has You"</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1995</div>
                            <div class="timeline-content">Suffered vocal damage due to unknown reasons, voice became husky</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">After 2000</div>
                            <div class="timeline-content">Despite vocal damage, continued music creation and performances, showing admirable spirit</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="legacy">
            <h2 class="section-title lang-zh">音乐遗产</h2>
            <h2 class="section-title lang-en" style="display:none;">Musical Legacy</h2>
            <div class="section-content">
                <div class="lang-zh">
                    <p>王杰的音乐作品超过30张专辑，包含数百首歌曲。他的创作不仅影响了一代人的成长，也为华语流行音乐的发展做出了重要贡献。</p>
                    <p>他的歌曲特点是真挚动人的情感表达和深刻的人生哲理，如《一场游戏一场梦》探讨人生与命运，《是否我真的一无所有》表达对爱情的执着，《我不会哭》展现坚强的意志力。</p>
                    <p>尽管遭遇嗓音危机，王杰依然凭借着对音乐的热爱和执着继续创作，用自己的经历诠释了"痛并快乐着"的人生态度，成为无数音乐人的榜样。</p>
                    <p>王杰的歌曲被无数歌手翻唱，他的音乐风格和创作理念也影响了后来的许多音乐人。他用音乐讲述的故事和传达的情感，至今仍在华语乐坛回荡。</p>
                </div>
                
                <div class="lang-en" style="display:none;">
                    <p>Dave Wang's musical works include over 30 albums with hundreds of songs. His creations not only influenced the growth of a generation but also made important contributions to the development of Chinese pop music.</p>
                    <p>His songs are characterized by sincere and moving emotional expression and profound life philosophy, such as "A Game A Dream" exploring life and fate, "Do I Really Have Nothing" expressing persistence in love, and "I Won't Cry" demonstrating strong willpower.</p>
                    <p>Despite facing a vocal crisis, Wang continued to create with his love and persistence for music, interpreting the life attitude of "pain yet happiness" through his own experiences, becoming a role model for countless musicians.</p>
                    <p>Wang's songs have been covered by numerous singers, and his musical style and creative concepts have influenced many later musicians. The stories he told and the emotions he conveyed through music still resonate in the Chinese music scene today.</p>
                </div>
            </div>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="lang-zh">此网站仅供纪念王杰及其音乐遗产</div>
                <div class="lang-en" style="display:none;">This website is solely for commemorating Dave Wang and his musical legacy</div>
                <div>© <span id="year">2024</span> <a href="https://iaw.us.kg" class="footer-link">AWEI</a>. All Rights Reserved.</div>
                <div class="ip-display">您的IP地址: <span id="user-ip">加载中...</span></div>
            </div>
        </div>
    </footer>

    <script>
        // 获取当前年份
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // 切换语言功能
        function toggleLanguage() {
            const zhElements = document.querySelectorAll('.lang-zh');
            const enElements = document.querySelectorAll('.lang-en');
            
            zhElements.forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            });
            
            enElements.forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            });
        }
        
        // 获取用户IP地址
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('user-ip').textContent = data.ip;
            })
            .catch(error => {
                document.getElementById('user-ip').textContent = "无法获取";
            });
        
        // 添加滚动动画
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(50px)';
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(section);
            });
        });
    </script>
</body>
</html>
