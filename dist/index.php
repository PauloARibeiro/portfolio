<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/reset.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet">
  <link rel="stylesheet" href="css/config.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <title>Paulo Ribeiro</title>
</head>
<body>

  <!-- PORTFOLIO MORE INFO -->
  <section id="more-info">
    <div class="holder">
      <i class="fas fa-times fa-2x"></i>
      <img src="img/x-dom-static.jpg" alt="">
      <div class="content">
      </div>
    </div>
  </section>

  <!-- NAV -->
  <div id="hamburger-holder">
    <div id="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <nav>
    <a href="contact">Contact</a>
    <a href="other-stuff">Other Stuff</a>
    <a href="about-me">About</a>
    <a href="portfolio">Work</a>
    <a href="services-holder">Services</a>
  </nav>
  <section id="mobileMenu">
    <nav>
      <a href="services-holder">Services</a>
      <a href="portfolio">Work</a>
      <a href="about-me">About</a>
      <a href="other-stuff">Other Stuff</a>
      <a href="contact">Contact</a>
    </nav>
  </section>
  <!-- INTRO -->
  <section id="intro">
    <div class="squares"></div>
    <div class="container">
      <div class="intro-text-holder">
        <h1>Paulo Ribeiro</h1>
        <h4>Hello! I'm a <span id="dynamic-title">web developer</span></h4>
      </div>
    </div>
  </section>
  <!-- SERVICES -->
  <section class="container" id="services">
    <!-- SERVICES TITLE -->
    <div class="section-title">
      <h1>services</h1>
      <div class="square light-green"></div>
    </div>
    <div class="spacing"></div>
    <!-- SERVICES CONTENT -->
    <div id="services-holder">
      <!-- SERVICES ITEM -->
      <div class="service-content">
        <i class="fas fa-code fa-2x"></i>
        <h3>front-end</h3>
        <p>...and back-end. I can create a website that runs on all devices using the latest technologies.</p>
      </div>

      <!-- SERVICES ITEM -->
      <div class="service-content">
        <i class="fas fa-mobile fa-2x"></i>
        <h3>Responsive</h3>
        <p>My work is fully responsive, it looks good on all device.</p>
      </div>
    </div>
  </section>

  <!-- PARALLAX BACKGROUND -->
  <section id="parallax">
    <div id="parallax-content" class="container">
      <i class="fab fa-html5 fa-5x text-shadow"></i>
      <i class="fab fa-css3 fa-5x text-shadow"></i>
      <i class="fab fa-sass fa-5x text-shadow"></i>
      <i class="fab fa-js fa-5x text-shadow"></i>
      <i class="fab fa-php fa-5x text-shadow"></i>
    </div>
  </section>

 <!-- PORTFOLIO AND ABOUT ME SECTION -->
  <section id="work-about-holder">
    <!-- PORTFOLIO SECTION -->
    <div id="portfolio" class="container">
      <!-- PORTFOLIO TITLE -->
      <div class="section-title">
        <h1>My Work</h1>
        <div class="circle light-yellow"></div>
      </div>
      <div class="spacing"></div>
      <!-- PORTFOLIO CONTENT  -->
      <div class="portfolio-content">
        <a class="portfolio-img" href="XDomDesign/index.html">
          <img src="img/x-dom-static.jpg" alt="">
          <div class="portfolio-overlay"></div>
          <span href="" class="portfolio-button">XDom Design</span>
        </a>
        <a class="portfolio-img" href="Zito/index.html">
          <img src="img/zito-static.jpg" alt="">
          <div class="portfolio-overlay"></div>
          <span  class="portfolio-button">Luis Photographer</span>
        </a>
        <a class="portfolio-img" href="shirtlogo/public/index.php">
          <img src="img/shirt-logo-static.jpg" alt="">
          <div class="portfolio-overlay"></div>
          <span class="portfolio-button">Shirt Logo</span>
        </a>
      </div>
    </div>

    <!-- ABOUT ME -->
    <div id="about-me" class="container">
      <!-- ABOUT ME TITLE -->
      <div class="section-title">
        <h1>about me</h1>
        <div class="triangle"></div>
      </div>
      <div class="spacing"></div>
      <!-- ABOUT ME HOLDER -->
      <div id="about-me-holder">
        <div id="about-me-info">
          <span>
            Hello, I'm a Web Developer currently living in Portugal. If you need a web developer I'm your guy.
          </span>
          <span>
            Creating websites from scratch is a blast, whether front-web or back-end, the process of manifesting an idea from paper (or stone) to reality is awesome.
          </span>
          <span>
            When I'm not coding I like to play video games, go for walks or play guitar. I also enjoy mixing some ingredients in a pan to create awesome flavors, in other words, cooking.
          </span>
          <span>Get in touch.</span>
          <!-- SOCIAL MEDIA CONTENT -->
          <a href="contact" target="_blank" class="envelope"> 
            <i class="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://github.com/PauloARibeiro" target="_blank"> 
            <i class="fab fa-github-square fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/eggnator/" target="_blank">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://codepen.io/eggnator/" target="_blank">
            <i class="fab fa-codepen fa-2x"></i>
          </a>
        </div>
        <div id="about-me-picture">
          <div class="rectangle-fill"></div>
          <img src="img/photo2.jpg" alt="">
          <div class="white-strip"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- OTHER STUFF -->
  <section id="other-stuff">
    <div class="container">
      <!-- OTHER STUFF TITLE -->
      <div class="section-title">
        <h1>OTHER stuff</h1>
        <div class="square light-purple"></div>
      </div>
      <div class="spacing"></div>
      <!-- OTHER STUFF HOLDER -->
      <div id="other-stuff-holder">
        <div class="other-content">
          <div class="game-img margin-right">
            <a  href="https://play.google.com/store/apps/details?id=com.noRageStudio.SamTheSnake" target="_blank">
              <div class="other-overlay"></div>
              <img src="img/sam.png" alt="">  
              <span>Sam The Snake</span>
            </a>
          </div>
          <div class="other-text"> 
            <h3>sam the snake</h3>
            <h5>Meet Sam! This game is a different spin on the classic snake game, with various levels and power-ups. This was one of my games. This game is only available on Android. Check it out and tell me what you think.</h5>
            <a href="https://play.google.com/store/apps/details?id=com.noRageStudio.SamTheSnake" target="_blank">
              <img src="img/google-play-badge.png" alt=""></a>
          </div>
        </div>

        <div class="spacing"></div>

        <div class="other-content">
          <div class="other-text margin-right">
            <h3>Bricks! Assemble</h3>
            <h5>Bricks Assemble is essentially a Tetris clone. Simple and clean, it also has an online leaderboard.</h5>
            <a href="https://play.google.com/store/apps/details?id=com.noRageStudio.BricksAssemble" target="_blank">
              <img src="img/google-play-badge.png" alt="">
            </a>
          </div>
          <div class="game-img">
            <a href="https://play.google.com/store/apps/details?id=com.noRageStudio.BricksAssemble" target="_blank">
              <div class="other-overlay"></div>
              <img src="img/bricks.png" alt="">
              <span>Bricks! Assemble</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="triangle-other"></div>
    <div class="container">
      <h1 class="email-sent">Email Sent</h1>
      <div class="spinner"></div>
      <!-- CONTACT CONTENT -->
      <form action="#" method="post" name="form">
        <label for="name">Name *</label>
        <input type="text" name="name" autocomplete="off">
        <label for="email">Email *</label>
        <input type="email" name="email" autocomplete="off">
        <label for="message">Your message *</label>
        <textarea name="message" rows="8" cols="80"></textarea>
        <input type="submit" value="Send" name="submit">
      </form>
    </div>
  </section>

  <!-- SOCIAL MEDIA -->
  <section id="social-media">
    <div class="container">
      <!-- SOCIAL MEDIA CONTENT -->
      <a href="https://github.com/PauloARibeiro" target="_blank">
        <i class="fab fa-github-square fa-2x"></i>
      </a>
      <a href="https://www.instagram.com/eggnator/" target="_blank">
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a href="https://codepen.io/eggnator/" target="_blank">
        <i class="fab fa-codepen fa-2x"></i>
      </a>
    </div>
  </section>
  <script type="text/javascript" src="js/script.js"></script>
  <script type="text/javascript" src="js/smoothScroll.js"></script>
</body>
</html>
