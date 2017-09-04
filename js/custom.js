'use strict'

var anchorLinks,
  dest,
  anchor
anchorLinks = document.querySelector('nav').querySelectorAll('a')

for (var i = 0; i < anchorLinks.length; i++) {
  anchorLinks[i].addEventListener('click', function() {
    anchor = this.getAttribute('href')
    dest = document.querySelector(anchor)
    window.scroll({top: dest.offsetTop, behavior: 'smooth'})
  })
}

function portfolioLoading() {

  if (document.documentElement.clientWidth > 787) {
    // import complicated desktop scripts
    const videoResume = document.querySelector('.video-resume')
    if (videoResume !== null) { // Check to see if element exists
      videoResume.innerHTML = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/rnm6Ynow0Yc?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&loop=1&playlist=rnm6Ynow0Yc&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>'
    }

  } else {
    const videoResume = document.querySelector('.video-resume')
    if (videoResume !== null) {
      videoResume.innerHTML = '<img src="images/screenshoot/full_resume_01.jpg" alt="resume">'
    }
  }

  if (document.documentElement.clientWidth > 787) {
    const videoGuide = document.querySelector('.video-guide')
    if (videoGuide !== null) {
      videoGuide.innerHTML = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/k3SsOqVgwrM?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&loop=1&playlist=658O5nb_9As&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>'
    }
  } else {
    const videoGuide = document.querySelector('.video-guide')
    if (videoGuide !== null) {
      videoGuide.innerHTML = '<img src="images/screenshoot/full_brandguide_01.jpg" alt="resume">'
    }
  }

	if (document.documentElement.clientWidth > 787) {
    const videoNgo = document.querySelector('.video-ngo')
    if (videoNgo !== null) {
      videoNgo.innerHTML = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/Y97ocZcPg-U?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&loop=1&playlist=MWpMhueK6E4&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>'
    }
  } else {
    const videoNgo = document.querySelector('.video-ngo')
    if (videoNgo !== null) {
      videoNgo.innerHTML = '<img src="images/screenshoot/full_ngo_01.jpg" alt="resume">'
    }
  }

	if (document.documentElement.clientWidth > 787) {
    const videoCuisine = document.querySelector('.video-cuisine')
    if (videoCuisine !== null) {
      videoCuisine.innerHTML = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/jZPSMX09Vy8?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&loop=1&playlist=h51JCXbItc8&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>'
    }
  } else {
    const videoCuisine = document.querySelector('.video-cuisine')
    if (videoCuisine !== null) {
      videoCuisine.innerHTML = '<img src="images/screenshoot/full_cuisine_01.jpg" alt="resume">'
    }
  }

	if (document.documentElement.clientWidth > 787) {
    const videoArticle = document.querySelector('.video-article')
    if (videoArticle !== null) {
      videoArticle.innerHTML = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/nWwAg_22Zbk?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&loop=1&playlist=ePcY1ZEtLZs&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>'
    }
  } else {
    const videoArticle = document.querySelector('.video-article')
    if (videoArticle !== null) {
      videoArticle.innerHTML = '<img src="images/screenshoot/full_article_01.jpg" alt="resume">'
    }
  }

	if (document.documentElement.clientWidth > 787) {
    const videoEcommerce = document.querySelector('.video-ecommerce')
    if (videoEcommerce !== null) {
      videoEcommerce.innerHTML = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/nWwAg_22Zbk?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&loop=1&playlist=ePcY1ZEtLZs&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>'
    }
  } else {
    const videoEcommerce = document.querySelector('.video-ecommerce')
    if (videoEcommerce !== null) {
      videoEcommerce.innerHTML = '<img src="images/screenshoot/full_ecommerce_01.jpg" alt="resume">'
    }
  }

}

portfolioLoading()

// On resize run portfolioLoading again
window.addEventListener('resize', function(e) {
  e.preventDefault()
  // setTimeout(function () {
  // 	portfolioLoading()
  // }, 1500)
  portfolioLoading()
})
