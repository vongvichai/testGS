const url = "https://script.google.com/macros/s/AKfycbwvwvezk7dV8j90VlzDZfyIXfKZJHxLHpx_4LSN_gqMZj7Du-lth24-s5EO5Zz5PBWRhA/exec"

function testGS() {
  fetch(url)
  .then(d => d.json())
  .then(d => {
    document.getElementById("app").textContent = d[0].status
  })
}

const btn = document.getElementById("btn")
btn.addEventListener("click", testGS)