AOS.init({ duration: 800, easing: "ease-in-sine", delay: 50, once: !0 });

const mobileSection = document.querySelector('#s05');
const psassmarkSection = document.querySelector('.PSASSMARK-wrap');
const cpuzSection = document.querySelector('.CPUZ-wrap');
// type-c 部分的增數器
const typecSection = document.querySelector('.typec-dashboard');

const progressBars = document.querySelectorAll('.PSASSMARK-wrap .left');
const cpuzProgressBars = document.querySelectorAll('.CPUZ-wrap .left');


window.addEventListener('load', () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }


  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.className.includes('PSASSMARK-wrap')) {
          counting($('.counter-value--performance'))
          progressBars.forEach(progressBar => {
            progressBar.animate([
              {width: '0'},
              {width: `${progressBar.getAttribute('data-percent')}%`}
            ],{
              duration: 1500,
              iterations: 1,
              fill: 'forwards',
              easing: 'ease'
            })
          })
        } else if (entry.target.className.includes('CPUZ-wrap')) {
          counting($('.counter-value--cpuperformance'))
          cpuzProgressBars.forEach(progressBar => {
            progressBar.animate([
              {width: '0'},
              {width: `${progressBar.getAttribute('data-percent')}%`}
            ],{
              duration: 1500,
              iterations: 1,
              fill: 'forwards',
              easing: 'ease'
            })
          })
        }else if (entry.target.className.includes('typec-dashboard')) {
          counting($('.counter-value--typec'))
        }
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  observer.observe(psassmarkSection)
  observer.observe(cpuzSection)
  observer.observe(typecSection)
})


function counting (el) {
  el.each(function() {
    const $this = $(this) 
    const countTo = $this.attr('data-count');
    $({
      countNum: 0
    }).animate(
      {
        countNum: countTo
      },
      {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum))
        },
        complete: function() {
          $this.text(this.countNum)
        }
      }
    )
  })
}

const typedArea = document.querySelector('.s01-title');
const typedLine = document.querySelector('.flick')
const typingLine = `<span class="flick">|</span>`
const wholeText = ['A', '', 'F', 'r', 'e', 's', 'h', '', 
                  'D', 'e', 's', 'i', 'g', 'n', '', 'F', 
                  'o', 'r', '', '2', '0', '2', '3']
const showText = [typingLine];
let currentIndex = 0
const typedInterval = setInterval(() => {
  if (currentIndex < wholeText.length) {
    const newNode = document.createElement("span");
    newNode.innerHTML = wholeText[currentIndex] === '' ? '&nbsp;' : wholeText[currentIndex]
    typedArea.insertBefore(newNode, typedLine)
    currentIndex += 1
  } else {
    typedLine.remove()
    clearInterval(typedInterval)
  }
}, 50)

const tabs_cta = document.querySelectorAll('.feature-tab')
const fadeInCards = document.querySelectorAll('.content-card');

tabs_cta.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const animate_index = e.currentTarget.getAttribute('data-animate');
    fadeInCards.forEach((el, index) => {
      if (index === parseInt(animate_index)) {
        el.classList.add('fade-in')
      } else {
        el.classList.remove('fade-in')
      }
    })
  })
})

