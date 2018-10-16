class Animations {
  constructor() {
    //this will be the container for the shapes
    this.intro = document.querySelector('#intro');

    this.AnimateIntro();
  }

  AnimateIntro(){
    this.CreateSquares();
    //total width of the page
    let x = innerWidth - 200;
    //total height of the page
    let y = innerHeight;
    //list of all the active shapes
    let squareList = document.querySelectorAll('#intro .squares');

    //this will loop through the all shapes and randomly pick a position in the screen to place them
    squareList.forEach((square) =>{
      let posX = Math.floor(Math.random() * x) + 1;
      let posY = Math.floor(Math.random() * y) + 1;
      square.style.top = posY + "px";
      square.style.left = posX + "px";
    })

    //this will repeat the above but it will not loop forever every 5 seconds
    setInterval(() =>{
      squareList.forEach((square) =>{
        let size = Math.floor(Math.random() * 100) + 30;
        let posX = Math.floor(Math.random() * x) + 1;
        let posY = Math.floor(Math.random() * y) + 1;

        square.style.width = size + 'px';
        square.style.height = size + 'px';
        square.style.top = posY + "px";
        square.style.left = posX + "px";
      })
    }, 5000);

  }
  CreateSquares(){
    //the amount  of squares
    let count = 12;
    //loops through the total amount of shapes
    for(var i = 0; i < count; i++){
      let size = Math.floor(Math.random() * 100) + 30;
      //creates delay
      let delay = Math.random() * 5.2;
      //creates new div element
      let newSquare = document.createElement("div");
      //adds the class 'squares' to the div
      newSquare.classList.add('squares');
      newSquare.style.width = size + 'px';
      newSquare.style.height = size + 'px';
      //add the delay value to the shape
      newSquare.style.animationDelay = delay + "s";
      //appends shape to the parent
      intro.append(newSquare);
    }
  }
}

class Scroll {
  constructor() {
    window.onscroll = () =>{				//THIS WILL TRIGGER WHEN THE USER  SCROLLS DOWN
    	this.IntroParallax();
      this.NavBar();
    };
  }

  // THIS WILL CREATE A PARALLAX EFFECT WITH THE INTRO TEXT
  IntroParallax(){
    let scrollValue = document.documentElement.scrollTop;

    document.querySelector('#intro .container .intro-text-holder').style.transform = `translate(0px, ${scrollValue/2}%)`;
  }

  NavBar(){
    let navBar = document.querySelector('nav');
    // MOBILE NAV HOLDER
    let mobileNav = document.querySelector('#hamburger-holder');
    let mobileNavChild = document.querySelector('#hamburger-holder #hamburger');

    // THIS WILL MAKE THE NAV BAR SHRINK AND CREATE A BORDER BOTTOM WHEN USER SCROLLS DOWN
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      navBar.style.background = '#303139';
      navBar.style.borderBottom = '1px solid #3D3E47';
      navBar.style.padding = '3.5px 8vw';

      mobileNav.style.background = '#303139';
      mobileNav.style.borderBottom = '1px solid #3D3E47';
      mobileNav.style.height = '60px';

      mobileNavChild.style.top = '20px';
    // WHEN THE USER SCROLLS TO THE TOP THE SCROLL BAR WILL REST ITS SIZE AND REMOVE THE BORDER BOTTOM
    }else {
      navBar.style.background = 'none';
      navBar.style.borderBottom = 'none';
      navBar.style.padding = '1.2vw 8vw';

      mobileNav.style.background = 'none';
      mobileNav.style.borderBottom = 'none';
      mobileNav.style.height = 'none';

      mobileNavChild.style.top = '35px';
    }
  }
}

class MobileMenu {
  constructor() {
    this.isSelected = false;
    this.hamburger = document.querySelector('#hamburger-holder #hamburger');
    this.navHolder = document.querySelector('#mobileMenu');
    this.nav = document.querySelectorAll('#mobileMenu nav a');

    this.nav.forEach(nav => {
      nav.addEventListener('click', (e) =>{
        this.ToggleMenu();
      })
    })

    hamburger.addEventListener('click', () =>{
      this.ToggleMenu();
    })
  }

  ToggleMenu(){
    if(this.isSelected){
      this.hamburger.classList.remove('close');
      setTimeout(() => {
        this.navHolder.style.transform = 'translate3d(0, -100%, 0)';
      }, 822);
      this.nav.forEach((navItem) =>{
          navItem.style.transform = 'translate3d(80%, 0, 0)';
      })
      this.isSelected = false;
    }else{
      this.hamburger.classList.add('close');
      setTimeout(() => {
        this.nav.forEach((navItem) =>{
            navItem.style.transform = 'translate3d(0, 0, 0)';
        })
      }, 222);
      this.navHolder.style.transform = 'translate3d(0, 0, 0)';
      this.isSelected = true;
    }
  }
}

