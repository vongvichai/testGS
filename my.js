
function testGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbwvwvezk7dV8j90VlzDZfyIXfKZJHxLHpx_4LSN_gqMZj7Du-lth24-s5EO5Zz5PBWRhA/exec"
  fetch(url)
  .then(d => d.json())
  .then(d => {
    document.getElementById("app").textContent = d[0].status
  })
}

function addGS() {
  const url ="https://script.google.com/macros/s/AKfycbwSZoqsCojxaknj-dDHjpPNXJx7MkEaMXbopQkoIdMdAClhhUPF5sPHD1myaCj5evQoSg/exec"
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    //referrerPolicy: 'no-referrer',
    body: JSON.stringify({first:"รัตยา",last:"โพธิผลิ",phone:"089-9363552"})
  })
}
document.getElementById("btn").addEventListener("click", testGS)
document.getElementById("btn2").addEventListener("click", addGS)
