getMediumArticles()

async function getMediumArticles() {
  const request = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://forge.medium.com/feed')
  const response = await request.json()
  const items = response.items
  let html = `<h1 class="main-title">
      ${response.feed.description}
    </h1>
    <iframe src="" width="100%" height="0"></iframe>
  <div class="items-container">`
  for (let i = 0; i < 9; i++) {
    html += `<div class="item">
      <h2>${items[i].title}</h2>
      <p>${items[i].author}</p>
      <p>${items[i].description}</p>
    </div>`
  }
  html += '</div>'
  document.querySelector('#root').innerHTML = html
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('iframe').style.height = 0
    document.querySelector('iframe').src = ''
    document.querySelector('.close').style.display = 'none'
  })
  findElement()
}

function findElement() {
  if (!document.querySelector(".main-title")) {
      window.requestAnimationFrame(findElement);
  } else {
    const items = [...document.querySelectorAll('.item a')]
    items.map(item => item.addEventListener('click', e => {
      e.preventDefault()
      let url
      if (e.target.parentNode.outerHTML.substring(0, 2) != '<a') {
        url = e.target.href
      } else {
        url = e.target.parentNode.href
      }
      document.querySelector('iframe').src = url
      document.querySelector('iframe').style.height = '500px'
      document.querySelector('.close').style.display = 'block'
      window.scrollTo(0, 0)
    }))
  }
}