class MediaQueries {
  constructor() {
    if (window.matchMedia("(max-width: 868px)").matches) {
      let contentHolder = document.querySelectorAll('.other-content');
      let content = document.querySelectorAll('.other-content div');
      let googlePlay = document.querySelectorAll('#other-stuff #other-stuff-holder .other-content .other-text a');
      let imgHolder = document.querySelectorAll('#other-stuff #other-stuff-holder .other-content .game-img');

      contentHolder[0].append(content[0]);


      imgHolder.forEach((imgHolder, i) =>{
        imgHolder.append(googlePlay[i]);
      })
    }
  }
}

class CallSmoothScroll {
  constructor() {
    // THIS IS FOR THE ENVELOPE ICON IN THE ABOUT ME SECTION
    this.envelope = document.querySelector('.envelope');
    this.envelope.addEventListener('click', (e) =>{
      e.preventDefault();
      this.GetSelectedTarget(this.envelope.href);
    });
    // THIS IS FOR THE NAV LINKS
    this.targets = document.querySelectorAll('nav a');
    //THIS WILL LOOP THROUGH ALL THE NAV LINKS
    this.targets.forEach((target) =>{
      //ADDS CLICK EVENT LISTENER TO THE NAV LINKS
      target.addEventListener('click', (e) =>{
        //PREVENTS PAGE FROM REFRESHING
        e.preventDefault();
        //THIS WILL GET THE HREF URL OF THE CURRENTLY CLICKED NAV LINK
        this.GetSelectedTarget(target.href);
      })
    })
  }

  GetSelectedTarget(target){
    if(target.includes('portfolio')){
      //GETS THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      let targetDiv = document.querySelector('#portfolio');
      // THIS FIRST PARAMETER IS ELEMENT THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      // THE SECOND PARAMETER IS THE DISTANCE FROM THE HEADER (USE ONLY IF THERE IS A FIXED HEADER)
      SmoothScroll(targetDiv, -35, 1000);
    }
    // USE THIS SECTION TO CHECK THE CURRENTLY SELECTED LINK
    if(target.includes('about-me')){
      //GETS THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      let targetDiv = document.querySelector('#about-me');
      console.log(targetDiv);
      // THIS WILL CALL THE FUNCTION THAT SCROLLS THE SCREEN INTO POSITION
      // THIS FIRST PARAMETER IS ELEMENT THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      // THE SECOND PARAMETER IS THE DISTANCE FROM THE HEADER (USE ONLY IF THERE IS A FIXED HEADER)
      SmoothScroll(targetDiv, 105, 1000);
    }
    if(target.includes('services-holder')){
      //GETS THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      let targetDiv = document.querySelector('#services-holder');
      // THIS FIRST PARAMETER IS ELEMENT THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      // THE SECOND PARAMETER IS THE DISTANCE FROM THE HEADER (USE ONLY IF THERE IS A FIXED HEADER)
      SmoothScroll(targetDiv, 265, 1000);
    }
    if(target.includes('other-stuff')){
      //GETS THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      let targetDiv = document.querySelector('#other-stuff');
      // THIS FIRST PARAMETER IS ELEMENT THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      // THE SECOND PARAMETER IS THE DISTANCE FROM THE HEADER (USE ONLY IF THERE IS A FIXED HEADER)
      SmoothScroll(targetDiv, 105, 1000);
    }
    if(target.includes('contact')){
      //GETS THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      let targetDiv = document.querySelector('#contact');
      // THIS FIRST PARAMETER IS ELEMENT THE ELEMENT THAT THE SCREEN WILL SCROLL TO
      // THE SECOND PARAMETER IS THE DISTANCE FROM THE HEADER (USE ONLY IF THERE IS A FIXED HEADER)
      SmoothScroll(targetDiv, 65, 1000);
    }

  }
}
class MoreInfo {
  constructor() {
    this.work = document.querySelectorAll('#portfolio .portfolio-content .portfolio-img');
    this.holder = document.getElementById('more-info');
    this.holderChild = this.holder.querySelector('.holder');
    this.closeBtn = document.querySelector('#more-info .holder .fas');
    this.img = document.querySelector('#more-info .holder img');

    this.work.forEach((work, i) =>{
      work.addEventListener('click', (e) =>{
        e.preventDefault();
        this.Display(i);
      })
    })

    this.closeBtn.addEventListener('click', () => {
      this.Hide();
    })
  }

  Hide(){
    this.holderChild.style.top = "-100%";
    setTimeout(() =>{
      this.holder.style.right = '100%';
      this.img.classList.remove('fade');
    }, 600);
  }

