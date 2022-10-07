const rollVals = [
  'o',
  'o',
  'o',
  'o',
  's',
  'b',
  'u',
  'v',
  'h',
  'x',
  'y',
  'n',
  'o',
  'a',
  'b',
  'c',
  'd',
  'e',
  'j',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'g',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'b',
  'x',
  'y',
  'o',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'g',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'b',
  'x',
  'y',
  'o',
  'o',
  'o',
  'o',
  'o',
  's',
  'b',
  'u',
  'v',
  'h',
  'x',
  'y',
  'n',
  'o',
  'a',
  'b',
  'c',
  'd',
  'e',
  'j',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'g',
  'n',
  'o',
  'o',
  'a',
  'b',
  'c',
  'd',
  'e',
  'j',
  'g',
  'o'
]

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset
  const nav = document.querySelector('nav ul')
  const hero = document.querySelector('.hero')
  const heroContain2 = document.querySelector('#hero2')
  const roll = document.getElementById('O-animate')

  let i = 100 - (scrollPosition / 680) * 100
  let j = Math.round((pageYOffset / innerHeight) * 100)

  // Header backdrop 'o' animation
  // console.log(j);
  if (j < 95 && window.innerWidth >= 696) {
    roll.innerHTML = rollVals[j]
  } else if (j >= 95) {
    roll.innerHTML = rollVals[1]
  }

  //   Header parallax effects
  nav.style.transform = 'translateY(' + scrollPosition * 0.9 + 'px)'
  hero.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)'
  heroContain2.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)'
  nav.style.opacity = `${i - 20}%`
  hero.style.opacity = `${i}%`

  if (scrollPosition == 0) {
    nav.style.opacity = `${i}%`
  }

  // sec1
  const backdrop = document.querySelector('.backdrop1')

  // console.log(window.innerWidth)
  if (
    (window.innerWidth > 888 && scrollPosition > 1360) ||
    (window.innerWidth <= 888 && scrollPosition > 1035)
  ) {
    // backdrop.style.opacity = 0
    backdrop.style.display = 'none'
  } else {
    backdrop.style.display = 'block'
  }
})

const backdrop = document.querySelector('.backdrop1')
const sec2row = document.querySelector('#sec2row')

if (window.innerWidth < 696) {
  backdrop.innerHTML =
    'Creator<br>Expl&nbsp;&nbsp;<span id="O-animate">o</span>rer'
  sec2row.innerHTML = `
  <div class="column" data-aos="fade-left" data-aos-delay="400">
  <div class="projectContainer">
    <img
      src="vendor/images/DINIL RUBASINGHE.png"
      alt="Project - Portfolio (1)"
    />
  </div>
</div>
  <div class="column">
  <h1>Initial Portfolio Website</h1>
  <p>
    My first ever Portfolio personal website created using
    simple HTML,CSS and javascript which was an outcome of a
    deep exploration towards the technologies which
    illuminates the present world of Digital Web. This was a
    great oppotunity for me to understand the advanced
    concepts of CSS and Javascript which I used for many
    beautiful animatinos and web manupulations.
  </p>
  <a
    href="https://dinilrubasinghe.github.io/portfolio-0-1/"
    target="_blank"
    class="button"
    >Visit&nbsp;<i
      class="fa-solid fa-arrow-up-right-from-square"
    ></i
  ></a>
</div>
  `
} else {
  backdrop.innerHTML = 'CreatorExpl&nbsp;&nbsp;<span id="O-animate">o</span>rer'
  sec2row.innerHTML = `
  <div class="column">
  <h1>Initial Portfolio Website</h1>
  <p>
    My first ever Portfolio personal website created using
    simple HTML,CSS and javascript which was an outcome of a
    deep exploration towards the technologies which
    illuminates the present world of Digital Web. This was a
    great oppotunity for me to understand the advanced
    concepts of CSS and Javascript which I used for many
    beautiful animatinos and web manupulations.
  </p>
  <a
    href="https://dinilrubasinghe.github.io/portfolio-0-1/"
    target="_blank"
    class="button"
    >Visit&nbsp;<i
      class="fa-solid fa-arrow-up-right-from-square"
    ></i
  ></a>
</div>
<div class="column" data-aos="fade-left" data-aos-delay="400">
  <div class="projectContainer">
    <img
      src="vendor/images/DINIL RUBASINGHE.png"
      alt="Project - Portfolio (1)"
    />
  </div>
</div>
  `
}
