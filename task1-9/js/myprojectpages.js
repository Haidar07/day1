const blogs = []

function addBlog (e) {
  e.preventDefault()

  const title = document.getElementById('nameProject').value
  const calculateDuration = () => {
    const startDate = new Date(document.getElementById('startDate').value)
    const endDate = new Date(document.getElementById('endDate').value)

    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)
    const oneDay = 24 * 60 * 60 * 1000
    const selisih = Math.abs(endDate - startDate)
    const hasil = Math.round(selisih / oneDay)

    return hasil
  }
  const duration = calculateDuration()
  const content = document.getElementById('tm').value

  // bagian checkbox
  const nodejs = document.getElementById('nodejs').checked
  const reactjs = document.getElementById('reactjs').checked
  const angular = document.getElementById('angular').checked
  const vuejs = document.getElementById('vuejs').checked

  // bagian input gambar
  let image = document.getElementById('inputGambar').files
  image = URL.createObjectURL(image[0])

  // masukin setiap wadah nilai ke 1 object biar mudah
  const blog = {
    title,
    duration,
    content,
    nodejs,
    reactjs,
    angular,
    vuejs,
    image
  }

  blogs.unshift(blog)
  renderBlog()
  console.log('blog', blogs)
}

function renderBlog () {
  let html = ''

  for (let index = 0; index < blogs.length; index++) {
    html += `<div class="blog-card">
          <a href="detil_project.html" target="_blank">
          <img src="${blogs[index].image}" class="blog-card-img" />
          </a>          
          <h3 class="blog-card-title">>${blogs[index].title}</h3>
           <p id="durasi">Durasi pengerjaan : ${blogs[index].duration} hari</p>
          <p id="blog-card-article">${blogs[index].content}</p>
          <div class="icon-card">
            ${blogs[index].nodejs ? `<i class="fa-brands fa-node-js"></i>` : ''}
            ${blogs[index].reactjs ? `<i class="fa-brands fa-react"></i>` : ''}
            ${blogs[index].angular ? `<i class="fa-brands fa-angular"></i>` : ''}
            ${blogs[index].vuejs ? `<i class="fa-brands fa-vuejs"></i>` : ''}
          </div>
          <div class="btn-card">
            <button>edit</button>
            <button>delete</button>
          </div>
      </div>`
  }
  document.getElementById('contentBlogs').innerHTML = html
}

renderBlog()