  Display(index){
    this.holder.style.right = '0%';
    this.holderChild.style.top = "50%";
    switch (index) {
      case 0:
      this.img.src = "img/x-dom-static.jpg";
      this.holder.querySelector('.content').innerHTML = `
      <a href="XDomDesign/index.html">View Page</a>
      <a href="https://github.com/PauloARibeiro/XDom-Design" target="_blank">Source Code</a>
      <div class="title">
      <h1 >XDom Design</h1>
      <div class="under-bar"></div>
      <h4 class="description">Description</h4>
      </div>
      <span>
      XDom Design was one of my first websites. At this time I was learning flexbox and CSS grid (they're awesome). It's a single page example of a business website.

      <br>I used AOS which is an on scroll library, that's how I got the website to have the cool scroll animations.

      <br>It's got a fixed nav bar with smooth scrolling when users click on a link, it's responsive and works on all devices.
      </span>
      <h1 class="technologies">Technologies</h1>
      <div id="parallax-content">
      <i class="fab fa-html5 fa-5x text-shadow"></i>
      <i class="fab fa-css3 fa-5x text-shadow"></i>
      <i class="fab fa-js fa-5x text-shadow"></i>
      </div>`
      break;

      case 1:
      this.img.src = "img/zito-static.jpg";
      this.holder.querySelector('.content').innerHTML = `
      <a href="Zito/index.html">View Page</a>
      <a href="https://github.com/PauloARibeiro/luis-photographer" target="_blank">Source Code</a>
      <div class="title">
      <h1 >Luis Fernandes Photographer</h1>
      <div class="under-bar"></div>
      <h4 class="description">Description</h4>
      </div>
      <span>
        This website is a photographer portfolio, I made it for one of my friends.
        <br>It's a very simple and clean website, nothing too crazy about it, but it showcases what's important which is his work.
        <br>It's got a nice custom made image gallery modal and it's responsive.
      </span>
      <h1 class="technologies">Technologies</h1>
      <div id="parallax-content">
      <i class="fab fa-html5 fa-5x text-shadow"></i>
      <i class="fab fa-css3 fa-5x text-shadow"></i>
      <i class="fab fa-js fa-5x text-shadow"></i>
      </div>`
      break;

      case 2:
      this.img.src = "img/shirt-logo-static.jpg";
      this.holder.querySelector('.content').innerHTML = `
      <a href="shirtlogo/public/index.php">View Page</a>
      <a href="https://github.com/PauloARibeiro/Shirt-Logo" target="_blank">Source Code</a>
      <div class="title">
      <h1 >Shirt Logo</h1>
      <div class="under-bar"></div>
      <h4 class="description">Description</h4>
      </div>
      <span>
        Shirt Logo is an e-commerce site. Everything built from scratch.
        <br><br>
        <li>User Creation</li>
        <li>Edit user info (name, address, profile imgage, etc...)</li>
        <li>Password reset</li>
        <li>List of items (related items, popular items)</li>
        <li>Item filtering by color, size, and price</li>
        <li>Cart system for guests and registered users</li>
        <li>Favorites list</li>
      </span>
      <h1 class="technologies">Technologies</h1>
      <div id="parallax-content">
      <i class="fab fa-html5 fa-5x text-shadow"></i>
      <i class="fab fa-css3 fa-5x text-shadow"></i>
      <i class="fab fa-js fa-5x text-shadow"></i>
      <i class="fab fa-php fa-5x text-shadow"></i>
      </div>`;
      break;

      case 3:
      this.img.src = "img/tatsufood.jpg";
      this.holder.querySelector('.content').innerHTML = `
      <a href="tatsufood/index.php">View Page</a>
      <a href="https://github.com/PauloARibeiro/Shirt-Logo" target="_blank">Source Code</a>
      <div class="title">
      <h1 >Tatsufood</h1>
      <div class="under-bar"></div>
      <h4 class="description">Description</h4>
      </div>
      <span>
        Tatsufood is a restaurant website. It was built with HTML, SCSS, Javascript(es6). It's got all the information you would want from a restaurant, such as:
        <br><br>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Schedule</li>
      </span>
      <h1 class="technologies">Technologies</h1>
      <div id="parallax-content">
      <i class="fab fa-html5 fa-5x text-shadow"></i>
      <i class="fab fa-css3 fa-5x text-shadow"></i>
      <i class="fab fa-js fa-5x text-shadow"></i>
      <i class="fab fa-sass fa-5x text-shadow"></i>
      </div>`;
      break;
    }
    setTimeout(() =>{
      this.img.classList.add('fade');
    }, 600);
  }
}

const animations = new Animations;
const scroll = new Scroll;
const mobileMenu = new MobileMenu;
const mediaQueries = new MediaQueries;
const callSmoothScroll = new CallSmoothScroll;
const moreInfo = new MoreInfo;

const modal = document.querySelector('#more-info');

window.addEventListener("click",(e) =>{
  // THIS WILL CLOSE THE MOBILE MENU MODAL
  if(e.target == mobileMenu.navHolder){
    mobileMenu.hamburger.classList.remove('close');
    setTimeout(() => {
      mobileMenu.navHolder.style.transform = 'translate3d(0, -100%, 0)';
    }, 822);
    mobileMenu.nav.forEach((navItem) =>{
        navItem.style.transform = 'translate3d(80%, 0, 0)';
    })
    mobileMenu.isSelected = false;
  }else if (e.target == modal){
    moreInfo.Hide();
  }
}); 
 